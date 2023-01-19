import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { ABSOLUTE, AUTO, CENTER, FILL_90PARENT, FILL_PARENT, LARGE, RELATIVE, SMALL } from "../../constants/typography";
import {MdArrowBackIosNew ,MdArrowForwardIos} from "react-icons/md"
import { useEffect, useState } from "react";
import my_pixel from "../../scripts/my_pixel";

export default function ProductImageSlider({ images}) {
   const [current,setCurrent] = useState(0)
  return (
    <Flex alignItems={CENTER} w={FILL_PARENT}>
        <MdArrowBackIosNew size={my_pixel(100)}  />
      <Grid width={FILL_90PARENT} m={AUTO}>

        <Image width={FILL_PARENT} src={images[current]} ></Image>

      </Grid>
      <MdArrowForwardIos size={my_pixel(100)} />
    </Flex>
  );
}
