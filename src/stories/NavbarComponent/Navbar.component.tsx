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
        <span className="Leave-Management">LEAVE MANAGEMENT</span>
        <span className="Welcome-John-doe">
          Welcome, {userName}
          <span className="text-style-1"> </span>
        </span>
      </StyledNavbar>
    </>
  );
};

NavbarComponent.defaultProps = {
  user: "John Doe",
};

export default NavbarComponent;
