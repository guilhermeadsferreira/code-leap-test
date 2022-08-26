import React from "react";
import Typography from "../Typography";
import { InputProps } from "./Input.types";
import { Wrapper, TextInput } from "./styles";

const Input: React.FC<InputProps> = ({ label, marginTop = 0, ...rest }) => {
  return (
    <Wrapper marginTop={marginTop}>
      {label && (
        <Typography marginBottom={1.5} {...rest}>
          {label}
        </Typography>
      )}
      <TextInput {...rest} />
    </Wrapper>
  );
};

export default Input;
