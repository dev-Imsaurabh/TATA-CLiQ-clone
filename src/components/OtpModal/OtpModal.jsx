import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  PinInput,
  useDisclosure,
  Box,
  HStack,
  PinInputField,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AddressContext } from "../../contexts/AddressContextProvider";
import enter_otp_image from "../../assets/enter_otp_image.png"
import { BOLD, LARGE, MEDIUM, XLARGE } from "../../constants/typography";
import { RUPEES_SYMBOL } from "../../constants/constants";

export default function OtpModal({callback,total}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { firstName, lastName } = useContext(AddressContext);


  return (
    <Box>
      <Button
        colorScheme="red"
        _hover={{
          background: "darkgreen",
          color: "black",
        }}
        onClick={onOpen}
      >
        Save & Continue
      </Button>
      <Modal size={MEDIUM} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please Enter OTP to confirm your Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <VStack>

              <Image src={enter_otp_image}></Image>
              <Text fontWeight={BOLD}>To Pay: {RUPEES_SYMBOL+total}</Text>
              
            <HStack>
              <PinInput otp defaultValue="123456">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            </VStack>
            
          </ModalBody>

          <ModalFooter>
            <Button
            
              onClick={()=>{
                console.log("clked")
                callback(onClose)
              }}
              colorScheme="pink"
              mr={3}
            >
              Pay
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
