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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AddressContext } from "../../contexts/AddressContextProvider";

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please Enter OTP to confirm your Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={()=>{
                console.log("clked")
                callback(onClose)
              }}
              colorScheme="blue"
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
