import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./main";

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
