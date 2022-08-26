import React from "react";
import { Text } from "./styles";
import { TypographyProps } from "./Typography.types";

const Typography: React.FC<TypographyProps> = ({
  children,
  font = "regular",
  size = "16",
}) => {
  return (
    <Text font={font} size={size}>
      {children}
    </Text>
  );
};

export default Typography;
