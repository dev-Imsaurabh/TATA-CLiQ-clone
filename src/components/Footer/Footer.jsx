import { Box, Flex, Text } from "@chakra-ui/react";
import { BsFacebook, BsLinkedin, BsApple } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube, AiFillAndroid } from "react-icons/ai";
import {
  COLUMN,
  FILL_25PARENT,
  FILL_PARENT,
  ROW,
  SB,
  CENTER,
  SE,
} from "../../constants/typography";

export default function Footer() {
  return (
    <Box>
      <Box>
        <Flex
          padding={"50px"}
          boxShadow={"rgba(0, 0, 0, 0) 0px 5px 15px"}
          justifyContent={SB}
          direction={{ base: COLUMN, sm: ROW, md: ROW, lg: ROW }}
          bg={"#F9F9F9"}
          m={"20px auto"}
        >
          <Box>Tata Trust</Box>
          <Box>QUiQ PiQ</Box>
          <Box>Authentic Brands</Box>
          <Box>Easy Returns</Box>
        </Flex>
      </Box>
      <Box>
        <Flex
          justifyContent={SB}
          direction={{ base: COLUMN, sm: COLUMN, md: ROW, lg: ROW }}
          margin={"20px"}
        >
          <Flex direction={COLUMN}>
            <Text as={"h4"} fontSize={"20px"} margin={"20px auto"}>
              CliqMart MarketPlace
            </Text>
            <Text as="u">About Us</Text>
            <Text as="u">Careers</Text>
            <Text as="u">Sell With Us</Text>
            <Text as="u">Terms of Use</Text>
            <Text as="u">Privacy Policy</Text>
            <Text as="u">Affiliates</Text>
            <Text as="u">Sitemap</Text>
          </Flex>
          <Flex direction={COLUMN}>
            <Text as={"h4"} fontSize={"20px"} margin={"20px auto"}>
              Customer Service
            </Text>
            <Text as="u">Shopping</Text>
            <Text as="u">Offers & Promotions</Text>
            <Text as="u">Payments</Text>
            <Text as="u">Cancellation</Text>
            <Text as="u">Returns and Refunds</Text>
            <Text as="u">CliQ And PiQ</Text>
            <Text as="u">Return To Store</Text>
            <Text as="u">Electronics Return Policy</Text>
            <Text as="u">Contact Us</Text>
            <Text as="u">Reviews Guidelines</Text>
            <Text as="u">Furniture Return Policy</Text>
            <Text as="u">Assembly Policy</Text>
          </Flex>
          <Flex direction={COLUMN}>
            <Text as={"h4"} fontSize={"20px"} margin={"20px auto"}>
              My CliqMart
            </Text>
            <Text as="u">My Account</Text>
            <Text as="u">My Orders</Text>
            <Text as="u">My Shopping Bag</Text>
            <Text as="u">My Wishlist</Text>
          </Flex>
          <Flex
            direction={COLUMN}
            width={{
              base: FILL_PARENT,
              sm: FILL_PARENT,
              md: FILL_25PARENT,
              lg: FILL_25PARENT,
            }}
            
          >
            <Text as={"h4"} fontSize={"20px"} margin={"20px auto"} >
              CliqMart Offerings
            </Text>
            <Text as="u">
              Watches for Men | Campus Shoes | Sandals for Men | Sneakers for
              Men | Reebok Shoes | Cotton Kurtis | Woodland Shoes | Jumpsuits |
              Allen Solly | Sparx Shoes | Gold Rings | Formal Shoes for Men |
              Sports Shoes for Men | Wallets for Men | Ladies Watches | Trolley
              Bags | Handbags for Women | Sling Bags for Women | Casual Shoes
              for Men | Boots for Men | Digital Watches | Sonata Watches |
              Sneakers for Women | Running Shoes | Puma Shoes | Boots for Women
              | Skechers | Malabargold | Fabindia | Utsa | Vark | Gia | LOV |
              Sitemap
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Flex
          padding={"20px"}
          boxShadow={"rgba(0, 0, 0, 0) 0px 5px 15px"}
          justifyContent={{base:CENTER,md:SB}}
          bg={"#F9F9F9"}
          m={"20px auto"}
          direction={{ base: COLUMN, sm: COLUMN,md:ROW, lg: ROW }}
          gap={{base: 8, sm: 6, lg: 4}}
        >
          <Flex justifyContent={SE} gap={4} alignItems={CENTER}>
            <Text>Download App</Text>
            <AiFillAndroid />
            <BsApple />
          </Flex>
          <Flex
            justifyContent={SE}
            gap={10}
            fontSize={"20px"}
            alignItems={CENTER}
          >
            <BsFacebook />
            <FaTwitterSquare />
            <AiFillInstagram />
            <AiFillYoutube />
            <BsLinkedin />
          </Flex>
          <Box>© 2023 CliQMart | All rights reserved</Box>
        </Flex>
      </Box>

      <Box textAlign={"left"} margin={"auto 30px"}>
        <Box margin={"20px auto"}>
          <Text as="b">
            CLiQ Mart: Shop Online with India's most trusted destination
          </Text>
          <Text>
            Genuine products from all the top brands get delivered right to your
            doorstep. Our sleek, immersive design allows you to easily navigate
            between categories and brand stores so that you can find a wide
            selection of womenswear, menswear, kidswear, footwear, watches,
            accessories, footwear, watches and accessories online. You can also
            check our great offers and get the best prices on various products
            across lifestyle, fashion, and more.
          </Text>
        </Box>
        <Box margin={"20px auto"}>
          <Text as="b">
            Online Shopping: Fast & convenient with the click of a button
          </Text>
          <Text>
            The upside of online shopping at CLiQ Mart online store, is that
            you'll save on time and most importantly money with TataCliq offers.
            It's as simple as comparing products and prices online before making
            the right buy. What's more, you also have the option to pay for your
            favourite brands and products using our easy EMI options. Of course,
            you can buy and try - in the convenience of your home. Returns are
            easy too: We'll pick up your returns for free or you can also drop
            off the goods at the nearest brand store.
          </Text>
        </Box>
        <Box margin={"20px auto"}>
          <Text as="b">
            CLiQ Mart Shopping App: just a few clicks on Android & iOS
          </Text>
          <Text>
            Download the Android app from the Play Store or the iOS app from
            Apple App Store and get set to enjoy a range of benefits. Apart from
            the best deals, amazing offers and the latest styles online, the app
            also gives you the flexibility to shop at your convenience. Use the
            easy share options to share your shopping with your friends and
            family to ensure you're buying something perfect. With constant
            updates and a host of new features being introduced constantly,
            enjoy a shopping experience that you'll love.
          </Text>
        </Box>
        <Box margin={"20px auto"}>
          <Text as="b">
            CLiQ Mart: The most genuine place for Fashion and Lifestyle
          </Text>
          <Text>
            With an exclusive Brand Store for Westside Online we have most of
            your trendy shopping needs taken care of. Make CLiQ Mart your online
            shopping destination and get the best deals on your favourite
            brands, with 100% genuine products. Be it jewellery or makeup, you
            can count on CLiQ Mart for receiving only the most authentic
            products.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
