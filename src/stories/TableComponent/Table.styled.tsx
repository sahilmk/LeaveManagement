import styled from "styled-components";

const StyledTable = styled.table`
  text-align: left;
  background-color: #fff;
  width: 100%;
  border-collapse: collapse;

  thead,
  tbody {
    border-bottom: 2px solid #ebebeb;
  }

  th {
    color: #080341;
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
