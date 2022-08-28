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

export const Scroll = styled.ScrollView.attrs({
  bounces: false,
  keyboardShouldPersistTaps: "handled",
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: "5%",
    paddingBottom: "5%",
  },
})``;

export const Wrapper = styled.View``;
