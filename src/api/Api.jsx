import axios from "axios";
import { BASE_URL, PRODUCTS } from "../constants/constants";

export default class Api {
  // constructor(){
  // }

  async getProductsData(endpoint) {
    let res = await axios.get(PRODUCTS + endpoint);
    // console.log(res);
    return res.data.products;
  }

  async getSearchData() {
    let res = await axios.get(PRODUCTS);
    // console.log(res);
    return res.data.products;
  }

  async setData(data, endpoint) {
    let res = await axios(endpoint, {
      method: "post",
      data: data,
    });
    return res;
  }

  async getData(endpoint) {
    let res = await axios(BASE_URL + endpoint);
    return res;
  }

}
