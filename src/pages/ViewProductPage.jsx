import { Box, Flex, Grid, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import ProductImageSlider from "../components/ProductImageSlider/ProductImageSlider";
import { ERROR_URL, LOADER_URL } from "../constants/constants";
import "../styles/style.css"
import {RxShare1} from "react-icons/rx"
import {AiOutlineHeart} from "react-icons/ai"
import {
    ABSOLUTE,
  AUTO,
  BOLD,
  CENTER,
  COLUMN,
  FILL_50PARENT,
  FILL_80PARENT,
  FILL_90PARENT,
  FILL_PARENT,
  GRAY,
  LARGE,
  LEFT,
  MEDIUM,
  NORMAL,
  RED,
  RELATIVE,
  SB,
  SMALL,
  SOLID,
  START,
  X2LARGE,
} from "../constants/typography";
import { getCategoryData } from "../redux/products/product.actions";


import my_border from "../scripts/my_border";
import "../styles/style.css"
import my_pixel from "../scripts/my_pixel";
import { Gap } from "../components/Gap";

export default function ViewProductPage() {
  let dispatch = useDispatch();
  let { loading, error, data } = useSelector((state) => state.productsManager);
  let { id, pid } = useParams();
  let [item, setItem] = useState({});
  let [productData,setProductData] = useState([])

  useEffect(() => {
    dispatch(getCategoryData(id));
  }, []);

  useEffect(()=>{
    setProductData(data)

  },[data])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let product = productData?.filter((el) => el.id == pid);
    setItem(product);
  }, [productData]);

  if(loading) return <Loader gif={LOADER_URL}/>
  if(error) return <Loader gif={ERROR_URL}/>

 return item.length>0?<Box  className="container" w={FILL_80PARENT} m={AUTO}>
      <Flex mt={120} gap={8} w={FILL_PARENT}>
        <Box w={FILL_50PARENT}>
        <ProductImageSlider images={item[0].images} />
        </Box>

        <Box border={my_border(1,SOLID,RED)} width={FILL_50PARENT}>
          <Flex direction={COLUMN} w={FILL_PARENT} justify={START} alignItems={START}>
          <Flex w={FILL_PARENT} justify={SB}>
            <Text fontSize={MEDIUM} fontWeight={BOLD} >{item[0].name}</Text>
          <HStack gap={2}>
            <AiOutlineHeart size={my_pixel(30)} />
            <RxShare1 size={my_pixel(30)}/>
          </HStack>
          </Flex>
          </Flex>

          <Box textAlign={LEFT}>
          <Text fontWeight={NORMAL} color={GRAY} fontSize={X2LARGE}>{item[0].short_desc}</Text>


          </Box>

        </Box>
      </Flex>
    </Box>:""
}
