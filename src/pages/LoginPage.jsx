import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SignupModal } from "../components/SignupModal";
import { AUTO, DEEPPINK, FILL_80PARENT, GRAY, PINK, WHITE } from "../constants/typography";
import my_pixel from "../scripts/my_pixel";
import "../styles/style.css";
import login_image from "../assets/login_image.jpg"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const {auth} = useSelector((state)=>state.authManager)
    let nav = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


      useEffect(()=>{
        if(auth){
            nav("/")
        }

      },[auth])

  return (
    <Box className="container">
      <Card margin={AUTO} w={FILL_80PARENT}>
        <CardBody>
          <VStack padding={8}>
            <Image w={300} src={login_image}></Image>
            <Text color={GRAY}>You have login first !</Text>
              <SignupModal w={200} h={my_pixel(40)}color={WHITE} br={50} bg={DEEPPINK} />
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}
