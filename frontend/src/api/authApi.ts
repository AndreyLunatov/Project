import {LOGIN_API, REGISTER_API, VERIFY_TOKEN_API} from "../utils";

interface IUserLoginResponse {
  login: string;
  password: string;
}

export const loginApi = async ({login, password}: IUserLoginResponse) => {
  const response = await fetch(LOGIN_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: login, password: password}),
  })
  return response.json();
}

interface IUserRegisterResponse {
  login: string;
  email: string;
  password: string;
}

export const registerApi = async ({login, email, password}: IUserRegisterResponse) => {
  const response = await fetch(REGISTER_API, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({login, email, password}),
  })
  return response.json();
}

export const verifyToken = async (token: string) => {
  const response = await fetch(VERIFY_TOKEN_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({token}),
  })
  return response.json();
}
