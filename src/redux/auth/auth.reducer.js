import {
  AUTH_RESET,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "./auth.types";

let initialData = {
  message: "",
  token: JSON.parse(localStorage.getItem("token")) || null,
  loading: false,
  auth: false,
};

export const authReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case SIGNUP_LOADING: {
      return { ...state, loading: true };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, message: payload.message, loading: false };
    }
    case SIGNUP_ERROR: {
      return { ...state, loading: false, message: payload.message };
    }
    case LOGIN_LOADING: {
      return { ...state, loading: true };
    }
    case LOGIN_SUCCESS: {
      if (payload.token !== undefined) {
        localStorage.setItem("token", JSON.stringify(payload.token));
      }
      return {
        ...state,
        token: payload.token,
        loading: false,
        message: payload.message,
        auth: true,
      };
    }
    case LOGIN_ERROR: {
      return { ...state, loading: false, message: payload.message };
    }
    case AUTH_RESET: {
      return initialData;
    }

    default: {
      return state;
    }
  }
};
