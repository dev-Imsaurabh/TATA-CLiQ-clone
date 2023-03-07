import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  // ModalFooter,
  Button,
  ModalBody,
  ModalCloseButton,
  Text,
  Heading,
  Input,
  // Wrap,
  // VStack,
  Flex,
  Box,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADER_URL } from "../../constants/constants";
import {
  ABSOLUTE,
  // AUTO,
  // BLACK,
  CENTER,
  COLUMN,
  DEEPPINK,
  // FILL_10PARENT,
  // FILL_PARENT,
  GRAY,
  POINTER,
  RELATIVE,
  // TRANSPARENT,
  // WHITE,
} from "../../constants/typography";
import { Login, Signup } from "../../redux/auth/auth.actions";
// import { Loader } from "../Loader";
import { useToast } from "@chakra-ui/react";
import my_pixel from "../../scripts/my_pixel";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignupModal({ color, bg, br, w, h, cs }) {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState(0);
  let dispatch = useDispatch();
  let nav = useNavigate();
  const { loading, message, token } = useSelector(
    (state) => state.authManager
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (message === "User already exist, Please login") {
      toast({
        title: "User already exist",
        description: "Hint: Login to your account",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      // console.log(message);
      // dispatch(resetAuth());
      // return;
    }
    if (message === "User Registration Suceessful") {
      toast({
        title: "Sign up successful",
        description: "Login into your account",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    if (message==="Login Suceessful") {
      
      toast({
        title: "Login Suceessful",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      // localStorage.setItem("token", JSON.stringify(token));
      nav("/profile");
      onClose();
    }
    if (message === "User is not registered,Please register first") {
      toast({
        title: message,
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    }
    if (message === "Wrong Credentials") {
      toast({
        title: message,
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    }
  }, [message,token]);

  const resetValues = () => {
    setEmail("");
    setName("");
    setPassword("");
  };

  const handleAuth = () => {
    // console.log(option,"clicked");
    if (option === 0) {
      if (name === "" || email === "" || password === "") {
        toast({
          title: "Please enter all details",
          description: "",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      } 
        dispatch(Signup({ name, email, password }));
        resetValues();
    } else {
      //   console.log("Log in process");
      if (email === "" || password === "") {
        toast({
          title: "Please enter all details",
          description: "",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      } 
        dispatch(Login({ email, password }));
        resetValues();
    }
  };

  // console.log(token);
  return (
    <>
      <Button
        h={h}
        colorScheme={cs}
        _hover={{ bg: bg }}
        w={w}
        color={color}
        cursor={POINTER}
        bg={bg}
        borderRadius={my_pixel(br)}
        onClick={() => {
          if (token) {
            nav("/profile");
          } else {
            onOpen();
          }
        }}
      >
        {token ? (
          <HStack>
            <FaUserCircle color={DEEPPINK} />
            <Text>My Account</Text>
          </HStack>
        ) : (
          "Sign in/Sign up"
        )}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={30}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody position={RELATIVE} padding={8}>
            <Box
              display={loading ? "block" : "none"}
              top="50%"
              left="50%"
              transform={"translate(-50%,-50%)"}
              position={ABSOLUTE}
            >
              <Image w={100} src={LOADER_URL}></Image>
            </Box>
            <Flex gap={4} direction={COLUMN}>
              <Heading textAlign={CENTER}>
                Welcome to Cliq <br /> Mart
              </Heading>
              <Text
                display={!token ? "block" : "none"}
                color={GRAY}
                textAlign={CENTER}
              >
                {" "}
                Please enter your Name and Email{" "}
              </Text>
              <label style={{ display: option === 0 ? "block" : "none" }}>
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
                {!token ? "Already have an account?" : "New user?"}&nbsp;
                <span
                  onClick={() => {
                    setOption((prev) => (prev === 0 ? 1 : 0));
                  }}
                  style={{ color: DEEPPINK }}
                >
                  {option === 0 ? "Sign In" : "Sign Up"}
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

              <Button
                disabled={loading}
                colorScheme={"pink"}
                onClick={handleAuth}
              >
                {option === 0 ? "Sign Up" : "Sign In"}
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
