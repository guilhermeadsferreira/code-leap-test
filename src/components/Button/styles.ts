import styled from "styled-components/native";
import { TouchableProps } from "./Button.types";

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  ${({
    theme,
    disabled,
    alignSelf,
    marginTop,
    marginLeft,
    width,
    isTransparent,
  }) => `
    align-self: ${alignSelf};
    background-color: ${isTransparent ? "transparent" : theme.colors.black};
    padding-vertical: ${theme.height(1)};
    margin-top: ${theme.height(marginTop)};
    margin-left: ${theme.height(marginLeft)};
    opacity: ${disabled ? 0.4 : 1};
    width: ${width ? theme.width(width) : "auto"};
    align-items: center;
    justify-content: center;
    border-width: ${isTransparent ? 1 : 0}px;
    border-color: ${isTransparent ? theme.colors.black : "transparent"};
  `}
`;
