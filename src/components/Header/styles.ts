import styled from "styled-components/native";
import { ContainerProps } from "./Header.types";

const getHeaderPaddingTop = (paddingTop: number) => {
  if (paddingTop < 30) {
    return paddingTop * 1.8;
  }

  return paddingTop * 1.5;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, paddingTop }) => `
    background-color: ${theme.colors.black};
    width: 100%;
    padding-top: ${getHeaderPaddingTop(paddingTop)}px;
    padding-bottom: ${theme.height(3.5)};
    padding-horizontal: ${theme.width(5)};
  `}
`;
