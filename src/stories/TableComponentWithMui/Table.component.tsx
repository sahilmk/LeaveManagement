import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { TableStyle } from './Table.styled'
import { DivStyle } from './Table.styled';

type TableComponentProps = {
  columns: GridColDef[];
  rows: any;
  width: string;
};

const DataTable = ({ rows, columns, width }: TableComponentProps) => {
  return (
    <DivStyle style={{ height: 'calc(100vh - 43rem)', width: width }} className='upperdiv'>
      <TableStyle
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row.id}
        rowHeight={60}
      />
    </DivStyle>
  );
};

DataTable.defaultProps = {
  rows: [],
  columns: [],
};

export default DataTable;
