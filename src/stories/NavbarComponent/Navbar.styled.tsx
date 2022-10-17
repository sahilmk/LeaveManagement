import styled from "styled-components";
import { Theme } from "../../Theme";

const StyledNavbar = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.colors.yankeesBlueColor};
  height: 70px;
  width: 100%;
  padding: 0px 30px;
  top: 0px;
  left: 0px;

  .leaveManagementTitle {
    font-size: 29.5px;
    color: ${Theme.colors.whiteColor};
  }

  .welcomeMessage {
    height: 24px;
    font-size: 26.5px;
    font-weight: 300;
    text-align: right;
    color: ${Theme.colors.whiteColor};
  }
`;

export default StyledNavbar;
