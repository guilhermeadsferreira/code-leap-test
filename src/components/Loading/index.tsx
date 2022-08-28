import React from "react";
import { LoadingProps } from "./Loading.types";
import { LoadingIndicator } from "./styles";

const Loading: React.FC<LoadingProps> = ({ size = "small" }) => {
  return <LoadingIndicator size={size} />;
};

export default Loading;
