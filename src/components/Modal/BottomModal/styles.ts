import styled from "styled-components/native";
import NativeModal from "react-native-modal";

export const Modal = styled(NativeModal).attrs({
  avoidKeyboard: true,
  swipeDirection: undefined,
})`
  justify-content: flex-end;
  margin: 0px;
`;
