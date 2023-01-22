import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Orders = () => {
  return (
    <Box>
      <Box>
        <Text cursor="default">You have not made any purchase yet</Text>
        <Button bg="rgb(218, 28, 92)" color="white" marginTop="15px">
          Continue Shoping
        </Button>
      </Box>
    </Box>
  );
};

export default Orders;
