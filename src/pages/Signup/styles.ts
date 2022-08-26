import styled from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors } }) => `
    flex: 1;
    background-color: ${colors.grayLight};
    justify-content: center;
    align-items: center;
  `}
`;
