import styled from "styled-components";
import { Theme } from "../../Theme";

const StyledTable = styled.table`
  background-color: ${Theme.colors.whiteColor};
  text-align: left;
  border-collapse: collapse;
  width: 100%;

  thead,
  tbody {
    border-bottom: 2px solid ${Theme.colors.brightGrayColor};
  }

  th {
    color: ${Theme.colors.cetaceanBlueColor};
    font-weight: 600;
  }

  th,
  td {
    padding: 10px 20px;
    font-size: 22px;
  }

  td {
    &:last-child {
      display: flex;

      span {
        margin-right: 16px;
      }
    }
  }
`;

export default StyledTable;
