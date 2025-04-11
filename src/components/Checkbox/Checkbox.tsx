import {
  CheckboxComponent,
  CheckboxContainer,
  CheckboxElement,
  CheckboxLabel,
  ErrorMessage
} from "./styles";
import { CheckboxProps } from "./types";

function Checkbox({
  name,
  id,
  checked,
  onChange,
  label,
  error
}: CheckboxProps) {
  return (
    <CheckboxComponent>
      <CheckboxContainer>
        <CheckboxElement
          name={name}
          type='checkbox'
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <CheckboxLabel htmlFor={id}>
          {label}
        </CheckboxLabel>
      </CheckboxContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </CheckboxComponent>
  )
}

export default Checkbox;