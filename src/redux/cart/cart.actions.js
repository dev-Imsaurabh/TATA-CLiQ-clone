import { getCartData, patchCartData } from "./cart.api"
import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS, PATCH_CART_ERROR, PATCH_CART_LOADING, PATCH_CART_SUCCESS } from "./cart.types"


export const GetCart=(id)=>async(dispatch)=>{

    try {
        dispatch({type:GET_CART_LOADING})
        let payload = await getCartData(id)
        dispatch({type:GET_CART_SUCCESS,payload})
    } catch (error) {
        dispatch({type:GET_CART_ERROR})
        
    }

}


export const UdpateCart=(id,obj)=>async(dispatch)=>{

    try {
        dispatch({type:PATCH_CART_LOADING})
        let payload = await patchCartData(id,obj)
        dispatch({type:PATCH_CART_SUCCESS,payload})
        dispatch(GetCart(id))
    } catch (error) {
        dispatch({type:PATCH_CART_ERROR})
        
    }

}