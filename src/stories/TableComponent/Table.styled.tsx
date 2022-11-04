import styled from "styled-components";
import { Theme } from "../../Theme";

const StyledTable = styled.table`
  background-color: ${Theme.colors.whiteColor};
  text-align: left;
  border-collapse: collapse;
  width: 100%;

  thead,
  tbody {
    border-bottom: 0.2rem solid ${Theme.colors.brightGrayColor};
  }

  th {
    color: ${Theme.colors.cetaceanBlueColor};
    font-weight: 600;
  }

  th,
  td {
    padding: 1rem 2rem;
    font-size: 2.2rem;
  }

  td {
    &:last-child {
      display: flex;

      span {
        margin-right: 1.6rem;
      }
    }
  }
`;

export default StyledTable;
