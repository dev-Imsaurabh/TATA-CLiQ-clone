import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { Gap } from "../components/Gap";
import { Loader } from "../components/Loader";
import { ProductCard } from "../components/ProductCard";
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
  CENTER,
  FILL_25PARENT,
  FILL_75PARENT,
  FILL_80PARENT,
  FILL_PARENT,
  GRAY,
  NONE,
  R1,
  R2,
  R3,
  R4,
  SB,
  SOLID,
} from "../constants/typography";
import { getCategoryData } from "../redux/products/product.actions";
import my_border from "../scripts/my_border";
import my_pixel from "../scripts/my_pixel";
import "../styles/style.css";
import { BsFilter } from "react-icons/bs";
import discount from "../scripts/discount";

export default function ProductsPage() {
  const [searchParams,setSearchParams]=useSearchParams()
  let { loading, error, data } = useSelector((state) => state.productsManager);
  const [productData , setProductData] = useState()
  let value = searchParams.get("sort")
  let dispatch = useDispatch();
//   console.log(error);

  let { id } = useParams();

  useEffect(() => {
    dispatch(getCategoryData(id));
  }, [searchParams]);

  useEffect(()=>{

    if(value==undefined){
        setSearchParams(`?sort=${POPULARITY}`)
    }
    
    if(value==POPULARITY){
        setProductData(data)
    }else if(value==LTH){
        let lthData =data?.sort((a,b)=>a.price-b.price)
        setProductData(lthData)
    }else if(value==HTL){
        let htlData= data?.sort((a,b)=>b.price-a.price)
        setProductData(htlData)
    }else if(value==DISCOUNT){
        let discountData= data?.sort((a,b)=>discount(b.strike_price,b.price)-discount(a.strike_price,a.price))
        setProductData(discountData)

    }else{
       setProductData(data)
    }

  },[data])


  if (loading) return <Loader gif={LOADER_URL} />;
  if (error) return <Loader gif={ERROR_URL} />;
  return (
    <Box className="container">
      <Heading textAlign={CENTER}>{id.toUpperCase()}</Heading>
      <Text fontSize={my_pixel(16)} color={GRAY}>
        {productData&&productData.length} Products
      </Text>
      <Gap gap={70} />

      <Flex m={AUTO} w={FILL_80PARENT}>
        <HStack flex={2.5}></HStack>

        <Flex borderRadius={4} gap={8} alignItems={CENTER} padding={2} border={my_border(1, SOLID, GRAY)}>
          <HStack  flex={1}>
            <Text color={GRAY}>Sort:</Text>
            <select
            value={value}
            onChange={(e)=>setSearchParams(`?sort=${e.target.value}`)}
              border={0}
              style={{ WebkitAppearance: NONE, outline: NONE }}
            >
              <option value={POPULARITY}>Popularity</option>
              <option value={LTH}>Price Low to High</option>
              <option value={HTL}>Price High to Low</option>
              <option value={DISCOUNT}>Discount</option>

            </select>
          </HStack>
          <BsFilter color={GRAY} />
        </Flex>
      </Flex>

      <Gap gap={70} />

      <Flex gap={4} w={FILL_80PARENT} m={AUTO}>
        <Box w={FILL_25PARENT}>
          <Card w={FILL_PARENT}>
            <CardBody width={FILL_PARENT}></CardBody>
          </Card>
        </Box>

        <Grid
          gap={4}
          w={FILL_75PARENT}
          gridTemplateColumns={{ base: R1, sm: R3, lg: R4 }}
        >
          {productData?.map((el) => (
            <ProductCard {...el} />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
