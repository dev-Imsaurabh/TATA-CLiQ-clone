import { Image } from "@chakra-ui/react"

export default function Icon({image,size}){

    return <Image src={image} w={size+"px"} h={size+"px"} />


}