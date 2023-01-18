import { Image, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../constants/constants";
import my_pixel from "../../scripts/my_pixel";

export default function CardComponent({ src, w, h, br, bs, category, border }) {
  let nav = useNavigate()
  let products="/products"

  return (
    <VStack>
      <Image
        alt={category}
        src={src}
        w={my_pixel(w)}
        h={my_pixel(h)}
        _hover={{transform:`scale(1.1)`}}
        boxShadow={bs ? my_pixel(bs) : ""}
        transition={"transform 1s"}
        borderRadius={br ? br : ""}
        border={border ? border : ""}
        onClick={() => {
          category&&nav(`${products+"/"+category}`)
        }}
      ></Image>
    </VStack>
  );
}


