import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Stack,
  Radio,
  Divider,
  Button,
  Textarea,
  RadioGroup,
  FormControl,
  HStack,
  Wrap,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useId, useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { OtpModal } from "../components/OtpModal";
import { BASE_URL, LOADER_URL, RUPEES_SYMBOL } from "../constants/constants";
import {
  AUTO,
  CENTER,
  COLUMN,
  FILL_60PARENT,
  FILL_80PARENT,
  FILL_PARENT,
  NONE,
  ROW,
  SB,
} from "../constants/typography";
import { AddressContext } from "../contexts/AddressContextProvider";
import { getCartProducts } from "../redux/cart/cart.actions";
import "../styles/style.css";

const CheckoutPage = () => {
  const {
    firstName,
    lastName,
    city,
    state,
    pinCode,
    address,
    landMark,
    mobile,
    selectedValue,
    setSelectedValue,
    setFirstName,
    setAddress,
    setCity,
    setLandMark,
    setMobile,
    setPinCode,
    setLastName,
    setState,
    clearAll,
  } = useContext(AddressContext);
  let toast = useToast();

  const { token } = useSelector((state) => state.authManager);

  const { products, loading } = useSelector((state) => state.cartManager);
  const [bagTotal, setBagTotal] = useState(0);
  const [bagSubTotal, setBagSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  // const [cartData, setCartData] = useState([]);
  let nav = useNavigate();
  let full_address = useRef();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts(token));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let bag_total = 0;
    let checkout_total = 0;
    let final_discount = 0;

    products.forEach(({ productId, qty }) => {
      // console.log(strike_price);
      checkout_total += productId.price * qty;
      bag_total += productId.strike_price * qty;
    });

    final_discount = bag_total - checkout_total;
    setTotal(checkout_total);
    setDiscount(final_discount);
    setBagTotal(bag_total);
    setBagSubTotal(bag_total);
    // console.log(checkout_total,bag_total,final_discount)
  }, [products]);

  useEffect(() => {
    if (products.length === 0) {
      nav("/cart");
    }
  }, [products]);

  useEffect(() => {
    dispatch(getCartProducts(token));
  }, []);

  // console.log(products);
  const makeOrder = async (onClose) => {
    
    let orders = [...products];
    // console.log(orders)
    let newdata = orders.map((el) => {
      el.address = full_address.current.textContent;
      return el;
    });
    let obj = {
      order: newdata,
    };

    // console.log(obj,newdata)
    await fetch(BASE_URL + "/order/add", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!loading) {
      toast({
        title: "Order Placed,Thank you for Shopping with us",
        description: "Redirecting you to Home",
        position: "top",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
      nav("/");
    }
  };

  if (loading) return <Loader gif={LOADER_URL} />;

  return (
    <Box margin={AUTO} mt={170} m={AUTO} w={FILL_80PARENT}>
      <Heading textAlign={"left"}>Checkout</Heading>
      <Flex
        gap={"30px"}
        m={"30px auto"}
        direction={{ base: "column-reverse", sm: "column-reverse", lg: ROW }}
      >
        <Box
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          width={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_60PARENT }}
          borderRadius={"10px"}
          padding={4}
        >
          <Flex p={"30px"} justifyContent={SB}>
            <Box display={"inline-flex"}>
              <Flex
                as={"h6"}
                size="sm"
                padding={2}
                border={"1px solid black "}
                borderRadius={"50%"}
                h={"25px"}
                justify={CENTER}
                alignItems={CENTER}
                marginRight={"5px"}
              >
                1
              </Flex>
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
                onClick={() => clearAll()}
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
                <FormControl isRequired={true}>
                  <Stack spacing={2}>
                    <Box
                      w={{
                        base: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "90%",
                      }}
                    >
                      <Input
                        placeholder="First Name"
                        mr={"12px"}
                        mb={"10px"}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <Input
                        placeholder="Last Name"
                        mb={"10px"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <Input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        mb={"10px"}
                      />
                      <Input
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="State"
                        mb={"10px"}
                      />
                      <Input
                        value={landMark}
                        onChange={(e) => setLandMark(e.target.value)}
                        placeholder="Landmark"
                      />
                    </Box>
                  </Stack>
                </FormControl>
              </Box>
              <Box
                w={{ base: "100%", sm: "100%", md: "100%", lg: "200%" }}
                direction={{ base: COLUMN, sm: COLUMN, md: COLUMN, lg: ROW }}
              >
                <Stack spacing={3}>
                  <Input
                    mt={{ base: "10px", sm: "10px", md: "10px", lg: "0px" }}
                    placeholder="Enter your Pin Code"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                  <Textarea
                    height={"102px"}
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Input
                    placeholder="Enter your Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </Stack>
              </Box>
            </Flex>
          </Box>
          <Box textAlign={"left"} padding={"30px 30px"}>
            <RadioGroup value={selectedValue} onChange={setSelectedValue}>
              <Radio value="Home" mr={"20%"}>
                Home
              </Radio>
              <Radio value="Office">Office</Radio>
            </RadioGroup>
          </Box>
          <Flex display={"flex"} alignItems={CENTER} justify={"end"}>
            <Button display={NONE} mr={"20px"}>
              Cancel
            </Button>
            <OtpModal
              total={total}
              callback={makeOrder}
              address={
                firstName +
                " " +
                lastName +
                " " +
                address +
                " " +
                landMark +
                " " +
                mobile +
                " " +
                city +
                " " +
                state +
                " " +
                pinCode
              }
            />
          </Flex>
        </Box>

        <Flex
          p={"20px"}
          width={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_60PARENT }}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          borderRadius={"10px"}
          direction={"column"}
          height="380px"
          gap={"10px"}
        >
          <Flex justifyContent={SB}>
            <Text>Bag Total</Text>
            <Text>{RUPEES_SYMBOL + bagTotal.toFixed(2)}</Text>
          </Flex>
          <Flex justifyContent={SB}>
            <Text>Shipping Charge</Text>
            <Text color={"darkgreen"} fontWeight={"bold"}>
              FREE
            </Text>
          </Flex>
          <Flex justifyContent={SB}>
            <Text>Bag Subtotal</Text>
            <Text>{RUPEES_SYMBOL + bagSubTotal.toFixed(2)}</Text>
          </Flex>
          <Flex justifyContent={SB}>
            <Text>Product Discount(s)</Text>
            <Text>{"-" + (RUPEES_SYMBOL + discount.toFixed(2))}</Text>
          </Flex>

          <Text textAlign={"left"} color={"darkgreen"} fontWeight={"bold"}>
            You will save {RUPEES_SYMBOL + discount.toFixed(2)} on this order.
          </Text>

          <Divider />
          <Flex justifyContent={SB}>
            <Heading size="sm">Total Payable</Heading>
            <Heading size="sm">{RUPEES_SYMBOL + total.toFixed(2)}</Heading>
          </Flex>
          <Heading textAlign={"left"} as={"h6"} size="sm">
            Will be delivered to:-{selectedValue}
          </Heading>
          <Wrap ref={full_address}>
            {" "}
            {firstName +
              " " +
              lastName +
              " " +
              address +
              " " +
              landMark +
              " " +
              mobile +
              " " +
              city +
              " " +
              state +
              " " +
              pinCode}
          </Wrap>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CheckoutPage;
