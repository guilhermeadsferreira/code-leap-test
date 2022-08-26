import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../pages/Signup";

const Stack = createNativeStackNavigator();

const MainStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="SIGN_UP" component={Signup} />
    </Stack.Navigator>
  );
};

export default MainStack;
