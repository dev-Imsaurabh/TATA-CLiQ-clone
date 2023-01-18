import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { PERCENT_SYMBOL, RUPEES_SYMBOL } from "../../constants/constants";
import { HORIZONTAL_BOOKMARK } from "../../constants/styles";
import {
  ABSOLUTE,
  AUTO,
  BOLD,
  CENTER,
  COLUMN,
  DEEPPINK,
  FILL_10PARENT,
  FILL_PARENT,
  GRAY,
  GREEN,
  LEFT,
  LINE_THROUGH,
  MEDIUM,
  PINK,
  RED,
  RELATIVE,
  SB,
  START,
  TRANSPARENT,
  WHITE,
} from "../../constants/typography";
import my_pixel from "../../scripts/my_pixel";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import discount from "../../scripts/discount";

export default function ProductCard({
  id,
  images,
  name,
  short_desc,
  long_desc,
  category,
  price,
  strike_price,
  ratings,
  color,
  delivery_time,
  size,
}) {
  return (
    <Card w={AUTO}>
      <CardBody padding={0} margin={0}>
        <Box position={RELATIVE}>
          <Flex
            color={WHITE}
            w={my_pixel(60)}
            bg={DEEPPINK}
            h={my_pixel(20)}
            position={ABSOLUTE}
            justify={CENTER}
            alignItems={CENTER}
            fontSize={my_pixel(12)}
            top={5}
            left={0}
            clipPath={HORIZONTAL_BOOKMARK}
          >
            {discount(strike_price, price) + PERCENT_SYMBOL}
          </Flex>
          <Image src={images[0]} w={FILL_PARENT}></Image>
        </Box>

        <Box>
          <Flex justify={SB} padding={2}>
            <Text fontWeight={BOLD} fontSize={MEDIUM}>
              {name}
            </Text>
            <Button
              bg={TRANSPARENT}
              _hover={{ bg: TRANSPARENT }}
              _active={{ bg: TRANSPARENT }}
              leftIcon={<AiOutlineHeart />}
            ></Button>
          </Flex>
          <Flex direction={COLUMN} padding={2} alignItems={START}>
            <Text textAlign={LEFT} fontSize={MEDIUM}>
              {short_desc}
            </Text>
            <HStack>
              <Text fontWeight={BOLD} fontSize={MEDIUM}>
                {RUPEES_SYMBOL + price}
              </Text>
              <Text
                color={GRAY}
                textDecoration={LINE_THROUGH}
                fontSize={MEDIUM}
              >
                {strike_price}
              </Text>
            </HStack>
            <HStack>
              <Text>{ratings}</Text>
              <AiFillStar color={GREEN} />
            </HStack>
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
}
