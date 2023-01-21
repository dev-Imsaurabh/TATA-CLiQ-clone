import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS, PATCH_CART_ERROR, PATCH_CART_LOADING, PATCH_CART_SUCCESS } from "./cart.types"

let initalData = {
    loading:false,
    error:false,
    data:[]
}

export const cartReducer = (state=initalData,{type,payload})=>{

    switch(type){

        case GET_CART_LOADING:{

            return {...state,loading:true}

        }

        case GET_CART_SUCCESS:{
            
            return {...state,data:payload,loading:false,error:false}
        }

        case GET_CART_ERROR:{

            return {...state,error:true,loading:false}
        }

        case PATCH_CART_LOADING:{

            return {...state,loading:true}

        }

        case PATCH_CART_SUCCESS:{
            
            return {...state,loading:false,error:false}
        }

        case PATCH_CART_ERROR:{

            return {...state,error:true,loading:false}
        }

        default:{
            return state
        }
    }

}