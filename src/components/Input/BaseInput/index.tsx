import React, { FC } from "react";
import Typography from "../../Typography";
import { InputProps } from "./Input.types";
import { Wrapper, TextInput } from "./styles";

const Input: FC<InputProps> = ({
  label,
  marginTop = 0,
  inputHeight = "40",
  messageError,
  ...rest
}) => {
  return (
    <Wrapper marginTop={marginTop}>
      {label && (
        <Typography marginBottom={1.5} {...rest}>
          {label}
        </Typography>
      )}
      <TextInput inputHeight={inputHeight} {...rest} />
      {!!messageError && (
        <Typography marginTop={1} size="14" font="medium" color="feedbackError">
          {messageError}
        </Typography>
      )}
    </Wrapper>
  );
};

export default Input;
