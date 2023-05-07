
import axios from "axios";
import { USERS } from "../../constants/constants";

import {
  AUTH_RESET,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "./auth.types";



export const Signup = (obj) => async (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  try {
    let res = await axios.post(`${USERS}/register`, obj);
    console.log(res);
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
  } catch (error) {
    // console.log(error);
    dispatch({ type: SIGNUP_ERROR });
  }
};

export const Login = (obj) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    let res = await axios.post(`${USERS}/login`, obj);
    // console.log(res);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const resetAuth = () => (dispatch) => {
  dispatch({ type: AUTH_RESET });
};
