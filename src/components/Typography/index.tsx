import React from "react";
import { Text } from "./styles";
import { TypographyProps } from "./Typography.types";

const Typography: React.FC<TypographyProps> = ({
  children,
  font = "regular",
  size = "16",
  color = "black",
  marginTop = 0,
  marginBottom = 0,
  ...rest
}) => {
  return (
    <Text
      font={font}
      size={size}
      color={color}
      marginTop={marginTop}
      marginBottom={marginBottom}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
