import { useState } from "react";
import StyledNavbar from "./Navbar.styled";

const NavbarComponent = () => {
  const [userName, setUserName] = useState("John Doe");

  return (
    <>
      <StyledNavbar>
        <span className="Leave-Management">LEAVE MANAGEMENT</span>
        <span className="Welcome-John-doe">
          Welcome, {userName}
          <span className="text-style-1"> </span>
        </span>
      </StyledNavbar>
    </>
  );
};

NavbarComponent.defaultProps = {};

export default NavbarComponent;
