import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import Navigation from "./src/navigations";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { useFonts } from "expo-font";
import { ReduxProvider } from "~/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-Medium": require("./assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider>
        <SafeAreaProvider>
          <StatusBar style="light" />
          <Navigation />
        </SafeAreaProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
