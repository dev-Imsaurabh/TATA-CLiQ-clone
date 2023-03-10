// import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import * as types from "./cart.types";

export const getCartProducts = (token) => async(dispatch) => {
  try{
    dispatch({ type: types.GET_CART_LOADING });
    let cartData=await fetch(`${BASE_URL}/cart`,{
      headers:{
        "Content-Type": "application/json",
        Authorization: token,
      }
    })
    cartData=await cartData.json();
    // console.log(cartData);
        dispatch({ type: types.GET_CART_SUCCESS, payload: cartData.cartData });
    
  }catch(e){
    dispatch({ type: types.GET_CART_ERROR });
  }
};

export const deleteItemFromCart = (id,token) => async(dispatch) => {
  
  try{
    dispatch({ type: types.DELETE_CART_LOADING });
    let cartData=await fetch(`${BASE_URL}/cart/delete/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json",
        Authorization: token,
      }
    })
    await cartData.json();
    // console.log(cartData)
        dispatch({ type: types.DELETE_CART_SUCCESS});
    
  }catch(e){
    dispatch({ type: types.DELETE_CART_ERROR });
  }
};

export const editCartItem  = (id,token,qty) => async(dispatch) => {
// console.log(id,token,qty)
  try{
    dispatch({ type: types.EDIT_CART_LOADING });
    let cartData=await fetch(`${BASE_URL}/cart/update/${id}`,{
      method:"PATCH",
      body:JSON.stringify({"qty":+qty}),
      headers:{
        Authorization: token,
        "Content-Type": "application/json",
      }
    })
    // console.log(cartData)
    await cartData.json();
  //  console.log(cartData)
        dispatch({ type: types.EDIT_CART_SUCCESS});
    
  }catch(e){
    dispatch({ type: types.EDIT_CART_ERROR });
  }
};


export const addToCart = (id, token) => async(dispatch) => {
  try {
    dispatch({ type: types.ADD_CART_LOADING });
    const res = await fetch(`${BASE_URL}/cart/add/${id}`, {
      method:"POST",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();

    dispatch({ type: types.ADD_CART_SUCCESS, payload: data.cart });
}catch(e){
      dispatch({ type: types.ADD_CART_ERROR });

};
}