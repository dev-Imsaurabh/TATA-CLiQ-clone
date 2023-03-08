import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOADER_URL } from "../../constants/constants";
import {
  ABSOLUTE,
  CENTER,
  COLUMN,
  DEEPPINK,
  GRAY,
  POINTER,
  RELATIVE,
} from "../../constants/typography";
import { ADMINLogin, resetAdmin } from "../../redux/adminauth/adminauth.action";

const AdminModal = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  let nav = useNavigate();

  const { data, adminLogin } = useSelector((state) => state.adminauthManager);
  useEffect(() => {
    if (adminLogin.message === "Login Suceessful" && data.isAuthenticated) {
      toast({
        title: "Login Suceessful",
        position: 'top',
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      localStorage.setItem("admintoken", JSON.stringify(data.admintoken));
      nav("/admin");
      onClose();
    } else if (adminLogin.message === "Wrong Credentials") {
      toast({
        title: adminLogin.message,
        position: 'top',
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    }else if (adminLogin.message === "Admin is not registered") {
      toast({
        title: adminLogin.message,
        description: "Please Check Your Credentials",
        position: 'top',
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    }
    // setOption(() => 1);
  }, [adminLogin.message, data.admintoken]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAuth = async () => {
    //   console.log("Log in process");
    if (email === "" || password === "") {
      toast({
        title: "Please enter all details",
        position: 'top',
        description: "",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    dispatch(ADMINLogin({ email, password }));

    resetValues();
  };

  const resetValues = () => {
    setEmail("");
    setPassword("");
  };
  // console.log(adminLogin.message);

  return (
    <>
      {!data.admintoken ? (
        <Button
          cursor={POINTER}
          bg="#212121"
          color={"white"}
          
          onClick={() => {
            onOpen();
          }}
        >
          Admin Sign in
        </Button>
      ) : (
        <Button
          cursor={POINTER}
          bg="#212121"
       
          color={"white"}
          onClick={() => {
            dispatch(resetAdmin());
            setTimeout(() => {
              nav("/");
            }, 1000);
            toast({
              title: "Admin Logout Successful",
              position: 'top',
              description: "Redirecting to Homepage",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          }}
        >
          Admin Sign Out
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={30}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody position={RELATIVE} padding={8}>
            <Box
              display={adminLogin.loading ? "block" : "none"}
              top="50%"
              left="50%"
              transform={"translate(-50%,-50%)"}
              position={ABSOLUTE}
            >
              <Image w={100} src={LOADER_URL} />
            </Box>
            <Flex gap={4} direction={COLUMN}>
              <Heading textAlign={CENTER}>
                Welcome to Cliq <br /> Mart
              </Heading>
              <Text
                display={!data.admintoken ? "block" : "none"}
                color={GRAY}
                textAlign={CENTER}
              >
                {" "}
                Please enter your Email and Password{" "}
              </Text>

              <label>
                Email
                <Input
                  type="email"
                  placeholder="Please enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>
                Password
                <Input
                  type="password"
                  placeholder="Minimum 8 character password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <Text color={GRAY} textAlign={CENTER}>
                {" "}
                By continuing, you agree to our &nbsp;{" "}
                <span style={{ color: DEEPPINK }}>
                  Terms of Use
                </span> &nbsp;{" "}
                <span style={{ color: DEEPPINK }}>Privacy Policy</span>
              </Text>

              <Button
                disabled={adminLogin.loading}
                colorScheme={"pink"}
                onClick={handleAuth}
              >
                Admin Sign In
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminModal;
