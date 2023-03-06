import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { Gap } from "../components/Gap";
import { Loader } from "../components/Loader";
import { ProductCard } from "../components/ProductCard";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {
  DISCOUNT,
  ERROR_URL,
  HTL,
  LOADER_URL,
  LTH,
  POPULARITY,
} from "../constants/constants";
import {
  AUTO,
  BACKGROUND,
  BOLD,
  CENTER,
  DEEPPINK,
  FILL_25PARENT,
  FILL_75PARENT,
  FILL_80PARENT,
  FILL_PARENT,
  GRAY,
  NONE,
  POINTER,
  R1,
  R3,
  R4,
  SB,
  SOLID,
  STICKY,
  TRANSPARENT,
} from "../constants/typography";
import { getCategoryData } from "../redux/products/product.actions";
import my_border from "../scripts/my_border";
import my_pixel from "../scripts/my_pixel";
import "../styles/style.css";
import { BsFilter } from "react-icons/bs";
import discount from "../scripts/discount";
import { Filter } from "../components/Filter";
import { FilterData } from "../constants/staticData";
import {AiFillFilter} from "react-icons/ai"
import { useRef } from "react";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  let { loading, error, data } = useSelector((state) => state.productsManager);
  const [productData, setProductData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const [clear,setClear] =useState(false)
  let value = searchParams.get("sort") || "";
  let filterValues = searchParams.get("filter")?.toString().split("+") || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);


  let dispatch = useDispatch();
  //   console.log(error);

  let { id } = useParams();
  const [filter, setFilters] = useState([]);
  

  useEffect(() => {
    dispatch(getCategoryData(id));
  }, [clear]);

  useEffect(() => {
    // if(value==undefined){
    //     setSearchParams(`?sort=${POPULARITY}`)
    // }

    if (value === POPULARITY) {
      setProductData([...data]);
    } else if (value === LTH) {
      let lthData = data?.sort((a, b) => a.price - b.price);
      setProductData([...lthData]);
    } else if (value === HTL) {
      let htlData = data?.sort((a, b) => b.price - a.price);
      setProductData([...htlData]);
    } else if (value === DISCOUNT.toLowerCase()) {
      let discountData = data?.sort(
        (a, b) =>
          discount(b.strike_price, b.price) - discount(a.strike_price, a.price)
      );
      setProductData([...discountData]);
    } else {
      setProductData([...data]);
    }
  }, [data, searchParams, filter]);

  useEffect(() => {
    setSearchParams({
      sort: value || [],
      filter: filter.length > 0 ? filter.join("+") : [],
    });
  }, [filter]);

  useEffect(() => {


    let filteredData = [];
    filterValues?.forEach((el) => {
      // console.log(el)
      productData?.forEach((option) => {
        if (
          option.color === el ||
          Math.floor(option.ratings) === el ||
          option.sizes.includes(el)
        ) {
          // console.log(option);
          if(filteredData.length>0){
            filteredData.forEach((el)=>{
              if(JSON.stringify(el)!==JSON.stringify(option)){
                filteredData = [...filteredData, option];
              }
            })

          }else{
            filteredData = [...filteredData, option];

          }
        
       
        }
      });
    });

    if (filteredData.length > 0) {
      let unique = filteredData.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)

      setProductData([...unique]);
    }
  }, [searchParams]);

  // console.log(filter)

  if (loading) return <Loader gif={LOADER_URL} />;
  if (error) return <Loader gif={ERROR_URL} />;
  return (
    <Box bg={BACKGROUND} className="container">
      <Heading textAlign={CENTER}>{id.toUpperCase()}</Heading>
      <Text fontSize={my_pixel(16)} color={GRAY}>
        {productData && productData.length} Products
      </Text>
      <Gap gap={70} />

      <Flex m={AUTO} w={FILL_80PARENT}>
        <HStack flex={2.5}>

        <>
        <Wrap display={{base:"block",sm:"none",lg:"none"}} ref={btnRef} onClick={onOpen}><AiFillFilter /></Wrap>
      
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>

          <Flex gap={4} w={FILL_80PARENT} m={AUTO}>
        <Box w={FILL_PARENT} >
          <Card borderRadius={10} position={STICKY} top={5} w={FILL_PARENT}>
            <Flex padding={4} bg={"gray.100"} justify={SB} alignItems={CENTER}>
              <Text fontWeight={BOLD}>Filters</Text>
              <Text cursor={POINTER} onClick={()=>{
                setClear((prev)=>!prev)
              }} color={DEEPPINK} fontWeight={BOLD}>
                Clear All
              </Text>
            </Flex>
            <CardBody width={FILL_PARENT}>
              <Filter setFilters={setFilters} data={FilterData} />
            </CardBody>
          </Card>
        </Box>

       
      </Flex>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>

        </HStack>

        <Flex
          borderRadius={4}
          gap={8}
          alignItems={CENTER}
          padding={2}
          border={my_border(1, SOLID, GRAY)}
        >
          <HStack flex={1}>
            <Text color={GRAY}>Sort:</Text>
            <select
              value={value||""}
              onChange={(e) => {
                setSearchParams({
                  sort: e.target.value,
                  filter: filter.length > 0 ? filter.join("+") : [],
                });
              }}
              border={0}
              style={{
                WebkitAppearance: NONE,
                outline: NONE,
                backgroundColor: TRANSPARENT,
              }}
            >
              <option value={POPULARITY}>Popularity</option>
              <option value={LTH}>Price Low to High</option>
              <option value={HTL}>Price High to Low</option>
              <option value={DISCOUNT.toLowerCase()}>Discount</option>
            </select>
          </HStack>
          <BsFilter color={GRAY} />
        </Flex>
      </Flex>

      <Gap gap={70} />

      <Flex gap={4} w={FILL_80PARENT} m={AUTO}>
        <Box w={FILL_25PARENT} display={{base:NONE,sm:"block",lg:"block"}}>
          <Card borderRadius={10} position={STICKY} top={5} w={FILL_PARENT}>
            <Flex padding={4} bg={"gray.100"} justify={SB} alignItems={CENTER}>
              <Text fontWeight={BOLD}>Filters</Text>
              <Text cursor={POINTER} onClick={()=>{
                setClear((prev)=>!prev)
              }} color={DEEPPINK} fontWeight={BOLD}>
                Clear All
              </Text>
            </Flex>
            <CardBody width={FILL_PARENT}>
              <Filter setFilters={setFilters} data={FilterData} />
            </CardBody>
          </Card>
        </Box>

        <Grid
          gap={4}
          w={{base:FILL_PARENT,sm:FILL_75PARENT,lg:FILL_75PARENT}}
          gridTemplateColumns={{ base: R1, sm: R3, lg: R4 }}
        >
          {productData?.map((el) => (
            <ProductCard key={el._id} {...el} />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
