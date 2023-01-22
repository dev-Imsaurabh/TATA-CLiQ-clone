import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Image } from "@chakra-ui/react";
import styles from "./Carousel.module.css";
const settings = {
  //   useKeyboardArrows: true,
  showThumbs:false,
  fade: true,
  infiniteLoop: true,
  autoPlay: true,
};
const Carousels = () => {
  return (
    <Box position={"relative"} zIndex={0}>
      <Carousel {...settings} style={{ styles }}>
        <Box>
          <Image
            src="https://assets.tatacliq.com/medias/sys_master/images/45625097617438.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Image
            src="https://assets.tatacliq.com/medias/sys_master/images/45625097289758.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Image
            src="https://assets.tatacliq.com/medias/sys_master/images/45625097420830.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Image
            src="https://assets.tatacliq.com/medias/sys_master/images/45625097486366.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Image
            src="https://assets.tatacliq.com/medias/sys_master/images/45625097551902.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Image
            src="https://assets.tatacliq.com/medias/sys_master/images/45625097355294.jpg"
            alt=""
          />
        </Box>
      </Carousel>
    </Box>
  );
};

export default Carousels;
