import { login_user, signup_user } from "./auth.api"
import { AUTH_RESET, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth.types"


export const Signup=(obj)=>async(dispatch)=>{

 try {
    dispatch({type:SIGNUP_LOADING})
    let res = await signup_user(obj)
    dispatch({type:SIGNUP_SUCCESS,payload:res})
 } catch (error) {
    dispatch({type:SIGNUP_ERROR})
    
 }
}


export const Login=(obj)=>async(dispatch)=>{

    try {
       dispatch({type:LOGIN_LOADING})
       let res = await login_user(obj)
       dispatch({type:LOGIN_SUCCESS,payload:res})
    } catch (error) {
       dispatch({type:LOGIN_ERROR})
       
    }

   }

   export const resetAuth=()=>(dispatch)=>{
    dispatch({type:AUTH_RESET})

   }