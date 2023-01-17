import { Box, Flex, Grid, HStack, VStack } from "@chakra-ui/react";
import CardComponent from "../components/Card-Component/CardComponent";
import { Gap } from "../components/Gap";
import {
  bankImageData,
  circularCategoryData,
  dealsWheelData,
  featuredBrandData,
  mensWearByCliqData,
  newOnCliqData,
  popularpiqsData,
  trendingNowData,
  womensWearData,
} from "../constants/staticData";
import {
  AUTO,
  CENTER,
  COLUMN,
  FILL_70PARENT,
  FILL_75PARENT,
  FILL_80PARENT,
  FILL_PARENT,
  R1,
  R11,
  R2,
  R3,
  R4,
  R6,
  ROW,
  SB,
} from "../constants/typography";
import my_pixel from "../scripts/my_pixel";
import estside_banner_img from "../assets/estside_banner_img.png";
import theweddingedits from "../assets/theweddingedits.png";
import winterstyle_banner from "../assets/winterstyle_banner.png";
import trendingnow_banner from "../assets/trendingnow_banner.png";
import strike_choice_banner from "../assets/strike_choice_banner.png";
import { Heading } from "../components/Heading";

export default function Homepage() {
  return (
    <Box className="container">
      {/* circular category card */}
      <Grid gridTemplateColumns={{ base: R3, sm: R6, lg: R11 }}>
        {circularCategoryData.map((el) => (
          <CardComponent {...el} />
        ))}
      </Grid>

      {/* gap component for simple gap */}
      <Gap gap={70} />

      {/* bank images */}
      <Box width={FILL_75PARENT} margin={AUTO}>
        <Flex
          direction={{ base: COLUMN, sm: ROW, lg: ROW }}
          alignItems={CENTER}
          justify={CENTER}
          gap={my_pixel(10)}
        >
          {bankImageData.map((el) => (
            <CardComponent {...el} />
          ))}
        </Flex>

        {/* gap component for simple gap */}
        <Gap gap={50} />

        {/* estside image */}
        <CardComponent src={estside_banner_img} width={FILL_PARENT} />

        {/* gap component for simple gap */}
        <Gap gap={50} />

        {/* Category wear Images */}
        <Grid gap={8} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {dealsWheelData.map((el) => (
            <CardComponent {...el} />
          ))}
        </Grid>

        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for Deals Wheel */}
        <Heading h1={"DEALS WHEEL"} h2={"Grab these before they're gone"} />

        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* New On Cliq */}
        <Grid gap={8} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {newOnCliqData.map((el) => (
            <CardComponent {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for new on cliq */}
        <Heading h1={"NEW ON CLiQ"} h2={"Fresh PiQs to choose from"} />
        <Gap gap={60} />

        {/* Featured brands */}
        <Grid gap={8} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {featuredBrandData.map((el) => (
            <CardComponent {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for featured brand */}
        <Heading
          h1={"FEATURED BRANDS"}
          h2={"Celebrating the brands in spolight"}
        />
        <Gap gap={60} />

        {/* POPULAR PiQs*/}
        <Grid gap={8} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {popularpiqsData.map((el) => (
            <CardComponent {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for popular piqs */}
        <Heading h1={"POPULAR PiQs"} h2={"BestSellers to choose from"} />
        <Gap gap={60} />

        {/* women wears*/}
        <Grid  gap={8} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {womensWearData.map((el) => (
            <CardComponent {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />
        <CardComponent src={theweddingedits} w={AUTO} />
        <Gap gap={60} />

        {/* heading for womens wear */}
        <Heading h1={"WOMENSWEAR BY CLiQ"} h2={"Curated looks of the season"} />

        <Gap gap={60} />
        <CardComponent src={winterstyle_banner} w={AUTO} />
        <Gap gap={150} />


         {/* Trending now*/}
         <Grid gap={8} rowGap={40} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {trendingNowData.map((el) => (
            <CardComponent {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for trending now */}
        <Heading h1={"WHAT'S TRENDING NOW"} h2={"Style tips for the contemporary women"} />
        <Gap gap={60} />
        <CardComponent src={trendingnow_banner} w={AUTO} />

        <Gap gap={100} />
        <Heading h1={"MENSWEAR BY CLiQ"} h2={"Season's hottest looks, styled for you"} />
        
        <Gap gap={60} />
        <CardComponent src={strike_choice_banner} w={AUTO} />
        <Gap gap={150} />

         {/* MeansWear by click*/}
         <Grid gap={8} rowGap={40} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {mensWearByCliqData.map((el) => (
            <CardComponent {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for trending now */}
        <Heading h1={"WHAT'S TRENDING NOW"} h2={"Style tips for the morden men"} />
        <Gap gap={60} />

        






       


      </Box>
    </Box>
  );
}
