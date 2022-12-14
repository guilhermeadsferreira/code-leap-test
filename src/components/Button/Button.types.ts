import { TouchableOpacityProps } from "react-native";
import { TypographyProps } from "../Typography/Typography.types";

export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  alignSelf?: "auto" | "flex-start" | "flex-end";
  marginTop?: number;
  marginLeft?: number;
  width?: number;
  loading?: boolean;
  isTransparent?: boolean;
} & TouchableOpacityProps &
  TypographyProps;

export type TouchableProps = OmitChildren<ButtonProps> &
  Required<Pick<ButtonProps, "marginTop" | "marginLeft">>;
