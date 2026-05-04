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


export interface LoginFormProps {
  login: string;
  password: string;
  errors: TFormErrors;
  isSubmitting: boolean;
  onLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SubmitEvent) => void;
  onSwitchToRegister: () => void;
}

export interface RegisterFormProps {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  errors: TFormErrors;
  isSubmitting: boolean;
  onFirstNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SubmitEvent) => void;
  onSwitchToLogin: () => void;
}

export interface IUseAuthFormParams {
  submitLogin: (email: string, password: string) => Promise<boolean>;
  submitRegistration: (firstName: string, lastName: string, email: string, password: string) => Promise<boolean>;
}

export interface IUserRegisterResponse {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type TFormErrors = { firstName?: string, lastName?: string, login?: string; password?: string, general?: string };

