import {LOGIN_API} from "../utils";

interface IUserLoginResponse {
  login: string;
  password: string;
}

export const loginApi = async ({login, password}: IUserLoginResponse) => {
  await fetch(LOGIN_API, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({login, password}),
  })
}
