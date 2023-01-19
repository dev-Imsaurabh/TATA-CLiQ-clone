import { Box, Button, Flex, Grid, IconButton, Image } from "@chakra-ui/react";
import {
  ABSOLUTE,
  AUTO,
  CENTER,
  FILL_90PARENT,
  FILL_PARENT,
  GRAY,
  LARGE,
  POINTER,
  R3,
  RELATIVE,
  SMALL,
  SOLID,
  TRANSPARENT,
} from "../../constants/typography";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import my_pixel from "../../scripts/my_pixel";
import my_border from "../../scripts/my_border";
import { Gap } from "../Gap";
import "../../styles/style.css";

export default function ProductImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  return (
    <Box w={FILL_PARENT} mt={120}>
      <Flex alignItems={CENTER} w={FILL_PARENT}>
        <IconButton
        
          bg={TRANSPARENT}
          _hover={{ bg: TRANSPARENT }}
          _active={{ bg: TRANSPARENT }}
          leftIcon={
            <MdArrowBackIosNew
              color={GRAY}
              size={my_pixel(50)}
            />
          }
          disabled={current == 0}
          onClick={() => {
            setCurrent((prev) => {
              return prev - 1;
            });
          }}
        ></IconButton>
        <Grid  m={AUTO}>
          <Image width={FILL_PARENT} src={images[current]}></Image>
        </Grid>
        <IconButton
          bg={TRANSPARENT}
              _hover={{ bg: TRANSPARENT }}
              _active={{ bg: TRANSPARENT }}
          leftIcon={
            <MdArrowForwardIos
              color={GRAY}
              size={my_pixel(50)}
            />
          }
          disabled={current == images.length - 1}
          onClick={() => {
            setCurrent((prev) => {
              return prev + 1;
            });
          }}
        ></IconButton>
      </Flex>
      <Gap gap={16} />
      <Flex justify={CENTER} gap={4}>
        {images.map((el,index)=>(<Image
                cursor={POINTER}
                onClick={() => {
                    setCurrent(index)

                    
                }}
                opacity={current==index?1:0.5}


                w={my_pixel(60)}
                border={my_border(1, SOLID, GRAY)}
                src={el}
              ></Image>))}
      </Flex>
    </Box>
  );
}
