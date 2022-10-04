import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { Theme } from "../../Theme";

export const TableStyle = styled(DataGrid)`
    .MuiDataGrid{
        &-columnHeaderTitle{
            color: ${Theme.colors.cetaceanBlueColor};
            font-size: 22px;
            font-weight: 600;
        }
        
        &-cellContent{
            color: ${Theme.colors.cetaceanBlueColor};
            font-size: 22px;
            font-weight: normal;
        }
    }
    
`;