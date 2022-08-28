import React, { FC } from "react";
import Typography from "../Typography";
import { Container } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AppHeader: FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container paddingTop={insets.top}>
      <Typography color="white" font="bold" size="20">
        CodeLeap Network
      </Typography>
    </Container>
  );
};

export default AppHeader;
