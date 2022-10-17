import styled from "styled-components";
import { Theme } from "../../Theme";

type StyledButtonProps = {
  bgColor: string;
  color: string;
  size: string;
  border: string;
  borderRadius: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  border: solid 0.2rem ${Theme.colors.darkslategrayColor};
  cursor: pointer;
  width: 20.4rem;
  height: 6rem;

  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => (borderRadius ? "3rem" : "0rem")};
`;

export default StyledButton;
