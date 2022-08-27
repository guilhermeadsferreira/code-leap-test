import React, { ReactNode } from "react";
import { Platform } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import * as S from "./styles";

const KeyboardShift = ({ children }: { children: ReactNode }) => {
  const headerHeight = useHeaderHeight();

  return (
    <S.WrapperKeyboardShift
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <S.Scroll>{children}</S.Scroll>
    </S.WrapperKeyboardShift>
  );
};

export default KeyboardShift;
