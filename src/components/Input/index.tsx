import { UseFormRegister, FieldValues } from "react-hook-form";
import { InputContainer, StyledInput, StyledLabel } from "./styles";

export interface IInputProps {
  type: string;
  description: string | number;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  width: string;
  height: string;
}

const Input = ({
  type,
  description,
  placeholder,
  register,
  name,
  width,
  height,
}: IInputProps): JSX.Element => {
  return (
    <InputContainer width={width} height={height}>
      <StyledLabel>{description}</StyledLabel>
      <StyledInput type={type} placeholder={placeholder} {...register(name)} />
    </InputContainer>
  );
};
export default Input;
