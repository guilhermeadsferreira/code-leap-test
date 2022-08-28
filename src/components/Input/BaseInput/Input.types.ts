import { TextInputProps as NativeTextInputProps } from "react-native";
import { TypographyProps } from "../../Typography/Typography.types";

export type WrapperProps = {
  marginTop: number;
};

export type TextInputProps = {
  inputHeight: FontSizeKeys;
};

export type InputProps = {
  label?: string;
  messageError?: string;
} & TypographyProps &
  Partial<WrapperProps> &
  Partial<TextInputProps> &
  NativeTextInputProps;
