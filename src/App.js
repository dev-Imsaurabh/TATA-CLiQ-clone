// import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./routes/AllRoutes";
import { Navbar } from "./components/Navbar";
import { THIS_IS_SIMPLE_CONSTANTS } from "./constants/constants";
import Footer from "./components/Footer/Footer";
// import Carousel from "./components/Carousel/Carousel";

function App() {
  //cheking for .env file working or not
  console.log(process.env.REACT_APP_ENV_CHECK); //this will log simple text in console ".env is working fine"

  //this is example of how we use constants to store strings and repeating data (you can more explore in constants>constants.js folder)
  console.log(THIS_IS_SIMPLE_CONSTANTS)  //this will log simple text in console "this is simple constant"


  return (
    <Box className="App">
      <Navbar />
      {/* <Carousel/> */}
      <AllRoutes />
      <Footer/>
    </Box>
  );
}

export default App;
