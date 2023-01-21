import {
  Box,
  SimpleGrid,
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import logo from "../../assets/cliq_mart_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {CENTER, DEEPPINK, FIXED, STICKY, TRANSPARENT} from "../../constants/typography"
import {SignupModal} from "../SignupModal"

import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
export default function Navbar() {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const { loading, signup, auth, no_user, error, exist, userId } = useSelector(
    (state) => state.authManager
  );

  let nav = useNavigate()
  return (
    <Box
    position={FIXED}
    zIndex={100}
    top={0}
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
        <Box flexGrow="1"  flexBasis="0" textAlign="left">
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
            <MenuButton
              bg={TRANSPARENT}
              _active={{ bg: { TRANSPARENT } }}
              _hover={{ bg: { TRANSPARENT } }}
              as={Button}
            >
              {auth ? <FaUserCircle color={DEEPPINK} /> : "Sign up/Sign in"}
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
          <Link to="/">
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
              justifyContent="center"
              alignItems="center"
              w="75%"
              margin="auto"
            >
              <Popover placement="bottom-start" trigger="hover">
                <PopoverTrigger>
                  <Box
                    display="flex"
                    onMouseEnter={() => setArrow1(true)}
                    onMouseLeave={() => setArrow1(false)}
                  >
                    <Text>Categories</Text>
                    <Box>
                      {arrow1 ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </Box>
                  </Box>
                </PopoverTrigger>

                <PopoverContent w="fit-content">
                  <PopoverBody color="black">
                    <Tabs isLazy display="flex">
                      <TabList display="flex" flexDir="column" w="30%">
                        <Tab>Women's Fashion</Tab>
                        <Tab>Men's Fashion</Tab>
                        <Tab>Gadgets</Tab>
                      </TabList>
                      <TabPanels>
                        {/* initially mounted */}
                        <TabPanel>
                          <SimpleGrid columns={4} spacing="4px">
                            <Link style={{ fontWeight: "500" }}>
                              Shop All Ethnic Wear
                            </Link>
                            <Link>Kurtis & Kurtas</Link>
                            <Link>Suits</Link>
                            <Link>Sarees & Lehenga Sets</Link>
                            <Link>Bottoms</Link>
                            <Link>Blouses & Fabrics</Link>
                            <Link>Dupattas</Link>
                            <Link style={{ fontWeight: "500" }}>
                              Shop All Western Wear
                            </Link>
                            <Link>Tops & Tunics</Link>
                            <Link>Dresses</Link>
                            <Link>Jeans</Link>
                            <Link>Shirts</Link>
                            <Link>Trousers</Link>
                            <Link>Skirts</Link>
                            <Link>Shorts</Link>
                            <Link>Jackets & Blazers</Link>
                            <Link>Leggings</Link>
                            <Link>Capris</Link>
                            <Link>Jumpsuits</Link>
                            <Link>Shrugs</Link>
                            <Link>Sweaters</Link>
                            <Link>Sweatshirts</Link>
                            <Link style={{ fontWeight: "500" }}>
                              Activewear & Sportswear
                            </Link>
                            <Link>T-shirts</Link>
                            <Link>Shorts</Link>
                            <Link>Track Pants</Link>
                            <Link>Innerwear</Link>
                            <Link style={{ fontWeight: "500" }}>
                              Shop All Footwear
                            </Link>
                            <Link>Casual Footwear</Link>
                            <Link>Boots</Link>
                            <Link>Sneakers</Link>
                            <Link>Flip Flops</Link>
                            <Link>Sports Shoes</Link>
                            <Link>Ethnic Footwear</Link>
                          </SimpleGrid>
                        </TabPanel>
                        {/* initially not mounted */}
                        <TabPanel>
                          <SimpleGrid columns={4} spacing="4px">
                            <Link style={{ fontWeight: "500" }}>Tops</Link>
                            <Link>T-shirts & PolosShirts</Link>
                            <Link>Formal Shirts</Link>
                            <Link>Sweatshirts</Link>
                            <Link>JacketsSuits & Blazers</Link>
                            <Link style={{ fontWeight: "500" }}>Bottoms</Link>
                            <Link>Jeans</Link>
                            <Link>Chinos & Trousers</Link>
                            <Link>Jeans</Link>
                            <Link>Formal Trousers</Link>
                            <Link>Trousers</Link>
                            <Link>Shorts</Link>
                            <Link>Track Pants & Joggers</Link>
                            <Link style={{ fontWeight: "500" }}>
                              Activewear & Sportswear
                            </Link>
                            <Link>T-Shirts & Jerseys</Link>
                            <Link>Shorts</Link>
                            <Link>Sports Jackets</Link>
                            <Link>Joggers</Link>
                            <Link style={{ fontWeight: "500" }}>
                              Shop All Footwear
                            </Link>
                            <Link>Casual Footwear</Link>
                            <Link>Sneakers</Link>
                            <Link>Formal Shoes</Link>
                            <Link>Running Shoes</Link>
                            <Link>Training Shoes</Link>
                            <Link>Sports Shoes</Link>
                            <Link>Boots</Link>
                            <Link>Flip Flops</Link>
                          </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                          <SimpleGrid columns={2} spacing="4px">
                            <Link style={{ fontWeight: "500" }}>
                              Audio Store
                            </Link>
                            <Link>Headphones</Link>
                            <Link>Wired</Link>
                            <Link>Earphones</Link>
                            <Link>Headsets</Link>
                            <Link>Neckbands</Link>
                            <Link>Earbuds</Link>
                            <Link>True Wireless</Link>
                            <Link style={{ fontWeight: "500" }}>Speakers</Link>
                            <Link>Bluetooth Speakers</Link>
                            <Link>Soundbars</Link>
                            <Link>Home Theatre Systems</Link>
                          </SimpleGrid>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              {/* <Box
                display="flex"
                onMouseEnter={() => setArrow2(true)}
                onMouseLeave={() => setArrow2(false)}
              >
                <Text>Brands</Text>
                <Box>{arrow2 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Box>
              </Box> */}
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
              <FiShoppingBag onClick={()=>{
                nav("/cart")
              }} size="18%" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
