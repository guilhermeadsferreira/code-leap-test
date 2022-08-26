import styled from "styled-components/native";
import { TouchableProps } from "./Button.types";

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  ${({ theme, disabled, alignSelf, marginTop, width }) => `
    align-self: ${alignSelf};
    background-color: ${theme.colors.black};
    padding-vertical: ${theme.height(1)};
    margin-top: ${theme.height(marginTop)};
    opacity: ${disabled ? 0.4 : 1};
    width: ${width ? theme.width(width) : "auto"};
    align-items: center;
    justify-content: center;
  `}
`;
