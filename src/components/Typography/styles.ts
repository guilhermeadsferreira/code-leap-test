import styled from "styled-components/native";
import { TextProps } from "./Typography.types";

export const Text = styled.Text<TextProps>`
  ${({ theme, font, size, color, marginTop, marginBottom }) => `
    font-family: ${theme.typography[font]};
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    margin-top: ${theme.height(marginTop)};
    margin-bottom: ${theme.height(marginBottom)};
  `}
`;
