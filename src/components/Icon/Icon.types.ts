import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacityProps } from "react-native";

export type MaterialIconsNameKeys = keyof typeof MaterialIcons.glyphMap;

export type FeatherNameKeys = keyof typeof Feather.glyphMap;

export type FontType = "material" | "feather";

export type TouchableProps = {
  marginLeft: number;
  marginRight: number;
};

export type IconProps = {
  font?: FontType;
  color?: ColorKeys;
  size?: number;
  onPress?: () => void;
  name: MaterialIconsNameKeys | FeatherNameKeys;
} & TouchableOpacityProps &
  Partial<TouchableProps>;
