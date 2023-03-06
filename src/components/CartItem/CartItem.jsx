import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/layout";
import {
  AUTO,
  // BLACK,
  BOLD,
  CENTER,
  COLUMN,
  FILL_15PARENT,
  FILL_50PARENT,
  FILL_85PARENT,
  FILL_PARENT,
  GRAY,
  GREEN,
  LINE_THROUGH,
  NONE,
  ROW,
  SB,
  TRANSPARENT,
} from "../../constants/typography";
import my_pixel from "../../scripts/my_pixel";
import { TbTruckDelivery } from "react-icons/tb";
import {  AiOutlineHeart } from "react-icons/ai";

import { Gap } from "../Gap";
import { Button } from "@chakra-ui/button";
import future_date from "../../scripts/future_date";
import { RUPEES_SYMBOL } from "../../constants/constants";
// import { color } from "@chakra-ui/styled-system";

export default function CartItem({
  images,
  _id,
  name,
  long_desc,
  color,
  short_desc,
  price,
  strike_price,
  size,
  sizes,
  quantity,
  delivery_time,
  update,
  remove,
  qty,
  id,
}) {
  // console.log(qty, id, _id);
  return (
    <Card w={FILL_PARENT}>
      <CardBody>
        <Flex gap={4} direction={{ base: COLUMN, sm: COLUMN, lg: ROW }}>
          <Image
            borderRadius={my_pixel(4)}
            src={images[0]}
            m={AUTO}
            w={{ base: FILL_PARENT, sm: FILL_50PARENT, lg: FILL_15PARENT }}
          ></Image>

          <Box w={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_85PARENT }}>
            <Flex
              justify={SB}
              direction={{ base: COLUMN, sm: COLUMN, lg: ROW }}
              gap={4}
            >
              <Text maxW={"50%"} isTruncated={true} color={GRAY}>
                {short_desc}
              </Text>
              <HStack>
                <TbTruckDelivery color={GRAY} size={24} />
                <Text color={GRAY}>
                  Delivery by{" "}
                  <span style={{ color: GRAY }}>
                    {`${future_date(delivery_time)} | `}
                  </span>
                </Text>
                <Text color={GREEN}>FREE</Text>
              </HStack>
            </Flex>

            <HStack>
              <Text fontWeight={BOLD} color={"gray.600"}>
                {RUPEES_SYMBOL + price}
              </Text>
              <Text color={GRAY} textDecoration={LINE_THROUGH}>
                {RUPEES_SYMBOL + strike_price}
              </Text>
            </HStack>

            <Text color={GRAY}>
              Color: {color} &nbsp; &nbsp; &nbsp; {size ? "Size" : "Variant"}:{" "}
              {sizes}
            </Text>
            <Gap gap={40} />
            <Divider color={GRAY} />
            <Flex
              justify={SB}
              direction={{ base: COLUMN, sm: COLUMN, lg: ROW }}
              alignItems={CENTER}
            >
              <select
                value={quantity}
                onChange={(e) => {
                  update(id, e.target.value);
                }}
                border={0}
                style={{
                  color: GRAY,
                  outline: NONE,
                  backgroundColor: TRANSPARENT,
                }}
              >
                <option value={0}>Quantity:&nbsp; Select</option>
                <option value={1}>Quantity:&nbsp; 1</option>
                <option value={2}>Quantity:&nbsp; 2</option>
                <option value={3}>Quantity:&nbsp; 3</option>
                <option value={4}>Quantity:&nbsp; 4</option>
                <option value={5}>Quantity:&nbsp; 5</option>
              </select>
              <Text
                border={0}
                style={{
                  color: GRAY,
                  outline: NONE,
                  backgroundColor: TRANSPARENT,
                }}
              >
                Current Quantity:-{qty}
              </Text>

              <HStack direction={{ base: COLUMN, sm: COLUMN, lg: ROW }}>
                <Button
                  bg={TRANSPARENT}
                  color={GRAY}
                  leftIcon={
                    <AiOutlineHeart size={24} color={GRAY} onClick={() => {}} />
                  }
                >
                  Save to wishlist
                </Button>
                <Button
                  bg={TRANSPARENT}
                  color={GRAY}
                  onClick={() => {
                    remove(id);
                  }}
                >
                  Remove
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}
