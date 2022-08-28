import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const middlewareRejectedActions: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      Alert.alert("There was an unexpected error, please try again later");
    }
    return next(action);
  };
