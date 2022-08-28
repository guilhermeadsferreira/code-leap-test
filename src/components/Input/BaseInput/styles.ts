import styled from "styled-components/native";
import { WrapperProps, TextInputProps } from "./Input.types";

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, marginTop }) => `
    margin-top: ${theme.height(marginTop)};
  `}
`;

export const TextInput = styled.TextInput<TextInputProps>`
  ${({ theme, inputHeight }) => `
    border-width: 1px;
    font-size: ${theme.sizes[16]};
    font-family: ${theme.typography.regular};
    padding-left: ${theme.width(2.5)};
    padding-right: ${theme.width(0.5)};
    min-height: ${theme.sizes[inputHeight]};
    border-radius: ${theme.radius[4]};
    border-color: ${theme.colors.grayHigh};
  `}
`;
