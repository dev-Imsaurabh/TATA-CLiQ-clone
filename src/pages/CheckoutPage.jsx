import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  Input,
  Stack,
  Radio,
  Divider,
  Button,
  Textarea,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { COLUMN, ROW, SB } from "../constants/typography";

const CheckoutPage = () => {
  return (
    <Box margin={"auto 40px"}>
      <Heading textAlign={"left"}>Checkout</Heading>
      <Flex
        gap={"30px"}
        m={"30px auto"}
        direction={{ base: COLUMN, sm: COLUMN, md: COLUMN, lg: ROW }}
      >
        <Box
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          width={{ base: "90%", sm: "90%", md: "90%", lg: "60%" }}
          borderRadius={"10px"}
        >
          <Flex p={"30px"} justifyContent={SB}>
            <Box display={"inline-flex"}>
              <Heading
                as={"h6"}
                size="sm"
                border={"1px solid black "}
                borderRadius={"50%"}
                w={"6%"}
                h={"25px"}
                marginRight={"5px"}
              >
                1
              </Heading>
              <Heading as={"h6"} size="sm">
                Add Shipping Address
              </Heading>
            </Box>
            <Box>
              <Text
                as="u"
                _hover={{
                  background: "white",
                  color: "teal.500",
                  cursor: "pointer",
                }}
              >
                Clear all
              </Text>
            </Box>
          </Flex>
          <Box>
            <Flex
              padding={"15px"}
              direction={{ base: COLUMN, sm: COLUMN, md: COLUMN, lg: ROW }}
            >
              <Box>
                <FormControl>
                  <Stack spacing={3}>
                    <Box>
                      <Input
                        placeholder="First Name"
                        required
                        width={{
                          base: "100%",
                          sm: "100%",
                          md: "100%",
                          lg: "48%",
                        }}
                        mr={"12px"}
                        mb={"10px"}
                      />
                      <Input
                        placeholder="Last Name"
                        required
                        width={{
                          base: "100%",
                          sm: "100%",
                          md: "100%",
                          lg: "48%",
                        }}
                      />
                    </Box>
                    <Input placeholder="City" required />
                    <Input placeholder="State" required />
                    <Input placeholder="Landmark" required />
                  </Stack>
                </FormControl>
              </Box>
              <Box
                ml={{ base: "0%", sm: "0%", md: "0%", lg: "2%" }}
                width={{ base: "100%", sm: "100%", md: "100%", lg: "48%" }}
                direction={{ base: COLUMN, sm: COLUMN, md: COLUMN, lg: ROW }}
              >
                <FormControl>
                  <Stack spacing={3}>
                    <Input
                      mt={{ base: "10px", sm: "10px", md: "10px", lg: "0px" }}
                      placeholder="Enter your Pin Code"
                    />
                    <Textarea height={"102px"} placeholder="Address" />
                    <Input placeholder="Enter your Mobile Number" />
                  </Stack>
                </FormControl>
              </Box>
            </Flex>
          </Box>
          <Box textAlign={"left"} padding={"30px 30px"}>
            <RadioGroup>
              <Radio mr={"20%"}>Home</Radio>
              <Radio>Office</Radio>
            </RadioGroup>
          </Box>

          <Divider m={"-15px auto 40px auto"} />
          <Box
            textAlign={"right"}
            m={"0px 20px 30px 0px"}
            borderRadius={"20px"}
          >
            <Button mr={"20px"}>Cancel</Button>
            <Button
              colorScheme="red"
              _hover={{
                background: "darkgreen",
                color: "black",
              }}
            >
              Save & Continue
            </Button>
          </Box>
        </Box>

        <Flex
          p={"20px"}
          width={{ base: "90%", sm: "90%", md: "90%", lg: "40%" }}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          borderRadius={"10px"}
          direction={"column"}
          height="300px"
          gap={"10px"}
        >
          <Flex justifyContent={SB}>
            <Text>Bag Total</Text>
            <Text>Bag Total</Text>
          </Flex>
          <Flex justifyContent={SB}>
            <Text>Shipping Charge</Text>
            <Text color={"darkgreen"} fontWeight={"bold"}>
              FREE
            </Text>
          </Flex>
          <Flex justifyContent={SB}>
            <Text>Bag Subtotal</Text>
            <Text>Bag Subtotal</Text>
          </Flex>
          <Flex justifyContent={SB}>
            <Text>Product Discount(s)</Text>
            <Text>Bag Total</Text>
          </Flex>

          <Text textAlign={"left"} color={"darkgreen"} fontWeight={"bold"}>
            You will save {} on this order.
          </Text>

          <Divider />
          <Flex justifyContent={SB}>
            <Heading size="sm">Total Payable</Heading>
            <Heading size="sm">Bag Total</Heading>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CheckoutPage;
