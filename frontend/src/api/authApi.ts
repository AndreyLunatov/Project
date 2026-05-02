import {LOGIN_API, REGISTER_API} from "../utils";

interface IUserLoginResponse {
  login: string;
  password: string;
}

export const loginApi = async ({login, password}: IUserLoginResponse) => {
  const response = await fetch(LOGIN_API, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({login, password}),
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
