import {
  Box,
  Flex,
  Text,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import logo from "../../assets/cliq_mart_logo.png";
import { Link } from "react-router-dom";
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {CENTER, DEEPPINK, TRANSPARENT} from "../../constants/typography"
import {SignupModal} from "../SignupModal"
import { useSelector } from "react-redux";
import {FaUserCircle} from "react-icons/fa"
export default function Navbar() {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const { loading, signup, auth, no_user,error, exist, userId } = useSelector(
    (state) => state.authManager
  );
  return (
    <Box
      bg="#212121"
      color="white"
      fontSize={{ base: ".3rem", md: ".6rem", lg: ".9rem" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        bg="black"
        w="82%"
        float="right"
        padding={2}
      >
        <Box flexGrow="1" flexBasis="0" textAlign="left">
          <Link>Tata CLiQ Luxury</Link>
        </Box>
        <Box
          display="flex"
          alignItems={CENTER}
          justifyContent="space-evenly"
          flexGrow="1"
          flexBasis="0"
        >
          <Link>CLiQ Cash</Link>
          <Link>Gift Card</Link>
          <Link>CLiQ Care</Link>
          <Link>Track Orders</Link>
          <Menu>
  <MenuButton bg={TRANSPARENT} _active={{bg:{TRANSPARENT}}} _hover={{bg:{TRANSPARENT}}} as={Button}>
    {auth?<FaUserCircle color={DEEPPINK} />:"Sign up/Sign in"}
  </MenuButton>
  <MenuList>
    <SignupModal />
    
  </MenuList>
</Menu>
        </Box>
      </Box>
      <Box
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          padding={2}
          flexGrow="1"
          flexBasis="0"
          position="relative"
          bottom={5}
        >
          <Link>
            <Image w="100%" src={logo} />
          </Link>
        </Box>
        <Box
          flexGrow="7"
          flexBasis="0"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Box
            flexGrow="2"
            flexBasis="0"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              w="75%"
              margin="auto"
            >
              <Box
                display="flex"
                onMouseEnter={() => setArrow1(true)}
                onMouseLeave={() => setArrow1(false)}
              >
                <Text>Categories</Text>
                <Box>{arrow1 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Box>
              </Box>
              <Box
                display="flex"
                onMouseEnter={() => setArrow2(true)}
                onMouseLeave={() => setArrow2(false)}
              >
                <Text>Brands</Text>
                <Box>{arrow2 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Box>
              </Box>
            </Box>
          </Box>
          <Box flexGrow="4" flexBasis="0">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input type="tel" placeholder="Search for Products" />
            </InputGroup>
          </Box>
          <Box
            flexGrow="2"
            flexBasis="0"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <BsSuitHeart size="18%" />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FiShoppingBag size="18%" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
