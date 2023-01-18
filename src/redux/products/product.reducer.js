import { ERROR_PRODUCTS, LODING_PRODUCTS, SUCCESS_PRODUCTS } from "./product.types";

let initialData = {
    error:false,
    loading:false,
    data:[]
}

export default function productReducer(state=initialData,{type,payload}){

    switch(type){

        case LODING_PRODUCTS:{

            return {...state,loading:true}
        }

        case SUCCESS_PRODUCTS:{

            return {...state,data:[...payload],loading:false,error:false}
        }

        case ERROR_PRODUCTS:{

            return  {...state,error:true,loading:false}

        }

        default:{


            return state

        }

    }


}