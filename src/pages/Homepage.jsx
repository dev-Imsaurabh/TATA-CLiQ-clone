import { Box, Grid, Heading } from "@chakra-ui/react";
import CardComponent from "../components/Card-Component/CardComponent";
import { circularCategoryData } from "../constants/staticData";
import { R11, R3, R6 } from "../constants/typography";

export default function Homepage() {
  
  return (
    <Box className="container">

     <Grid gridTemplateColumns={{base:R3 ,sm:R6,lg:R11}}>
      {circularCategoryData.map((el)=><CardComponent {...el} />)}
     </Grid>
      
      
    </Box>
  );
}
