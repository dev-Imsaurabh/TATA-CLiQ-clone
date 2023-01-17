import { Box } from "@chakra-ui/react";
import { FILL_PARENT } from "../../constants/typography";
import my_pixel from "../../scripts/my_pixel";

export default function Gap({gap}){

    return <Box w={FILL_PARENT} h={my_pixel(gap)}>

    </Box>
}