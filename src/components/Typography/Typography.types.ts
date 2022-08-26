export type TypographyProps = {
  size?: FontSizeKeys;
  font?: FontFamilyKeys;
  color?: ColorKeys;
  marginTop?: number;
  marginBottom?: number;
  children?: React.ReactNode;
};

export type TextProps = Required<Omit<TypographyProps, "children">>;
