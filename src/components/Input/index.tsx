import { UseFormRegister, FieldError } from "react-hook-form";
import { InputContainer, StyledInput, StyledLabel, StyledSpan } from "./styles";
import { IUseFormProps } from "../Form";

export interface IInputProps {
  type: string;
  description: string | number;
  placeholder: string;
  register: UseFormRegister<IUseFormProps>;
  errors: FieldError | undefined;
  name: string | any;
  width: string;
  height: string;
}

const Input = ({
  type,
  description,
  placeholder,
  register,
  errors,
  name,
  width,
  height,
  ...rest
}: IInputProps): JSX.Element => {
  return (
    <InputContainer width={width} height={height}>
      <StyledLabel>{description}</StyledLabel>
      {errors ? <StyledSpan>{errors?.message}</StyledSpan> : null}
      <StyledInput
        type={type}
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
    </InputContainer>
  );
};
export default Input;
