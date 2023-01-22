import {
  Box,
  Card,
  CardBody,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Api from "../api/Api";
import axios from "axios";
import { tab } from "@testing-library/user-event/dist/tab";
import { Icon } from "../components/Icon";
import { PRODUCTS } from "../constants/constants";

export function TableRow({
  images,
  name,
  price,
  category,
  ratings,
  id,
  handleTable,
  long_desc,
  short_desc,
  strike_price,
}) {
  // console.log(name)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [ename, setename] = useState();
  const [eimage, seteimage] = useState();
  const [eimage1, seteimage1] = useState();
  const [eimage2, seteimage2] = useState();
  const [eprice, seteprice] = useState();
  const [eratings, seteratings] = useState();
  const [longd, setLongd] = useState();
  const [shortd, setShortd] = useState();
  const [strikep, setStrikep] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setename(name);
    seteimage(images[0]);
    seteimage1(images[1]);
    seteimage2(images[2]);
    seteprice(price);
    seteratings(ratings);
    setLongd(long_desc);
    setShortd(short_desc);
    setStrikep(strike_price);
  }, []);

  let api = new Api();

  const EditProduct = async () => {
    setLoading(true);
    let res = await api.getProductsData(`/${category}`);
    console.log(res);

    let newData = res.map((el) => {
      if (el.id == id) {
        el.name = ename;
        el.images = [eimage, eimage1, eimage2];
        el.price = +eprice;
        el.ratings = +eratings;
        el.long_desc = longd;
        el.short_desc = shortd;
        el.strike_price = strikep;
      }
      return el;
    });

    console.log(newData);
    let res1 = await axios(PRODUCTS + `/${category}`, {
      method: "patch",
      data: { items: newData },
    });

    console.log(res1);
    setLoading(false);
    onClose();
    handleTable(category);
  };

  const deleteItem = async () => {
    let res = await api.getProductsData(`/${category}`);
    console.log(res);

    let newData = res.filter((el) => el.id != id);

    let res1 = await axios(PRODUCTS+`/${category}`,
      {
        method: "patch",
        data: { items: newData },
      }
    );

    console.log(res1);
    handleTable(category);
  };

  return (
    <>
      <Tr>
        <Td>
          <Image src={images[0]} w="60px" h="60px"></Image>
        </Td>
        <Td maxW="50px" overflow="hidden">
          {name}
        </Td>
        <Td>{price}</Td>
        <Td>{category}</Td>
        <Td>{ratings}</Td>
        <Td onClick={onOpen}>
          <Icon
            image="https://cdn-icons-png.flaticon.com/512/1827/1827933.png"
            size={16}
          ></Icon>
        </Td>
        <Td onClick={deleteItem}>
          <Icon
            image="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            size={16}
          ></Icon>
        </Td>
      </Tr>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit this item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <label>
              Product Name
              <Input
                value={ename}
                onChange={(e) => setename(e.target.value)}
              ></Input>
            </label>
            <label>
              Product Image1
              <Input
                value={eimage}
                onChange={(e) => seteimage(e.target.value)}
              ></Input>
            </label>
            <label>
              Product Image2
              <Input
                value={eimage1}
                onChange={(e) => seteimage1(e.target.value)}
              ></Input>
            </label>
            <label>
              Product Image3
              <Input
                value={eimage2}
                onChange={(e) => seteimage2(e.target.value)}
              ></Input>
            </label>
            <label>
              Product Price
              <Input
                value={eprice}
                onChange={(e) => seteprice(e.target.value)}
              ></Input>
            </label>
            <label>
              Product Strike Price
              <Input
                value={strikep}
                onChange={(e) => setStrikep(e.target.value)}
              ></Input>
            </label>
            <label>
              Product Ratings
              <Input
                value={eratings}
                onChange={(e) => seteratings(e.target.value)}
              ></Input>
            </label>
            <label>
              Short Description
              <Input
                value={shortd}
                onChange={(e) => setShortd(e.target.value)}
              ></Input>
            </label>
            <label>
              Long Description
              <Textarea
                value={longd}
                onChange={(e) => setLongd(e.target.value)}
              ></Textarea>
            </label>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button isLoading={loading} onClick={EditProduct} variant="ghost">
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

let product = {
  id: null,
  images: null,
  name: "",
  short_desc: "",
  long_desc: "",
  category: "",
  price: null,
  strike_price: 0,
  ratings: 0,
  color: "",
  delivery_time: 3,
  sizes: null,
  size: null,
};

export default function AdminPanel() {
  let api = new Api();

  const [value, setValue] = useState(""); // State to store the value of the input field
  const [cat, setCat] = useState([]);
  const [nproduct, setnPorcut] = useState(product);
  const [tableData, setTableData] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value); // Update the value of the input field when the user types
  };

  useEffect(() => {
    const getCat = async () => {
      let res = await api.getData("/products");
      setCat(res.data);
    };

    getCat();
  }, []);

  const handleSubmit = async (event) => {
    value.toLowerCase();
    event.preventDefault();
    let obj = {
      id: value,
      items: [],
    };
    let res = await api.setData(obj, PRODUCTS);
    console.log(res);
  };

  const handleProSubmit = async (event) => {
    event.preventDefault();
    let res = await api.getProductsData(`/${nproduct.category}`);
    console.log(res);
    nproduct.id = Math.random() + Date.now();
    nproduct.price = Number(nproduct.price);
    nproduct.strike_price = Number(nproduct.strike_price);
    nproduct.delivery_time = Number(nproduct.delivery_time);
    nproduct.ratings = Number(nproduct.ratings);
    nproduct.images=nproduct.images?.split(",");
    nproduct.sizes=nproduct.sizes?.split(",")
    let res1 = await axios(PRODUCTS+`/${nproduct.category}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        method: "patch",
        data: { items: [...res, nproduct] },
      }
    );
    console.log(res1);
    console.log(nproduct)
  };

  const handleFormData = (e) => {
    const val =e.target.name=="size"?e.target.checked:e.target.value;

    setnPorcut({ ...nproduct, [e.target.name]: val });
  };

  const handleTable = async (value) => {
    let res = await api.getProductsData(`/${value}`);
    setTableData([...res]);
  };

  console.log(nproduct)
  return (
    <Box className="container">
      <Flex>
        <VStack w="30%">
          <form onSubmit={handleSubmit}>
            <Flex direction="column" padding={8} m="auto">
              <Card>
                <CardBody>
                  <FormControl>
                    <FormLabel htmlFor="myInput">Add new category</FormLabel>
                    <Input
                      borderColor="black"
                      borderWidth="1px"
                      id="myInput"
                      type="text"
                      value={value}
                      onChange={handleChange}
                      placeholder="Enter new category"
                    />
                    <Button
                      variant="outline"
                      color="white"
                      bg="#202340"
                      type="submit"
                      mt={4}
                    >
                      Add
                    </Button>
                  </FormControl>
                </CardBody>
              </Card>
            </Flex>
          </form>

          <Divider />

          <Heading fontSize="medium">Add New Product</Heading>

          <form onSubmit={handleProSubmit}>
            <Flex
              m="auto"
              p={8}
              direction="column"
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              }
            >
              <FormControl>
                <FormLabel htmlFor="imageLink">Image Links</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="imageLinks"
                  name="images"
                  placeholder="Enter image link"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="price">Price</FormLabel>
                <Input
                  type="number"
                  onChange={handleFormData}
                  id="price"
                  name="price"
                  placeholder="Enter price"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="Strike Price">Strike Price</FormLabel>
                <Input
                  type="number"
                  onChange={handleFormData}
                  id="Strike Price"
                  name="strike_price"
                  placeholder="Enter strike price"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="name"
                  name="name"
                  placeholder="Enter name"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="ratings">Ratings</FormLabel>
                <Input
                  type="number"
                  onChange={handleFormData}
                  id="ratings"
                  name="ratings"
                  placeholder="Enter ratings"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="category">Category</FormLabel>
                <Select id="category" name="category" onChange={handleFormData}>
                  <option value="">Select category</option>
                  {cat.map((el) => (
                    <option value={el.id}>{el.id}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="Color">Color</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="Color"
                  name="color"
                  placeholder="Enter color name"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="Delivery Time">Delivery Time</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="Delivery Time"
                  name="delivery_time"
                  placeholder="Enter delivery time"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="Sizes">Sizes</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="Sizes"
                  name="sizes"
                  placeholder="Enter all sizes seprated by comma"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="is Size?">is Size?</FormLabel>
               <Checkbox name="size" onChange={handleFormData}>yes</Checkbox>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="Long Description">
                  Short Description
                </FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="Short Description"
                  name="short_desc"
                  placeholder="Enter short description"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="Long Description">
                  Long Description
                </FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="Long Description"
                  name="long_desc"
                  placeholder="Enter long description"
                />
              </FormControl>

              <Button
                variant="outline"
                color="white"
                bg="#202340"
                mt={4}
                type="submit"
              >
                Submit
              </Button>
            </Flex>
          </form>
        </VStack>

        <Box w="70%" borderLeftColor="#202340" borderWidth="1px" m="16px">
          <Select
            w="20%"
            m="24px"
            onChange={(e) => {
              handleTable(e.target.value);
            }}
          >
            <option value="">Select category</option>
            {cat.map((el) => (
              <option value={el.id}>{el.id}</option>
            ))}
          </Select>

          <TableContainer>
            <Table variant="simple">
              <TableCaption>Select category to edit products</TableCaption>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Categrory</Th>
                  <Th>Ratings</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {console.log(tableData)}
                {tableData?.map((el) => (
                  <TableRow {...el} handleTable={handleTable} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Box>
  );
}
