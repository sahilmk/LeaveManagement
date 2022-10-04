import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { TableStyle } from './Table.styled'

type TableComponentProps = {
  columns: GridColDef[];
  rows: any;
  width: string;
  height: number;
};

const DataTable = ({ rows, columns, width, height }: TableComponentProps) => {
  return (
    <div style={{ height: height, width: width }}>
      <TableStyle
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row.id}
        rowHeight={60}
      />
    </div>
  );
};

DataTable.defaultProps = {
  rows: [],
  columns: [],
};

export default DataTable;
