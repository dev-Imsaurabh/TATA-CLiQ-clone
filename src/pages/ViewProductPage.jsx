import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  // Grid,
  // Heading,
  HStack,
  Image,
  Input,
  Text,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import {
  Table,
  // Thead,
  Tbody,
  // Tfoot,
  Tr,
  // Th,
  Td,
  // TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import ProductImageSlider from "../components/ProductImageSlider/ProductImageSlider";
import {
  ERROR_URL,
  LOADER_URL,
  PERCENT_SYMBOL,
  RUPEES_SYMBOL,
} from "../constants/constants";
// import CardComponent from "../components/Card-Component/CardComponent";

import "../styles/style.css";

import {
  // ABSOLUTE,
  AUTO,
  BLACK,
  BOLD,
  CENTER,
  COLUMN,
  DEEPPINK,
  FILL_50PARENT,
  FILL_80PARENT,
  // FILL_90PARENT,
  FILL_PARENT,
  GRAY,
  GREEN,
  LARGE,
  LEFT,
  LINE_THROUGH,
  MEDIUM,
  NONE,
  // NORMAL,
  POINTER,
  RED,
  // RELATIVE,
  ROW,
  SB,
  SMALL,
  SOLID,
  START,
  TRANSPARENT,
  WHITE,
  X1LARGE,
  X2LARGE,
  // YELLOW,
} from "../constants/typography";
import { getCategoryData } from "../redux/products/product.actions";

import my_border from "../scripts/my_border";
import "../styles/style.css";
import my_pixel from "../scripts/my_pixel";
import { Gap } from "../components/Gap";
import { BiTrendingDown } from "react-icons/bi";
import { BsCashStack } from "react-icons/bs";
import { RxShare1 } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import discount from "../scripts/discount";
import future_date from "../scripts/future_date";
import { addToCart, getCartProducts } from "../redux/cart/cart.actions";

export default function ViewProductPage() {
  let toast = useToast();
  let nav = useNavigate();
  let dispatch = useDispatch();
  let { loading, error, data } = useSelector((state) => state.productsManager);
  let cart = useSelector((state) => state.cartManager);
  let { token } = useSelector((state) => state.authManager);

  let { _id, category } = useParams();
  let [item, setItem] = useState({});
  let [productData, setProductData] = useState([]);
  let [option, setOption] = useState(0);
  let [exist, setExist] = useState(false);

  // console.log(data,category,item)
  useEffect(() => {
    dispatch(getCategoryData(category));
  }, [category]);
  // console.log(cart);

  useEffect(() => {
    if (token) {
      dispatch(getCartProducts(token));
    }
  }, [token,dispatch]);

  useEffect(() => {
    if (token) {
      cart.products?.forEach((el) => {
        //  console.log(el)
        if (el.productId._id === _id) {
          setExist(true);
        }
      });
    }
  }, [cart.products,exist]);

  useEffect(() => {
    setProductData(data);
  }, [data]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cart.loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productData]);

  useEffect(() => {
    let product = productData?.filter((el) => el._id === _id);
    setItem(product);
  }, [productData]);

  // console.log(item);
  // console.log(exist)

  // console.log("loading",cart.loading)
  if (loading || cart.loading) return <Loader gif={LOADER_URL} />;
  if (error || cart.error) return <Loader gif={ERROR_URL} />;

  return item.length > 0 ? (
    <Box className="container" w={FILL_PARENT} m={AUTO}>
      <Flex
        direction={{ base: COLUMN, sm: COLUMN, lg: ROW }}
        gap={8}
        m={AUTO}
        mt={my_pixel(160)}
        w={FILL_80PARENT}
      >
        <Box w={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_50PARENT }}>
          <ProductImageSlider images={item[0].images} />
        </Box>

        <Box width={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_50PARENT }}>
          <Flex
            direction={COLUMN}
            w={FILL_PARENT}
            justify={START}
            alignItems={START}
          >
            <Flex w={FILL_PARENT} justify={SB}>
              <Text fontSize={MEDIUM} fontWeight={BOLD}>
                {item[0].name}
              </Text>
              <HStack gap={2}>
                <AiOutlineHeart size={my_pixel(30)} />
                <RxShare1 size={my_pixel(30)} />
              </HStack>
            </Flex>
          </Flex>

          <Box textAlign={LEFT}>
            <Text color={GRAY} fontSize={X2LARGE}>
              {item[0].short_desc}
            </Text>
            <Gap gap={16} />
            <Flex alignItems={CENTER} gap={2}>
              <Text fontWeight={BOLD} fontSize={X2LARGE}>
                {RUPEES_SYMBOL + item[0].price}
              </Text>

              <Text
                textDecoration={LINE_THROUGH}
                color={GRAY}
                fontSize={X1LARGE}
              >
                MRP: {RUPEES_SYMBOL + item[0].strike_price}
              </Text>

              <Text fontWeight={BOLD} color={GREEN} fontSize={X1LARGE}>
                {`(${discount(
                  item[0].strike_price,
                  item[0].price
                )}${PERCENT_SYMBOL.toUpperCase()})`}
              </Text>
            </Flex>
            <Text mt={4} color={GRAY} fontSize={SMALL}>
              inclusive of all taxes
            </Text>
            <Button
              _active={{ bg: TRANSPARENT }}
              _hover={{ bg: "pink.50" }}
              mt={4}
              color={GRAY}
              bg={"pink.50"}
              leftIcon={<BiTrendingDown color={DEEPPINK} />}
            >
              Price dropped by &nbsp;
              <span style={{ color: DEEPPINK }}> ₹300 </span> &nbsp; recently
            </Button>
            <Text mt={4} color={RED} fontSize={my_pixel(14)}>
              Free shipping for all orders
            </Text>
            <Flex gap={2} mt={2} alignItems={START}>
              <HStack borderRadius={my_pixel(2)} padding={"0px 6px"} bg={GREEN}>
                <Text color={WHITE}>{item[0].ratings}</Text>
                <AiFillStar color={WHITE} />
              </HStack>
              <Text color={BLACK} fontSize={SMALL}>
                Ratings
              </Text>
            </Flex>

            <Text mt={4} fontWeight={BOLD} fontSize={LARGE}>
              AVAILABLE OFFERS
            </Text>
            <Flex gap={4}>
              <Image
                mt={2}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS928i97c7uYqrtEvKs-Gl3HMY5UAfsYHGAw&usqp=CAU"
                }
                alt="icon"
                w={my_pixel(20)}
                h={my_pixel(20)}
              />
              <Wrap padding={2}>
                Extra 50% off on each discounted product when you buy 2
                discounted products (or in multiples of 2), final discounted
                price will be displayed in the cart. NO COUPON REQUIRED.
              </Wrap>
            </Flex>
            <Gap gap={20} />
            <Box>
              <Text fontWeight={BOLD} fontSize={SMALL}>
                Colour: {item[0].color}
              </Text>
              <Image
                mt={2}
                border={my_border(1, SOLID, BLACK)}
                src={item[0].images[1]}
                w={50}
                borderRadius={4}
              ></Image>
            </Box>

            <Gap gap={20} />
            <Box>
              <Text fontWeight={BOLD} fontSize={SMALL}>
                {item[0].size ? "Select Size" : "Select Variant"}
              </Text>
              <Wrap padding={2}>
                {item[0].sizes.map((el, index) => (
                  <Card
                    key={100000 + Math.floor(Math.random() * 900000)}
                    border={index === option && my_border(1, SOLID, DEEPPINK)}
                    h={AUTO}
                    onClick={() => {
                      setOption(index);
                    }}
                    cursor={POINTER}
                  >
                    <CardBody>
                      <Text fontSize={SMALL}>{el}</Text>
                    </CardBody>
                  </Card>
                ))}
              </Wrap>
            </Box>
            <Gap gap={40} />
            <Box>
              <HStack gap={2}>
                <Button
                  w={200}
                  h={45}
                  display={NONE}
                  borderRadius={50}
                  colorScheme={"pink"}
                  size="md"
                >
                  BUY NOW
                </Button>
                <Button
                  onClick={() => {
                    if (!token) {
                      nav("/login");
                      return;
                    }
                    if (exist) {
                      nav("/cart");
                      return;
                    }

                    // let copyItem = {...item[0]}
                    // copyItem.quantity=1
                    // copyItem.sizes=item[0].sizes[option]

                    // let addItem = {
                    //   cart:[...cart.data,copyItem]
                    // }
                    dispatch(addToCart(item[0]._id, token));
                    if (!loading && !error) {
                      toast({
                        title: "Item added in your cart",
                        description: "Go to Cart to see item",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                      });
                    }
                  }}
                  h={45}
                  w={200}
                  borderRadius={50}
                  variant={"outline"}
                  colorScheme={"pink"}
                  size="md"
                >
                  {exist ? "GO TO CART" : " ADD TO BAG"}
                </Button>
              </HStack>
            </Box>
            <Gap gap={40} />
            <Box>
              <HStack gap={4}>
                <Text fontWeight={BOLD} fontSize={SMALL}>
                  Ship To
                </Text>
                <Input w={200} variant="flushed" placeholder="Enter Pincode" />
                <Text fontWeight={BOLD} color={DEEPPINK} fontSize={SMALL}>
                  Change
                </Text>
              </HStack>
            </Box>
            <Gap gap={30} />
            <Box>
              <HStack gap={8}>
                <TbTruckDelivery size={30} />
                <Text>
                  Delivery by{" "}
                  <span style={{ color: BLACK, fontWeight: BOLD }}>
                    {future_date(item[0].delivery_time)}
                  </span>
                </Text>
                <BsCashStack size={30} />
                <Text>Cash on Delivery Available</Text>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Gap gap={60} />
      <Box bg={"#e2e2e2"} padding={4}>
        <Gap gap={40} />
        <Card w={FILL_80PARENT} m={AUTO}>
          <CardBody>
            <Accordion allowMultiple defaultIndex={[0, 1, 2, 3]}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" fontWeight={BOLD} flex="1" textAlign="left">
                      Product Description
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign={LEFT} pb={4}>
                  {item[0].long_desc}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" fontWeight={BOLD} textAlign="left">
                      Return & Refund
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign={LEFT} pb={4}>
                  <Text fontSize={MEDIUM}>30 Days Easy Return</Text>
                  <ul style={{ marginLeft: my_pixel(16) }}>
                    <li>
                      An order, once placed, can be cancelled until the seller
                      processes it.
                    </li>
                    <li>
                      This product can be returned within 30 day(s) of
                      delivery,subject to the Return Policy.
                    </li>
                    <li>
                      For any other queries, do reach out to CliQ Care at 90291
                      08282.
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" fontWeight={BOLD} textAlign="left">
                      Brand Info
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign={LEFT} pb={4}>
                  {item[0].short_desc}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" fontWeight={BOLD} textAlign="left">
                      Manufacturing, Packaging and Import Info
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign={LEFT} pb={4}>
                  {/* //table */}
                  <TableContainer>
                    <Table variant="simple">
                      <Tbody>
                        <Tr>
                          <Td fontWeight={BOLD}>Generic Name</Td>
                          <Td>{item[0].name}</Td>
                        </Tr>
                        <Tr>
                          <Td fontWeight={BOLD}>Country of Origin</Td>
                          <Td>India</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
        <Gap gap={40} />
      </Box>
    </Box>
  ) : (
    ""
  );
}
