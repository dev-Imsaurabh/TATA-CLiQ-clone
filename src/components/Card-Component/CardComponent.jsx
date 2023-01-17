import { Image, VStack } from "@chakra-ui/react";
import my_pixel from "../../scripts/my_pixel";



export default function CardComponent({src,w,h,br,bs,name}){

    return <VStack>
        <Image src={src} w={my_pixel(w)} h={my_pixel(h)} boxShadow={bs?bs:""} borderRadius={br?br:""}  ></Image>

    </VStack>
}

    