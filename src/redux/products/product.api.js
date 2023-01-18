import axios from "axios";
import { PRODUCTS } from "../../constants/constants";

export async function getDataByCategory(category){

    let res = await axios.get(PRODUCTS+"/"+category)
    let data = res.data

    return data


}