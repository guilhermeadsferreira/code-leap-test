import styled from "styled-components/native";

export const WrapperKeyboardShift = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
  bounces: false,
  keyboardShouldPersistTaps: "handled",
})``;
