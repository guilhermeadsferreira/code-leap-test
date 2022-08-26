import "styled-components";
import theme from "../theme";

export type AppTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}