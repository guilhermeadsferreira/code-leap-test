import { TextProps as NativeTextProps } from "react-native";

export type TypographyProps = {
  size?: FontSizeKeys;
  font?: FontFamilyKeys;
  color?: ColorKeys;
  marginTop?: number;
  marginBottom?: number;
  children?: React.ReactNode;
} & NativeTextProps;

export type TextProps = Required<OmitChildren<TypographyProps>>;
