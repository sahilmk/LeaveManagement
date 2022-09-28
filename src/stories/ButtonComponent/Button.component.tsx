import React from "react";
import StyledButton from "./Button.styled";
import '../../Icons/css/material-design-iconic-font.css'

type ButtonComponentProps = {
  label: string;
  onClick: React.MouseEventHandler;
  bgColor: string;
  color: string;
  size: string;
  border: string;
  borderRadius: boolean;
  logo?: boolean
};

const ButtonComponent = ({
  label,
  onClick,
  bgColor,
  color,
  size,
  border,
  borderRadius,
  logo
}: ButtonComponentProps) => {
  return (
    <>
      <StyledButton
        onClick={onClick}
        bgColor={bgColor}
        color={color}
        size={size}
        border={border}
        borderRadius={borderRadius}
      >
        {logo && < i className="zmdi zmdi-power" />}
        {label}
      </StyledButton>
    </>
  );
};

ButtonComponent.defaultProps = {
  value: "",
  onClick: (e: React.MouseEvent) => {
    console.log(e);
  },
  bgColor: "#284960",
  color: "#7a99af",
  size: "26px",
  border: "",
  borderRadius: true,
};

export default ButtonComponent;
