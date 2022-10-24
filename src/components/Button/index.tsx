import { ReactNode } from "react";
import { StyledButton } from "./style";

interface IButtonProps {
  children?: ReactNode;
  backgroundC: string;
  fontC: string;
  borderC: string;
  width: string;
  maxWd?: string;
  height: string;
  maxHt?: string;
}

const Button = ({
  children,
  borderC,
  backgroundC,
  fontC,
  width,
  maxWd,
  height,
  maxHt,
  ...rest
}: IButtonProps): JSX.Element => {
  return (
    <StyledButton
      borderC={borderC}
      backgroundC={backgroundC}
      fontC={fontC}
      width={width}
      maxWd={maxWd}
      height={height}
      maxHt={maxHt}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
