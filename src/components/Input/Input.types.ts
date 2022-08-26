import { TextInputProps } from "react-native";
import { TypographyProps } from "../Typography/Typography.types";

export type WrapperProps = {
  marginTop: number;
};

export type InputProps = {
  label?: string;
} & TypographyProps &
  Partial<WrapperProps> &
  TextInputProps;
