import { Box, Button, Text } from "@chakra-ui/react";
// import axios from "axios";
import React, { useState } from "react";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { USERS } from "../../constants/constants";
// import { FILL_80PARENT } from "../../constants/typography";
import { OrderItems } from "../OrderItems";

const Orders = () => {

//   let {token} = useSelector((state)=>state.authManager)
  const [prevorder,setPrevOrder]=useState([])
  const nav = useNavigate()

//   useEffect(()=>{
//     const orders = async()=>{
//       let res = await axios.get(USERS+"/"+token)
//       setPrevOrder(res.data.orders)
//     }

//     orders()
//   },[])

  return (
    <Box >
      <Box>
        {prevorder?.map((el)=><OrderItems key={el.id} {...el} />)}
        <Text display={prevorder?.length>0?"none":"block"} cursor="default">You have not made any purchase yet</Text>
        
        <Button onClick={()=>{
          nav("/")
        }} bg="rgb(218, 28, 92)" color="white" marginTop="15px">

          Continue Shoping
        </Button>
      </Box>
    </Box>
  );
};

export default Orders;
