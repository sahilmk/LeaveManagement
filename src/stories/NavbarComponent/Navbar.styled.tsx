import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #173346;
  height: 70px;
  padding: 0px 30px;

  .Leave-Management {
    font-family: Novecento;
    font-size: 29.5px;
    color: #fff;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .Welcome-John-doe {
    height: 24px;
    font-family: SegoeUI;
    font-size: 26.5px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #fff;

    .text-style-1 {
      font-weight: normal;
    }
  }
`;

export default StyledNavbar;
