import axios from "axios";
import { LOGIN_USER, REGISTER_USER } from './types';

export function loginUser(dataTosubmit) {
  const request = axios
    .post("/api/users/login", dataTosubmit)
    .then(response => response.data )


    //리듀서로 보냄
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function RegisterUser(dataTosubmit) {
  const request = axios
    .post("/api/users/register", dataTosubmit)
    .then(response => response.data )


    //리듀서로 보냄
    return {
        type: REGISTER_USER,
        payload: request
    }
}

