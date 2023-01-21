import { Card, CardBody } from "@chakra-ui/card";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  AUTO,
  BOLD,
  CENTER,
  DEEPPINK,
  FILL_80PARENT,
  FILL_PARENT,
  GRAY,
  GREEN,
  LARGE,
  LEFT,
  MEDIUM,
  SB,
  SE,
  STICKY,
  X2LARGE,
} from "../constants/typography";
import { CiDiscount1 } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";

import "../styles/style.css";
import { Gap } from "../components/Gap";
import my_pixel from "../scripts/my_pixel";
import { Button } from "@chakra-ui/button";
import { CartItem } from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetCart } from "../redux/cart/cart.actions";

export default function CartPage() {

    const {userId} = useSelector(
        (state) => state.authManager
      );
    const {data,loading,error}  = useSelector((state)=>state.cartManager)

    let dispatch = useDispatch()

    useEffect(()=>{

        dispatch(GetCart(userId.id))

    },[])


    console.log(data)







  return (
    <Box className="container">
      <Flex w={FILL_PARENT} justify={SE} alignItems={CENTER}>
        <Heading size={LARGE}>My Bag</Heading>
        <Box w={"50%"}></Box>
        <HStack>
          <Text>Delhi,&nbsp;110001</Text>
          <Input variant={"flushed"} placeholder="Change PIN code"></Input>
        </HStack>
      </Flex>
      <Gap gap={30} />
      <Box padding={8} bg={"#e2e2e2"} w={FILL_PARENT}>
        <Flex gap={4}  w={FILL_80PARENT} margin={AUTO}>
          <Box textAlign={LEFT} w={"70%"}>
            <Text>
              Apply a relevant coupon code here to avail any additional
              discount. Applicable cashback if any will be credited to your
              account as per T&C.
            </Text>
            <Gap gap={30} />


            <Box w={FILL_PARENT}>

                {/* //inflate all cart items here */}
                <CartItem />

            </Box>

            <Gap gap={30} />
            <Center>
              {" "}
              <Button
                w={200}
                borderRadius={my_pixel(50)}
                variant={"outline"}
                colorScheme="brown"
              >
                Continue Shopping
              </Button>
            </Center>
          </Box>

          {/* //panel */}

          <Box  w={"30%"}>
            <VStack textAlign={LEFT} gap={2}>
              <Card  w={FILL_PARENT}>
                <CardBody>
                  <Flex justify={SB} alignItems={CENTER}>
                    <HStack>
                      <CiDiscount1 size={30} />{" "}
                      <Text fontWeight={BOLD}>Check for Coupons</Text>
                    </HStack>
                    <MdArrowForwardIos />
                  </Flex>
                </CardBody>
              </Card>

              <Card w={FILL_PARENT}>
                <CardBody w={FILL_PARENT}>
                  {/* // */}

                  <VStack>
                    <Flex w={FILL_PARENT} justify={SB}>
                      <Text color={GRAY} fontWeight={BOLD}>
                        Bag Total
                      </Text>

                      <Text>{"sFlexike_price"}</Text>
                    </Flex>
                    <Flex w={FILL_PARENT} justify={SB}>
                      <Text color={GRAY} fontWeight={BOLD}>
                        Shipping Charges
                      </Text>
                      <Text color={GREEN}>FREE</Text>
                    </Flex>
                    <Flex w={FILL_PARENT} justify={SB}>
                      <Text color={GRAY} fontWeight={BOLD}>
                        Bag Subtotal
                      </Text>
                      <Text>{"sFlexike_price"}</Text>
                    </Flex>
                    <Flex w={FILL_PARENT} justify={SB}>
                      <Text color={GRAY} fontWeight={BOLD}>
                        Product Discount(s)
                      </Text>
                      <Text>{"-sFlexike_price-price"}</Text>
                    </Flex>
                    <Box textAlign={LEFT}>
                      <Text color={GRAY} fontSize={my_pixel(12)}>
                        You will save Flexike_price-price on this order
                      </Text>
                    </Box>

                    <Gap gap={20} />

                    <Flex w={FILL_PARENT} justify={SB}>
                      <VStack>
                        <Text color={GRAY} fontSize={MEDIUM} fontWeight={BOLD}>
                          Total
                        </Text>
                        <Text color={GRAY} fontWeight={MEDIUM}></Text>
                      </VStack>

                      <Button colorScheme={"pink"} borderRadius={my_pixel(50)}>
                        Checkout
                      </Button>
                    </Flex>
                  </VStack>
                </CardBody>
              </Card>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
