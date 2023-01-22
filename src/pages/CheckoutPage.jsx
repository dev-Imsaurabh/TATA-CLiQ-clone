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
import { LOADER_URL, RUPEES_SYMBOL, USERS } from "../constants/constants";
import { AUTO, CENTER, COLUMN, FILL_80PARENT, FILL_PARENT, NONE, ROW, SB } from "../constants/typography";
import { AddressContext } from "../contexts/AddressContextProvider";
import { GetCart, UdpateCart } from "../redux/cart/cart.actions";
import "../styles/style.css";

const CheckoutPage = () => {
  const navigate = useNavigate();
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
  let toast =useToast()

  const { userId } = useSelector((state) => state.authManager);
  const { data, loading, error } = useSelector((state) => state.cartManager);
  const [bagTotal, setBagTotal] = useState(0);
  const [bagSubTotal, setBagSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartData, setCartData] = useState([]);
  let nav = useNavigate()
  let full_address = useRef()
  let dispatch = useDispatch();
  const [prevorder,setPrevOrder]=useState([])

  useEffect(() => {
    dispatch(GetCart(userId.id));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  useEffect(() => {
    let bag_total = 0;
    let checkout_total = 0;
    let final_discount = 0;

    data.forEach(({ price, strike_price, quantity }) => {
      // console.log(strike_price);
      checkout_total += price * quantity;
      bag_total += strike_price * quantity;
    });

    final_discount = bag_total - checkout_total;
    setTotal(checkout_total);
    setDiscount(final_discount);
    setBagTotal(bag_total);
    setBagSubTotal(bag_total);
    // console.log(checkout_total,bag_total,final_discount)
  }, [data]);

  useEffect(()=>{

    if(data.length==0){
      nav("/cart")
    }

  },[data])

  useEffect(()=>{
    const orders = async()=>{
      let res = await axios.get(USERS+"/"+userId.id)
      setPrevOrder(res.data.orders)
    }

    orders()
  },[])


  const makeOrder =(onClose)=>{
    let orders = [...data]
    // console.log(orders)
    let newdata = orders.map((el)=>{
      el.address=full_address.current.textContent
      return el

    })

    // console.log(prevorder)
    

    dispatch(UdpateCart(userId.id,{cart:[],orders:[...prevorder,...newdata]}))
    if(!loading){

      toast({
        title: 'Order Placed',
        description: "Go to orders page to see your orders",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      onClose()

    }
  }

  if(loading) return <Loader gif={LOADER_URL}/>

  return (
    <Box margin={AUTO} mt={170}  w={FILL_80PARENT} >
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
                <Stack spacing={3}>
                  <Box>
                    <Input
                      placeholder="First Name"
                      
                      width={{
                        base: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "48%",
                      }}
                      mr={"12px"}
                      mb={"10px"}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Input
                      placeholder="Last Name"
              
                      width={{
                        base: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "48%",
                      }}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Box>
                  <Input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    
                  />
                  <Input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="State"
                    
                  />
                  <Input
                    value={landMark}
                    onChange={(e) => setLandMark(e.target.value)}
                    placeholder="Landmark"
                    
                  />
                </Stack>
                </FormControl>
              </Box>
              <Box
                ml={{ base: "0%", sm: "0%", md: "0%", lg: "2%" }}
                width={{ base: "100%", sm: "100%", md: "100%", lg: "48%" }}
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
          <Flex display={"flex"} alignItems={CENTER} justify={"end"} >
          <Button display={NONE}  mr={"20px"}>Cancel</Button>
            <OtpModal total={total} callback={makeOrder} />
          </Flex>

        </Box>

        <Flex
          p={"20px"}
          width={{ base: "90%", sm: "90%", md: "90%", lg: "40%" }}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          borderRadius={"10px"}
          direction={"column"}
          height="380px"
          gap={"10px"}
        >
          <Flex justifyContent={SB}>
            <Text>Bag Total</Text>
            <Text>{RUPEES_SYMBOL+bagTotal.toFixed(2)}</Text>
          </Flex>
          <Flex justifyContent={SB}>
            <Text>Shipping Charge</Text>
            <Text color={"darkgreen"} fontWeight={"bold"}>
              FREE
            </Text>
          </Flex>
          <Flex justifyContent={SB}>
            <Text>Bag Subtotal</Text>
            <Text>{RUPEES_SYMBOL+bagSubTotal.toFixed(2)}</Text>
          </Flex>
          <Flex justifyContent={SB}>
            <Text>Product Discount(s)</Text>
            <Text>{"-" + (RUPEES_SYMBOL + discount.toFixed(2))}</Text>
          </Flex>

          <Text textAlign={"left"} color={"darkgreen"} fontWeight={"bold"}>
            You will save {(RUPEES_SYMBOL + discount.toFixed(2))} on this order.
          </Text>

          <Divider />
          <Flex justifyContent={SB}>
            <Heading size="sm">Total Payable</Heading>
            <Heading size="sm">{RUPEES_SYMBOL+total.toFixed(2)}</Heading>
          </Flex>
          <Heading textAlign={"left"} as={"h6"} size="sm">
            Will be delivered to:-{selectedValue}
          </Heading>
         <Wrap ref={full_address}> {firstName +
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
            pinCode}</Wrap>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CheckoutPage;
