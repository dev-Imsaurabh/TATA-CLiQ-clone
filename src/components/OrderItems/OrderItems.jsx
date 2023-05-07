import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/layout";
import { BOLD, COLUMN, FILL_15PARENT, FILL_50PARENT, FILL_85PARENT, FILL_PARENT, GRAY, GREEN, LINE_THROUGH, ROW, SB } from "../../constants/typography";
import my_pixel from "../../scripts/my_pixel";
import { TbTruckDelivery } from "react-icons/tb";
// import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

import { Gap } from "../Gap";
// import { Button } from "@chakra-ui/button";
import future_date from "../../scripts/future_date";
import { RUPEES_SYMBOL } from "../../constants/constants";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { color } from "@chakra-ui/styled-system";

export default function OrderItems({productId,qty}) {

  const [products,setProducts]=useState({});
  let dispatch = useDispatch();

  const getProducts=async(productId)=>{
    let res=await fetch(`https://calm-blue-ray-yoke.cyclic.app/products/product/${productId}`);
    res=await res.json();
    console.log(res);
  }


  useEffect(()=>{
    dispatch(getProducts(productId))
  },[])

  const {images,_id,name,long_desc,color,short_desc,price,strike_price,size,sizes,quantity,delivery_time,update,remove}=products;
  return (
    <Card>
      <CardBody>
        <Flex gap={4} direction={{base:COLUMN,sm:COLUMN,lg:ROW}} >
          <Image
            borderRadius={my_pixel(4)}
            src={images[0]}
            w={{base:FILL_PARENT,sm:FILL_50PARENT,lg:FILL_15PARENT}}
          ></Image>

          <Box             w={{base:FILL_PARENT,sm:FILL_50PARENT,lg:FILL_85PARENT}}
>
            <Flex direction={{base:COLUMN,sm:COLUMN,lg:ROW}} justify={SB} gap={4}>
              <Text maxW={"50%"} isTruncated={true} color={GRAY}>
                {short_desc}
              </Text>
              <HStack >
                <TbTruckDelivery color={GRAY} size={24} />
                <Text color={GRAY}>
                  Delivery by <span style={{ color: GRAY}}>
                    {`${future_date(delivery_time)} | `}
                  </span>
                </Text>
                <Text color={GREEN}>FREE</Text>

              </HStack>
            </Flex>

            <HStack>
                <Text fontWeight={BOLD} color={"gray.600"} >{RUPEES_SYMBOL+price}</Text>
                <Text color={GRAY} textDecoration={LINE_THROUGH}>{RUPEES_SYMBOL+strike_price}</Text>
            </HStack>
            
            <Text color={GRAY}>Color: {color} &nbsp; &nbsp; &nbsp; {size?"Size":"Variant"}: {sizes}</Text>
            <Gap gap={40} />
            <Divider color={GRAY} />
           

          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}
