import StyledTable from "./Table.styled";

type tableDataObject = {
  type?: string;
  reason?: string;
  date?: string;
  appliedOn?: string;
  department?: string;
  name?: string;
};

type TableComponentProps = {
  tableHeader: string[];
  tableData: tableDataObject[];
  viewAction?: boolean;
  removeAction?: boolean;
};

const TableComponent = ({
  tableHeader,
  tableData,
  viewAction,
  removeAction,
}: TableComponentProps) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {tableHeader.map((header, index) => {
            return <th key={index}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          const numberOfTableDataRow = Object.keys(data).length;
          let td = [];
          for (let i = 0; i < numberOfTableDataRow; i++) {
            td[i] = Object.values(data)[i];
          }
          return (
            <tr key={index}>
              {td.map((item, index) => {
                return (
                  <>
                    <td key={index}>{item}</td>
                  </>
                );
              })}
              <td>
                {viewAction ? <span>E</span> : ""}
                {removeAction ? <span>R</span> : ""}
              </td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

TableComponent.defaultProps = {
  tableHeader: [],
  tableData: [],
};

export default TableComponent;
