import {useState} from "react";
import {BASEAPI, REGISTER_API} from "../utils";

interface IUserLoginResponse {
  login: string;
  password: string;
}

export const authApi = async ({login, password}: IUserLoginResponse) => {
  await fetch(REGISTER_API, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({login, password}),
  })
}
