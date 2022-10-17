import styled from "styled-components";
import { Theme } from "../../Theme";

const StyledNavbar = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.colors.yankeesBlueColor};
  height: 7rem;
  width: 100%;
  padding: 0rem 3rem;
  top: 0rem;
  left: 0rem;

  .leaveManagementTitle {
    font-size: 2.95rem;
    color: ${Theme.colors.whiteColor};
  }

  .welcomeMessage {
    height: 2.4rem;
    font-size: 2.65rem;
    font-weight: 300;
    text-align: right;
    color: ${Theme.colors.whiteColor};
  }
`;

export default StyledNavbar;
