import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signup, Home } from "~/pages";

const Stack = createNativeStackNavigator<MainStackParams>();

const MainStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="SIGN_UP" component={Signup} />
      <Stack.Screen name="HOME" component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
