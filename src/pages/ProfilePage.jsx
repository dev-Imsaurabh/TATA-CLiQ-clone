import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { UsefulLinks } from "../components/UsefulLinks";
import { MyReviews } from "../components/MyReviews";
import { Orders } from "../components/Orders";
import { User } from "../components/User";
import { useSelector } from "react-redux";
import { AUTO, COLUMN, FILL_80PARENT, FILL_90PARENT, ROW } from "../constants/typography";

const ProfilePage = () => {

  const {userId} = useSelector((state)=>state.authManager)
  

  return (
    <Box display="flex" flexDirection={{base:"column-reverse",sm:"column-reverse",lg:ROW}} gap={5}  w={FILL_80PARENT} m={AUTO} justifyContent="center" marginTop="200px">
      <Sidebar />
      <Box    boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">
        <Tabs >
          <TabList overflow={"scroll"}>
            <Tab>Recent Orders</Tab>
            <Tab>My reviews</Tab>
            <Tab>Useful Links</Tab>
            <Tab>Alerts</Tab>
            <Tab>Coupons</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Orders />
            </TabPanel>
            <TabPanel>
              <MyReviews />
            </TabPanel>
            <TabPanel>
              <UsefulLinks />
            </TabPanel>
            <TabPanel>
              <p>No Alerts</p>
            </TabPanel>
            <TabPanel>
              <p>No Coupons</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <User />
    </Box>
  );
};

export default ProfilePage;
