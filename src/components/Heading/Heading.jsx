import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { BOLD, CENTER, COLUMN, LARGE, MEDIUM, SMALL, WHEAT } from "../../constants/typography";
import my_pixel from "../../scripts/my_pixel";

export default function Heading({h1,h2}){


    return <Flex direction={COLUMN} gap={4} justify={CENTER} alignItems={CENTER}>

        <Text w={my_pixel(350)}  fontSize={LARGE} bg={WHEAT} fontWeight={BOLD} borderRadius={my_pixel(50)} padding={`${my_pixel(16)} ${my_pixel(24)}`}>{h1}</Text>
        <Text fontWeight={BOLD} fontSize={SMALL}>{h2}</Text>


    </Flex>

}