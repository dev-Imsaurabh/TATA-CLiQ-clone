import { Box, Flex, Grid, Heading, HStack } from "@chakra-ui/react";
import CardComponent from "../components/Card-Component/CardComponent";
import { Gap } from "../components/Gap";
import { bankImageData, circularCategoryData } from "../constants/staticData";
import {
  AUTO,
  CENTER,
  COLUMN,
  FILL_70PARENT,
  FILL_PARENT,
  R11,
  R3,
  R6,
  ROW,
  SB,
} from "../constants/typography";
import my_pixel from "../scripts/my_pixel";

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
      <Box width={FILL_70PARENT} margin={AUTO}>
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
      </Box>
    </Box>
  );
}
