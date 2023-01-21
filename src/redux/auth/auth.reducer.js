import { AUTH_RESET, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth.types"

let initialData = {
    auth:false,
    signup:false,
    userId:null,
    loading:false,
    exist:false,
    error:false,
    no_user:false

}

export  const authReducer =(state=initialData,{type,payload})=>{

    switch(type){
        case SIGNUP_LOADING:{
            return {...state,loading:true}
        }
        case SIGNUP_SUCCESS:{
            return {...state , signup:payload.status,exist:payload.exist,loading:false,error:false}
        }
        case SIGNUP_ERROR:{
            return {...state,loading:false,error:true}
        }
        case LOGIN_LOADING:{
            return {...state,loading:true}
        }
        case LOGIN_SUCCESS:{
            return {...state ,userId:payload.userId,no_user:payload.no_user, auth:payload.status,loading:false,error:false}
        }
        case LOGIN_ERROR:{
            return {...state,loading:false,error:true}
        }
        case AUTH_RESET:{
            return initialData
        }


        default:{
            return state
        }
    }

}