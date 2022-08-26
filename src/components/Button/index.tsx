import React from "react";
import Typography from "../Typography";
import { ButtonProps } from "./Button.types";
import { Touchable } from "./styles";

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  alignSelf = "auto",
  marginTop = 0,
  width,
  ...rest
}) => {
  return (
    <Touchable
      disabled={disabled}
      marginTop={marginTop}
      alignSelf={alignSelf}
      width={width}
      {...rest}
    >
      <Typography color="white" font="semiBold" {...rest}>
        {children}
      </Typography>
    </Touchable>
  );
};

export default Button;
