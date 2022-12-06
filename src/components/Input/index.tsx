import { ReactNode, useState } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { IUseFormProps } from "../Form/interfaces";
import { InputContainer, StyledInput, StyledLabel, StyledSpan } from "./styles";

export interface IInputProps {
  type?: string;
  description?: string | number;
  placeholder?: string;
  register: UseFormRegister<IUseFormProps>;
  errors?: FieldError | undefined;
  name: string | any;
  width: string;
  height: string;
  maskFunction?: any;
  children?: ReactNode
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
  maskFunction,
  children,
  ...rest
}: IInputProps): JSX.Element => {
  const [value, setValue] = useState<string>("");

  return (
    <InputContainer width={width} height={height}>
      <StyledLabel>{description}</StyledLabel>
      {maskFunction ? (
        <StyledInput
        type={type}
        placeholder={placeholder}
        {...register(name)}
        {...rest}
        value={value}
        onChange={(e) => setValue(maskFunction(e))}
        />
        ) : (
          <StyledInput
          type={type}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
          />
          )}
      {errors ? <StyledSpan>{errors?.message}</StyledSpan> : null}
      {children}
    </InputContainer>
  );
};
export default Input;
