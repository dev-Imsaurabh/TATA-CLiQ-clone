import { Box, Avatar, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AUTO } from "../../constants/typography";
import { resetAuth } from "../../redux/auth/auth.actions";

const User = () => {
  const {userId} = useSelector((state)=>state.authManager)
  let dispatch = useDispatch()

  return (
    <Box
    w={"25%"}
      padding={10}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    >
      <Avatar src="https://bit.ly/broken-link" />
      <Text margin={1}>{userId.name}</Text>
      <Text>{userId.email}</Text>
      <Button onClick={()=>{
        dispatch(resetAuth())
      }} colorScheme={"pink"}>Logout</Button>
    </Box>
  );
};

export default User;
