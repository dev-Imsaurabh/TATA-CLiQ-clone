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
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import logo from "../../assets/cliq_mart_logo.png";
import { Link } from "react-router-dom";
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  return (
    <Box>
      <Box display="flex">
        <Box maxW="15%" padding={2}>
          <Image src={logo} />
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Link>Tata CLiQ Luxury</Link>
            </Box>
            <Box>
              <Link>CLiQ Cash</Link>
              <Link>Gift Card</Link>
              <Link>CLiQ Care</Link>
              <Link>Track Orders</Link>
              <Link>Sign in / Sign Up</Link>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
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
            <Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number" />
              </InputGroup>
            </Box>
            <Box>
              <BsSuitHeart />
            </Box>
            <Box>
              <FiShoppingBag />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
