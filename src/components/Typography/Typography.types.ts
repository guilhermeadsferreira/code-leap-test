export type TypographyProps = {
  size?: FontSizeKeys;
  font?: FontFamilyKeys;
  children?: React.ReactNode;
};

export type TextProps = Required<Omit<TypographyProps, "children">>;
