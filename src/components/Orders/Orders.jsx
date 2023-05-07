import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL, ORDERS } from "../../constants/constants";
// import { FILL_80PARENT } from "../../constants/typography";
import { OrderItems } from "../OrderItems";

const Orders = () => {
  const token = JSON.parse(localStorage.getItem("token")) || null;

  const [prevorder, setPrevOrder] = useState([]);
  const nav = useNavigate();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const orders = async () => {
      let res = await fetch(`https://calm-blue-ray-yoke.cyclic.app/order`, {
        headers: {
          Authorization: token,
        },
      });
      res = await res.json();
      console.log(res.cartData);
      setPrevOrder(res.cartData);
    };

    orders();
  }, []);

  console.log(prevorder);
  // if (prevorder?.length > 0) {
  //   for (let i = 0; i < prevorder.length; i++) {
  //     console.log(prevorder[i].order);
  //     setOrder([...order, prevorder[i].order]);
  //   }
  // }
  // console.log(order);


  return (
    <Box>
      <Box>
        {/* {prevorder?.filter({order})?.map((el) => (
          return console.log(el);
          // <OrderItems key={el._id} {...el} />
        ))} */}
        <Text
          display={prevorder?.length > 0 ? "none" : "block"}
          cursor="default"
        >
          You have not made any purchase yet
        </Text>

        <Button
          onClick={() => {
            nav("/");
          }}
          bg="rgb(218, 28, 92)"
          color="white"
          marginTop="15px"
        >
          Continue Shoping
        </Button>
      </Box>
    </Box>
  );
};

export default Orders;
