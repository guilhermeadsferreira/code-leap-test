import styled from "styled-components/native";
import NativeModal from "react-native-modal";

export const Modal = styled(NativeModal).attrs({
  avoidKeyboard: true,
  swipeDirection: undefined,
})`
  justify-content: flex-end;
  margin: 0px;
`;

export const Container = styled.View`
  ${({ theme }) => `
    background-color: ${theme.colors.white};
    width: 100%;
    padding-horizontal: ${theme.width(5)};
    max-height: 90%;
  `}
`;
