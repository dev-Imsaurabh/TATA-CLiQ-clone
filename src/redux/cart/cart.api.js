import axios from "axios";
import { USERS } from "../../constants/constants";

export async function getCartData(id) {
  try {
    let res = await axios.get(USERS + "/" + id);
    let cartData = res.data.cart;
    return cartData
  } catch (error) {
    return []
  }
}



export async function patchCartData(id, obj) {
    try {
        let res = await axios.patch(USERS + "/" + id, obj);
        return true;
        
    } catch (error) {
        return false
    }
 
}
