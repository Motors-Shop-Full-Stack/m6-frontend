import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface IButtonProps {
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  backgroundC: string;
  fontC: string;
  borderC: string;
  width: string;
  maxWd?: string;
  height: string;
  maxHt?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  type,
  borderC,
  backgroundC,
  fontC,
  width,
  maxWd,
  height,
  maxHt,
  onClick,
  ...rest
}: IButtonProps): JSX.Element => {
  return (
    <StyledButton
      type={type}
      borderC={borderC}
      backgroundC={backgroundC}
      fontC={fontC}
      width={width}
      maxWd={maxWd}
      height={height}
      maxHt={maxHt}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
