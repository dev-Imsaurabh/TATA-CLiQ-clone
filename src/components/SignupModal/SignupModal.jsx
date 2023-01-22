import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  ModalCloseButton,
  Text,
  Heading,
  Input,
  Wrap,
  VStack,
  Flex,
  Box,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADER_URL } from "../../constants/constants";
import {
    ABSOLUTE,
  AUTO,
  BLACK,
  CENTER,
  COLUMN,
  DEEPPINK,
  FILL_10PARENT,
  FILL_PARENT,
  GRAY,
  POINTER,
  RELATIVE,
  TRANSPARENT,
  WHITE,
} from "../../constants/typography";
import { Login, resetAuth, Signup } from "../../redux/auth/auth.actions";
import { Loader } from "../Loader";
import { useToast } from '@chakra-ui/react'
import my_pixel from "../../scripts/my_pixel";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SignupModal({color,bg,br,w,h,cs}) {
  const toast = useToast()
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState(0);
  let dispatch = useDispatch();
  let nav = useNavigate()
  const { loading, signup, auth, no_user,error, exist, userId } = useSelector(
    (state) => state.authManager
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAuth = async () => {
    if (option == 0) {
      if(name==""||email==""||password==""){
        toast({
            title: 'Please enter all details',
            description: "",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        return

      }
      dispatch(Signup({ name, email, password, id: email ,cart:[],orders:[]}));
    } else {
    //   console.log("Log in process");
    if(email==""||password==""){
        toast({
            title: 'Please enter all details',
            description: "",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        return

      }

      dispatch(Login({ email, password }));
    }
    resetValues()
  };

  const resetValues = () => {
    setEmail("");
    setName("");
    setPassword("");
  };

  useEffect(() => {
    if (option == 0) {
      if (exist) {
        toast({
            title: 'Account already exist',
            description: "Hint: Login to your account",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        dispatch(resetAuth());
        return;
      }

      if (signup) {
        toast({
            title: 'Sign up successful',
            description: "Login into your account",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        setOption(1);
        dispatch(resetAuth());
      }
    } else {
        if(no_user){
            toast({
                title: 'no user found',
                description: "Please Sign up",
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
              setOption(()=>1);
              dispatch(resetAuth())

        }

      if (auth) {
        toast({
            title: 'Sign in successful',
            description: "",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        onClose();
      }
      setOption(()=>1);


    }
  }, [loading, signup, auth, error, exist, userId,no_user]);

  
  

  return (
    <>
      <Button h={h} colorScheme={cs} _hover={{bg:bg}} w={w} color={color} cursor={POINTER} bg={bg} borderRadius={my_pixel(br)} onClick={()=>{
        if(auth){
           nav("/profile")
        }else{
            onOpen()
        }
      }}>{auth?<HStack><FaUserCircle color={DEEPPINK} /><Text>My Account</Text></HStack>:"Sign in/Sigin up"}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={30}>
        <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody position={RELATIVE} padding={8}>
            <Box display={loading?"block":"none"} top="50%" left="50%" transform={"translate(-50%,-50%)"}  position={ABSOLUTE}><Image w={100} src={LOADER_URL}></Image></Box>
            <Flex gap={4} direction={COLUMN}>
              <Heading textAlign={CENTER}>
                Welcome to Cliq <br /> Mart
              </Heading>
              <Text display={option==0?"block":"none"} color={GRAY} textAlign={CENTER}>
                {" "}
                Please enter your Name and Email{" "}
              </Text>
              <label style={{ display: option == 0 ? "block" : "none" }}>
                Name
                <Input
                  placeholder="Please enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </label>
              <label>
                Email
                <Input
                type="email"
                  placeholder="Please enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
              </label>

              <label>

                Password
                <Input
                type="password"
                  placeholder="Minimum 8 character password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Input>
              </label>

              <Text color={GRAY} cursor={POINTER} textAlign={CENTER}>
                {" "}
                {option == 0 ? "Already have an account?" : "New user?"}&nbsp;
                <span
                  onClick={() => {
                    setOption((prev) => (prev === 0 ? 1 : 0));
                  }}
                  style={{ color: DEEPPINK }}
                >
                  {option == 0 ? "Sign In" : "Sign Up"}
                </span>
              </Text>

              <Text color={GRAY} textAlign={CENTER}>
                {" "}
                By continuing, you agree to our &nbsp;{" "}
                <span style={{ color: DEEPPINK }}>
                  Terms of Use
                </span> &nbsp;{" "}
                <span style={{ color: DEEPPINK }}>Privacy Policy</span>
              </Text>

              <Button disabled={loading} colorScheme={"pink"} onClick={handleAuth}>
                {option == 0 ? "Sign Up" : "Sign In"}
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
