import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import ProductImageSlider from "../components/ProductImageSlider/ProductImageSlider";
import { ERROR_URL, LOADER_URL } from "../constants/constants";
import {
    ABSOLUTE,
  AUTO,
  FILL_50PARENT,
  FILL_80PARENT,
  FILL_90PARENT,
  FILL_PARENT,
  RELATIVE,
} from "../constants/typography";
import { getCategoryData } from "../redux/products/product.actions";

import "../styles/style.css";

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
    let product = productData?.filter((el) => el.id == pid);
    setItem(product);
  }, [productData]);

  if(loading) return <Loader gif={LOADER_URL}/>
  if(error) return <Loader gif={ERROR_URL}/>

 return item.length>0?<Box w={FILL_80PARENT} m={AUTO} className="container">
      <Flex w={FILL_PARENT}>
        <Box w={FILL_50PARENT}>
        <ProductImageSlider images={item[0].images} />
        </Box>

        <Box width={FILL_50PARENT}></Box>
      </Flex>
    </Box>:""
}
