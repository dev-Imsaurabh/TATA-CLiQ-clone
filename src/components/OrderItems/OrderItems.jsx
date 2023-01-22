import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/layout";
import { AUTO, BLACK, BOLD, CENTER, FILL_80PARENT, FILL_PARENT, GRAY, GREEN, LINE_THROUGH, NONE, SB, TRANSPARENT } from "../../constants/typography";
import my_pixel from "../../scripts/my_pixel";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

import { Gap } from "../Gap";
import { Button } from "@chakra-ui/button";
import future_date from "../../scripts/future_date";
import { RUPEES_SYMBOL } from "../../constants/constants";
import { color } from "@chakra-ui/styled-system";

export default function OrderItems({images,id,name,long_desc,color,short_desc,price,strike_price,size,sizes,quantity,delivery_time,update,remove}) {
  return (
    <Card>
      <CardBody>
        <Flex gap={4} >
          <Image
            borderRadius={my_pixel(4)}
            src={images[0]}
            w={"15%"}
          ></Image>

          <Box w={"85%"}>
            <Flex justify={SB} gap={4}>
              <Text maxW={"50%"} isTruncated={true} color={GRAY}>
                {short_desc}
              </Text>
              <HStack>
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
