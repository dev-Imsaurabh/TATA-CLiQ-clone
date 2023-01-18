import { getDataByCategory } from "./product.api"
import { ERROR_PRODUCTS, LODING_PRODUCTS, SUCCESS_PRODUCTS } from "./product.types"

export const  getCategoryData=(category)=>async(dispatch)=>{
    try {
        dispatch({type:LODING_PRODUCTS})
    let payload = await getDataByCategory(category)
    dispatch({type:SUCCESS_PRODUCTS,payload:payload.items})
        
    } catch (error) {

        dispatch({type:ERROR_PRODUCTS})
        
    }

}