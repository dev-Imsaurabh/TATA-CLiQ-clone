import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import { AUTO, FILL_80PARENT, GRAY} from "../constants/typography";
import my_pixel from "../scripts/my_pixel";
import "../styles/style.css";
import error404_image from "../assets/error404_image.jpg"

import { useNavigate } from "react-router-dom";

export default function Error404() {
  let nav = useNavigate()
    

  return (
    <Box className="container">
      <Card margin={AUTO} w={FILL_80PARENT}>
        <CardBody>
          <VStack padding={8}>
            <Image w={300} src={error404_image}></Image>
            <Text color={GRAY}>Seems like you trying to access page that does not exist !</Text>
            <Button borderRadius={my_pixel(50)} w={200} variant={"outline"} colorScheme={"brown"} onClick={()=>{
              nav("/")
            }}>Go to Homepage</Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}
