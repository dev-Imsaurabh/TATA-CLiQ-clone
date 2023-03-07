import axios from "axios";
import { BASE_URL } from "../../constants/constants.js";
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_RESET,
} from "./adminauth.actiontypes.js";

export const ADMINLogin = (data) => async (dispatch) => {
  // console.log("data: ", data);
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const res = await axios.post(`${BASE_URL}/admin/login`, data);
    // console.log("res: ", res.data.message);
    if (res.data.token) {
      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: {
          token: res.data.token,
          message: res.data.message,
        },
      });
    } else {
      dispatch({
        type: ADMIN_LOGIN_FAILURE,
        payload: {
          message: res.data.message,
        },
      });
    }
  } catch (error) {
    console.log("error: ", error);

    dispatch({
      type: ADMIN_LOGIN_FAILURE,
      payload: {
        message: error,
      },
    });
  }
};

export const resetAdmin=()=>(dispatch)=>{
  dispatch({type:ADMIN_LOGIN_RESET})

 }
