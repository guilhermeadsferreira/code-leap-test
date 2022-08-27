declare type MainStackParams = {
  SIGN_UP: undefined;
  HOME: undefined;
};

declare type MainStackScreenProps<T extends keyof MainStackParams> =
  import("@react-navigation/native-stack").NativeStackScreenProps<
    MainStackParams,
    T
  >;
