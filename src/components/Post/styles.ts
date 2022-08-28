import styled from "styled-components/native";
import Typography from "../Typography";

export const Container = styled.View`
  ${({ theme }) => `
    width: ${theme.width(91)};
    min-height: ${theme.height(25)};
    margin-bottom: ${theme.height(4)};
    border-width: 1px;
    align-self: center;
    border-color: ${theme.colors.grayMedium};
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
