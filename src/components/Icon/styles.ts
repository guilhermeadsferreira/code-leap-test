import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { TouchableProps } from "./Icon.types";

export const Touchable = styled(TouchableOpacity)<TouchableProps>`
  ${({ theme, marginLeft, marginRight }) => `
    margin-left: ${theme.width(marginLeft)};
    margin-right: ${theme.width(marginRight)};
  `}
`;
