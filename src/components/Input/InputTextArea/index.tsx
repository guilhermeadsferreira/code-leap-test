import React, { FC } from "react";
import Input from "../BaseInput";
import { InputProps } from "../BaseInput/Input.types";

const InputTextArea: FC<InputProps> = ({ ...rest }) => {
  return <Input multiline={true} inputHeight="88" {...rest} />;
};

export default InputTextArea;
