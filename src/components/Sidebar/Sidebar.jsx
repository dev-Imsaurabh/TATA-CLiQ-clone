import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const profileLinks = [
    {
      link: "wishList",
      Title: "My Wishlist",
    },
    {
      link: "orders",
      Title: "Order History",
    },
    {
      link: "tcp-points",
      Title: "NeuPass",
    },
    {
      link: "address-book",
      Title: "Address Book",
    },
    {
      link: "brands",
      Title: "Brands",
    },
    {
      link: "payment-details",
      Title: "Saved Payments",
    },
    {
      link: "alerts",
      Title: "Alerts & Coupons",
    },
    {
      link: "giftCard",
      Title: "Gift Card",
    },
    {
      link: "cliq-cash",
      Title: "CLiQ Cash",
    },
    {
      link: "notifications",
      Title: "Manage Notifications",
    },
    {
      link: "update-profile",
      Title: "Profile",
    },
  ];

  return (
    <Box
      w="25%"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      padding={2}
    >
      <Box textAlign="left">
        <Text fontSize="2xl" color="black">
          Menu
        </Text>
      </Box>
      <Box>
        {profileLinks.map((el) => (
          <Box textAlign="left" marginTop="15px">
            <Link to={el.link}>{el.Title}</Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
