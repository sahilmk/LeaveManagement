import React from "react";
import StyledButton from "./Button.styled";
import '../../Icons/css/material-design-iconic-font.css';
import { Theme } from '../../Theme'

type ButtonProps = {
  label: string;
  onClick: React.MouseEventHandler;
  bgColor: string;
  color: string;
  size: string;
  border: string;
  borderRadius: boolean;
  logo?: boolean;
  type: "submit" | "button" | "reset";
};

const Button = ({
  label,
  onClick,
  bgColor,
  color,
  size,
  border,
  borderRadius,
  logo,
  type
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      size={size}
      border={border}
      borderRadius={borderRadius}
      type={type}
    >
      {logo && <i className="zmdi zmdi-power" />}
      {label}
    </StyledButton>
  );
};

Button.defaultProps = {
  value: "",
  onClick: (e: React.MouseEvent) => {

  },
  bgColor: Theme.colors.darkslategrayColor,
  color: Theme.colors.weldonBlueColor,
  size: "26px",
  border: "",
  borderRadius: true,
  logo: false,
  type: "button",
};

export default Button;
