import axios from "axios";
import { USERS } from "../../constants/constants";

export async function signup_user(obj) {

  try {
    let res = await axios.post(`${USERS}/register`, obj);
    // console.log(USERS);
    return res;
  } catch (error) {
    let res = await axios.post(`${USERS}/register`, obj);
    return res;
  }

}

export async function login_user({ email, password }) {
  try {
    let res = await axios.post(`${USERS}/login`, {
        email, password
    });
    // console.log(USERS);
    return res;
  } catch (error) {
    let res = await axios.post(`${USERS}/login`, {
        email, password
    });
    return res;
  }
}
