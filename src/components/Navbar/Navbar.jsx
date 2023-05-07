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
  // MenuItem,
  MenuList,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  // PopoverHeader,
  PopoverBody,
  // PopoverFooter,
  // PopoverArrow,
  // PopoverCloseButton,
  // PopoverAnchor,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
// import { AiOutlineArrowDown } from "react-icons/ai";
// import { BiSearchAlt2 } from "react-icons/bi";
import { useEffect, useState } from "react";
import logo from "../../assets/cliq_mart_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  BLACK,
  CENTER,
  DEEPPINK,
  FIXED,
  POINTER,
  // STICKY,
  TRANSPARENT,
  // WHITE,
} from "../../constants/typography";
import { SignupModal } from "../SignupModal";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { AdminModal } from "../AdminModal";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../redux/cart/cart.actions";

export default function Navbar() {
  const [arrow1, setArrow1] = useState(false);
  const { products } = useSelector((state) => state.cartManager);
  const [cart, setCart] = useState("");
  let dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token")) || null;

  useEffect(() => {
    dispatch(getCartProducts(token));

    setCart(products?.length);
  }, [token, dispatch,products?.length]);

  // const [arrow2, setArrow2] = useState(false);

  const [value, setValue] = useState("");

  let nav = useNavigate();
  const handleSeacrh = (event) => {
    if (event.key === "Enter") {
      if (value === "") {
        return;
      }
      nav(`/search?q=${value}`);
    }
  };

  return (
    <Box
      position={FIXED}
      zIndex={100}
      top={0}
      bg="#212121"
      color="white"
      fontSize={{ base: ".3rem", md: ".6rem", lg: ".9rem" }}
      maxWidth={"100%"}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
        bg="black"
        w="82%"
        float="right"
        padding={2}
      >
        <Box
          fontSize={{ base: 12, sm: 16, lg: 16 }}
          flexGrow="1"
          flexBasis="0"
          textAlign="left"
        >
          <Link>CLiQ Luxury</Link>
        </Box>
        <Box
          display="flex"
          alignItems={CENTER}
          justifyContent="space-evenly"
          fontSize={{ base: 12, sm: 16, lg: 16 }}
          flexGrow="1"
          flexBasis="0"
        >
          <Link to="/profile">CLiQ Cash</Link>
          <Link to="/profile">Gift Card</Link>
          <Link to="/profile">CLiQ Care</Link>
          <Link to="/profile">Track Orders</Link>
          <Menu>
            <MenuButton
              fontSize={{ base: 12, sm: 16, lg: 16 }}
              bg={TRANSPARENT}
              _active={{ bg: { TRANSPARENT } }}
              _hover={{ bg: { TRANSPARENT } }}
              as={Button}
            >
              {token ? <FaUserCircle color={DEEPPINK} /> : "Sign up/Sign in"}
            </MenuButton>
            <MenuList>
              <SignupModal bg={TRANSPARENT} color={BLACK} />
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
          bottom={{ base: 0, sm: 10, md: 5, lg: 5 }}
        >
          <Link to="/">
            <Image
              maxWidth={{ base: "275%", sm: "135%", md: "100%" }}
              src={logo}
            />
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
            >
              <Popover placement="bottom-start" trigger="hover">
                <PopoverTrigger>
                  <Box
                    display="flex"
                    fontSize={{ base: 8, sm: 16, lg: 16 }}
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
            </Box>
          </Box>
          <Box padding={2} flexGrow="4" flexBasis="0">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                h={{ base: 8, sm: 12, lg: 12 }}
                value={value}
                onKeyDown={handleSeacrh}
                onChange={(e) => setValue(e.target.value)}
                type="tel"
                placeholder="Search for Products"
              />
            </InputGroup>
          </Box>
          <Box
            flexGrow="2"
            flexBasis="0"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            fontSize={{ base: 12, sm: 12, lg: 16 }}
          >
            <BsSuitHeart size="10%" />{" "}
            <Menu>
              <MenuButton
                fontSize={{ base: 8, sm: 18, lg: 24 }}
                bg={TRANSPARENT}
                _active={{ bg: { TRANSPARENT } }}
                _hover={{ bg: { TRANSPARENT } }}
                as={Button}
              >
                <MdAdminPanelSettings cursor={POINTER} />
              </MenuButton>
              <MenuList>
                <AdminModal />
              </MenuList>
            </Menu>
            <FiShoppingBag
              size={"10%"}
              cursor={POINTER}
              onClick={() => {
                nav("/cart");
              }}
              />
              <Text ml={{sm:"-15px",md:"-30px",lg:"-40px",xl:"-50px"}} mt={{base:"-30px",md:"-40px"}}>({cart})</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
