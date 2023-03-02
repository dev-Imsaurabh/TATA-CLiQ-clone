import axios from "axios";
import { BASE_URL, PRODUCTS } from "../constants/constants";



export default class Api{

    // constructor(){
    // }
    
   async getProductsData(endpoint){

            let res = await axios.get(PRODUCTS+endpoint);
            return res.data.items
          
          }

          async getSearchData(){

            let res = await axios.get(PRODUCTS);
            return res.data
          
          }

    async setData(data,endpoint){
      let res = await axios(endpoint,{
        method: 'post',
        data:data
      })
      return res

    }

    async getData(endpoint){
      let res = await axios(BASE_URL+endpoint)
      return res
    }
    async patchData(data,endpoint){
      let res = await axios(BASE_URL+endpoint,{
        method: 'put',
        data:data
      })
      return res

    }

    async patchData1(data,endpoint){
      let res = await axios(BASE_URL+endpoint,{
        method: 'patch',
        data:data
      })
      return res

    }

}