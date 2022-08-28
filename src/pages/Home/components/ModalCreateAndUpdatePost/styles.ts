import styled from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => `
    background-color: ${theme.colors.white};
    width: 100%;
    padding-horizontal: ${theme.width(5)};
    max-height: 90%;
  `}
`;
