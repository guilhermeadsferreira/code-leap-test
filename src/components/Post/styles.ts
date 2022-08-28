import styled from "styled-components/native";
import Typography from "../Typography";

export const Wrapper = styled.View`
  ${({ theme }) => `
    width: ${theme.width(91)};
    margin-bottom: ${theme.height(4)};
    align-self: center;
  `}
`;

export const Details = styled.View`
  ${({ theme }) => `
    border-color: ${theme.colors.grayMedium};
    border-width: 1px;
    min-height: ${theme.height(15)};
    padding-vertical: ${theme.width(3)};
    padding-horizontal: ${theme.width(3)};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => `
    background-color: ${theme.colors.black};
    padding-horizontal: ${theme.width(4)};
    padding-vertical: ${theme.width(3)};
  `}
`;

export const Title = styled(Typography).attrs({
  color: "white",
  font: "bold",
})`
  flex: 1;
`;

export const WrapperIcons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
