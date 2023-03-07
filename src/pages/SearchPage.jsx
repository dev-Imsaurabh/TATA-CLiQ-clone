import { Box, Grid, Heading, Text } from "@chakra-ui/react";
// import axios from "axios";
// import { useRef, useState } from "react";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
// import { Gap } from "../components/Gap";
import { Loader } from "../components/Loader";
import { ProductCard } from "../components/ProductCard";
import { LOADER_URL, PRODUCTS } from "../constants/constants";
import {
  AUTO,
//   CENTER,
  FILL_80PARENT,
  LEFT,
  R1,
  R3,
//   R4,
  R6,
//   R8,
} from "../constants/typography";
// import { getProductData } from "../redux/products/product.actions";
import "../styles/style.css";
import Error404 from "./Error404";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("q") ? searchParams.get("q").toLowerCase() : "";
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(false);

  // console.log(PRODUCTS,query)
  useEffect(() => {
    if (query === "") {
      return;
    }
    setLoading(true);
    const getData = async () => {
      await fetch(`${PRODUCTS}?q=${query}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setdata(res))
        .catch((e) => console.log(e));
    };
    getData();
  }, [searchParams]);

  if (loading) <Loader gif={LOADER_URL}></Loader>;
  return (
    <Box className="container">
      <Heading margin={16} textAlign={LEFT}>
        Showing {data.length} search results
      </Heading>
      {data.length>0?<Grid
        width={FILL_80PARENT}
        gap={4}
        margin={AUTO}
        gridTemplateColumns={{ base: R1, sm: R3, lg: R6 }}
      >
        {data?.map((el) => (
          <ProductCard key={el._id} {...el} />
        ))}
      </Grid>:<Text>Product Not Found,Please search again</Text>}
    </Box>
  );
}
