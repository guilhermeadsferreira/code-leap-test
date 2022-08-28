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
  marginLeft = 0,
  width,
  loading,
  isTransparent,
  ...rest
}) => {
  const contentColor = isTransparent ? "black" : "white";

  return (
    <Touchable
      disabled={disabled}
      marginTop={marginTop}
      marginLeft={marginLeft}
      alignSelf={alignSelf}
      width={width}
      isTransparent={isTransparent}
      {...rest}
    >
      {loading ? (
        <Loading color={contentColor} />
      ) : (
        <Typography color={contentColor} font="semiBold">
          {children}
        </Typography>
      )}
    </Touchable>
  );
};

export default Button;
