import { Box, Avatar, Text, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USERS } from "../../constants/constants";
import { FILL_25PARENT, FILL_PARENT } from "../../constants/typography";
import { resetAuth } from "../../redux/auth/auth.actions";

const User = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [user, setUser] = useState({});

  const { token } = useSelector((state) => state.authManager);
  // console.log(token);

  const getUser = async () => {
    let res = await fetch(`${USERS}/user`, {
      headers: {
        Authorization: token,
      },
    });
    res = await res.json();
    // console.log(res.user);
    setUser(res.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Box
      w={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_25PARENT }}
      padding={10}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    >
      <Avatar name={user?.name} backgroundColor={"orange"} src="" />
      <Text margin={1}>{user?.name}</Text>
      <Text>{user?.email}</Text>
      <Button
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(resetAuth());

          setTimeout(() => {
            navigate("/");
          }, 1000);
          toast({
            title: "Logout Successful",
            description: "Redirecting to Homepage",
            position: "top",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
        }}
        colorScheme={"pink"}
      >
        Logout
      </Button>
    </Box>
  );
};

export default User;
