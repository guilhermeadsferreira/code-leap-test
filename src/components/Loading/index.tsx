import React, { FC, useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { LoadingProps } from "./Loading.types";
import { LoadingIndicator } from "./styles";

const Loading: FC<LoadingProps> = ({ size = "small", color = "black" }) => {
  const { colors } = useContext(ThemeContext);

  return <LoadingIndicator size={size} color={colors[color]} />;
};

export default Loading;
