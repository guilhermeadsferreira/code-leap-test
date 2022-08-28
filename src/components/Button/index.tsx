import React, { FC } from "react";
import Loading from "../Loading";
import Typography from "../Typography";
import { ButtonProps } from "./Button.types";
import { Touchable } from "./styles";

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  alignSelf = "auto",
  marginTop = 0,
  width,
  loading,
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
      {loading ? (
        <Loading color="white" />
      ) : (
        <Typography color="white" font="semiBold" {...rest}>
          {children}
        </Typography>
      )}
    </Touchable>
  );
};

export default Button;
