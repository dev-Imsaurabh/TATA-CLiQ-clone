import { Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

const User = () => {
  return (
    <Box
      padding={10}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    >
      <Avatar src="https://bit.ly/broken-link" />
      <Text margin={1}>user.name</Text>
      <Text>user.email.id</Text>
    </Box>
  );
};

export default User;
