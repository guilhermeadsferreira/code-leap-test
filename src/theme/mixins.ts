import { Dimensions, PixelRatio } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export const width = (value: number, withPx = true): number | string => {
  const parseValue = String(value);
  const widthPercent = parseFloat(parseValue) / 100;
  const getRoundToNearestPixel = PixelRatio.roundToNearestPixel(
    screenWidth * widthPercent
  );
  return withPx ? `${getRoundToNearestPixel}px` : getRoundToNearestPixel;
};

export const height = (value: number, withPx = true): number | string => {
  const parseValue = String(value);
  const heightPercent = screenHeight * parseFloat(parseValue);
  const getRoundToNearestPixel = PixelRatio.roundToNearestPixel(
    heightPercent / 100
  );
  return withPx ? `${getRoundToNearestPixel}px` : getRoundToNearestPixel;
};

export const getResponsivePx = (size: number, withPx = true) => {
  let fontSize = RFValue(size, screenHeight);

  return withPx ? `${fontSize}px` : fontSize;
};
