import styled from "styled-components/native";
import { WrapperProps } from "./Input.types";

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, marginTop }) => `
    margin-top: ${theme.height(marginTop)};
  `}
`;

export const TextInput = styled.TextInput`
  ${({ theme }) => `
    border-width: 1px;
    font-size: ${theme.sizes[16]};
    font-family: ${theme.typography.regular};
    padding-left: ${theme.width(2.5)};
    padding-right: ${theme.width(0.5)};
    min-height: ${theme.sizes[40]};
    border-radius: ${theme.radius[4]};
    border-color: ${theme.colors.grayHigh};
  `}
`;
