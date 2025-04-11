import { ChangeEvent } from "react";

export interface CheckboxProps {
  name: string,
  checked: boolean,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  label?: string,
  id?: string,
  error?: string
}