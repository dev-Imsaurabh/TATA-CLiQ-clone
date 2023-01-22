import { createContext, useState } from "react";
import React from "react";

export const AddressContext = createContext();

const AddressContextProvider = ({ children }) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [landMark, setLandMark] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedValue,setSelectedValue]=useState("");

  const clearAll=()=>{
    setFirstName("")
    setLastName("")
    setCity("")
    setState("")
    setPinCode("")
    setAddress("")
    setLandMark("")
    setMobile("")
  }
  return (
    <AddressContext.Provider
      value={{
        firstName,
        lastName,
        city,
        state,
        pinCode,
        address,
        landMark,
        mobile,
        selectedValue,
        setFirstName,
        setAddress,
        setCity,
        setLandMark,
        setMobile,
        setPinCode,
        setLastName,
        setState,
        setSelectedValue,
        clearAll
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressContextProvider;
