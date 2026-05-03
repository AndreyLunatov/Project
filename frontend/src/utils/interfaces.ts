import * as React from "react";

export interface IInputField {
  fieldName: string;
  fieldType: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  error?: string;
}

export type TAuthStatus = "loading" | "authenticated" | "unauthenticated";

export interface ILogin {
  submitLogin(login: string, password: string): Promise<boolean>; // теперь async
}

export type TFormErrors = { firstName?: string, lastName?: string, login?: string; password?: string }

