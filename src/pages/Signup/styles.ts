import styled from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors } }) => `
    flex: 1;
    background-color: ${colors.grayLight};
    justify-content: center;
    align-items: center;
  `}
`;

export const Box = styled.View`
  ${({ theme }) => `
    width: ${theme.width(90)};
    padding-vertical: ${theme.height(2.5)};
    padding-horizontal: ${theme.width(4)};
    background-color: ${theme.colors.white};
  `}
`;
