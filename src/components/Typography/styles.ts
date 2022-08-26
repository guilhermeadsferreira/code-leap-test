import styled from "styled-components/native";
import { TextProps } from "./Typography.types";

export const Text = styled.Text<TextProps>`
  ${({ theme, font, size }) => `
    font-family: ${theme.typography[font]};
    font-size: ${theme.sizes[size]};
  `}
`;
