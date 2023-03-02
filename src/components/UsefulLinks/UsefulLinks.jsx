import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

const UsefulLinks = () => {
  const links = [
    "Que Magazine",
    "Help & Services",
    "Privacy policy",
    "Terms & Conditions",
    "About us",
    "FAQ",
  ];

  return (
    <Box >

      {links.map((link) => (
        <Box
        key={link}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="10px"
        >
          <Link>{link}</Link>
          <ChevronRightIcon />
        </Box>
      ))}
    </Box>
  );
};

export default UsefulLinks;
