import styled from "styled-components/native";

export const Row = styled.View`
  flex-direction: row;
  ${({ theme }) => `
    margin-top: ${theme.height(3)};
    justify-content: flex-end;
  `}
`;
