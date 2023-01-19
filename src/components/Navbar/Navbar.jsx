import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      {/* Sample navbar with folder export */}
      <Flex
        position={"fixed"}
        top={0}
        w={"100%"}
        background={"#212121"}
        zIndex={1}
      >
        <Box style={{ border: "2px solid red", width: "20%" }}>Logo</Box>
        <Box style={{ border: "2px solid red", width: "80%" }}>
          <Box>
            <Flex
              justifyContent={"space-between"}
              bg={"black"}
              fontFamily="semiBold"
              height={"40px"}
              fontSize="12px"
              fontWeight={"bold"}
              color={"white"}
            >
              <Box margin={"auto 20px"}>Tata CLiQ Luxury</Box>
              <Flex justifyContent={"space-around"} border="2px solid green">
                <Box margin={"auto 20px"}>CLiQ Cash</Box>
                <Box margin={"auto 20px"}>Gift Card</Box>
                <Box margin={"auto 20px"}>CLiQ Care</Box>
                <Box margin={"auto 20px"}>Track Orders</Box>
                <Box margin={"auto 80px auto 20px"}>Sign in / Sign Up</Box>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Flex
              justifyContent={"space-between"}
              fontFamily="semiBold"
              height={"60px"}
              fontSize="20px"
              fontWeight={"bold"}
              color={"white"}
            >
              <Menu>
                <MenuButton onHover={() => setIsOpen(!isOpen)}>
                  Categories <AiOutlineArrowDown />
                </MenuButton>
                <MenuList >
                  <MenuItem>Item 1</MenuItem>
                  <MenuItem>Item 2</MenuItem>
                  <MenuItem>Item 3</MenuItem>
                </MenuList>
              </Menu>

              <Box>
                <Menu>
                  <MenuButton onHover={() => setIsOpen(!isOpen)}>
                    Brands <AiOutlineArrowDown />
                  </MenuButton>
                  <MenuList display={isOpen ? "block" : "none"}>
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem>Item 2</MenuItem>
                    <MenuItem>Item 3</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray"
                  children={<BiSearchAlt2 />}
                />
                <Input
                  type="text"
                  placeholder="Search for Products"
                  maxW={"50%"}
                />
              </InputGroup>
              <Box>
                <BsSuitHeart />
              </Box>
              <Box>
                <FiShoppingBag />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
