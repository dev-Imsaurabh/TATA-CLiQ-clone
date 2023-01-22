import { Box, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Gap } from "../components/Gap";
import { Loader } from "../components/Loader";
import { ProductCard } from "../components/ProductCard";
import { LOADER_URL, PRODUCTS } from "../constants/constants";
import { AUTO, CENTER, FILL_80PARENT, LEFT, R1, R3, R4, R6, R8 } from "../constants/typography";
import { getProductData } from "../redux/products/product.actions";
import "../styles/style.css"

export default function SearchPage(){

    const [searchParams, setSearchParams] = useSearchParams();
    let query =searchParams.get("q").toLowerCase()
    let [data,setdata]=useState([])
    let [loading,setLoading] = useState(false)
   

    // console.log(data)
    useEffect(()=>{
        setLoading(true)
        const getData = async()=>{
            let products =[]
          try {
            let res = await axios.get(PRODUCTS)
            res.data?.forEach((el)=>{
               el.items?.forEach((item)=>{
                query.split(" ").forEach((s)=>{

                    if(item.name.toLowerCase().includes(s)||
                    item.short_desc.toLowerCase().includes(s)||item.long_desc.toLowerCase().includes(s)||item.category.toLowerCase().includes(s)){
                        products.push(item)
                        console.log(item)
                    }
                })
                    
                })

            })
          } catch (error) {
            setLoading(false)
            
          }
            setdata(products)
            setLoading(false)
        }

        getData()

    },[searchParams])

    if(loading) return <Loader gif={LOADER_URL}></Loader>

    return <Box className="container">
        <Heading margin={16} textAlign={LEFT}>Showing {data.length} search results</Heading>
        <Grid width={FILL_80PARENT} gap={4} margin={AUTO} gridTemplateColumns={{base:R1,sm:R3,lg:R6}}>

            {data?.map((el)=><ProductCard {...el} />)}

        </Grid>
        
    </Box>
}