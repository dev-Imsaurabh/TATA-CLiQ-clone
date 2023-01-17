import { Image, VStack } from "@chakra-ui/react";
import my_pixel from "../../scripts/my_pixel";

export default function CardComponent({ src, w, h, br, bs, name, border }) {
  return (
    <VStack>
      <Image
        alt={name}
        src={src}
        w={my_pixel(w)}
        h={my_pixel(h)}
        _hover={{transform:`scale(1.1)`}}
        boxShadow={bs ? my_pixel(bs) : ""}
        transition={"transform 1s"}
        borderRadius={br ? br : ""}
        border={border ? border : ""}
        onClick={() => {
          // do something
        }}
      ></Image>
    </VStack>
  );
}
