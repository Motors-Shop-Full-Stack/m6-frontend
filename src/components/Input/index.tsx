import { useState } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { IUseFormProps } from "../Form/interfaces";
import { InputContainer, StyledInput, StyledLabel, StyledSpan } from "./styles";

export interface IInputProps {
  type: string;
  description: string | number;
  placeholder: string;
  register: UseFormRegister<IUseFormProps>;
  errors: FieldError | undefined;
  name: string | any;
  width: string;
  height: string;
  maskFunction?: any;
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
  ...rest
}: IInputProps): JSX.Element => {
  const [value, setValue] = useState<string>();

  return (
    <InputContainer width={width} height={height}>
      <StyledLabel>{description}</StyledLabel>
      {errors ? <StyledSpan>{errors?.message}</StyledSpan> : null}
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
    </InputContainer>
  );
};
export default Input;
