import { useEffect, useState } from "react";
import StyledNavbar from "./Navbar.styled";

type NavbarComponentProps = {
  user: string;
};

const NavbarComponent = ({ user }: NavbarComponentProps) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(user);
  }, [user]);

  return (
    <>
      <StyledNavbar>
        <span className="leaveManagementTitle">LEAVE MANAGEMENT</span>
        <span className="welcomeMessage">
          Welcome, {userName}
          <span className="textStyle"> </span>
        </span>
      </StyledNavbar>
    </>
  );
};

NavbarComponent.defaultProps = {
  user: "John Doe",
};

export default NavbarComponent;
