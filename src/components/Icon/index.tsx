import React, { FC, useContext } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import {
  IconProps,
  MaterialIconsNameKeys,
  FeatherNameKeys,
} from "./Icon.types";
import { ThemeContext } from "styled-components/native";
import { Touchable } from "./styles";

const Icon: FC<IconProps> = ({
  font = "material",
  color = "white",
  name,
  size = 7,
  onPress,
  marginLeft = 0,
  marginRight = 0,
  disabled,
  ...rest
}) => {
  const { colors, width } = useContext(ThemeContext);

  const FontIcon = () => {
    switch (font) {
      case "material":
        return (
          <MaterialIcons
            color={colors[color]}
            size={width(size, false) as number}
            name={name as MaterialIconsNameKeys}
          />
        );
      case "feather":
        return (
          <Feather
            color={colors[color]}
            size={width(size, false) as number}
            name={name as FeatherNameKeys}
          />
        );
    }
  };

  return (
    <Touchable
      onPress={onPress}
      disabled={disabled || !onPress}
      marginLeft={marginLeft}
      marginRight={marginRight}
      {...rest}
    >
      <FontIcon />
    </Touchable>
  );
};

export default Icon;
