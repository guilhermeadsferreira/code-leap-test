import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
`;

export const TouchableCreateNewPost = styled.TouchableOpacity`
  ${({ theme }) => `
    background-color: ${theme.colors.grayHigh};
    height: ${theme.width(12)};
    width: ${theme.width(12)};
    border-radius: ${theme.width(6)};
    position: absolute;
    bottom: ${theme.height(1)};
    right: ${theme.width(2)};
    z-index: 999;
    justify-content: center;
    align-items: center;
  `};
`;
