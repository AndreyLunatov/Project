import * as React from "react";

export interface IInputField {
  fieldName: string;
  fieldType: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
}
