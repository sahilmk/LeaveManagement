import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { Theme } from "../../Theme";

export const TableStyle = styled(DataGrid)`
    .MuiDataGrid{
        &-row{
            margin: 0rem 3rem;
        }

        &-columnHeaderTitle{
            color: ${Theme.colors.cetaceanBlueColor};
            font-size: 2.2rem;
            font-weight: 600;
            margin: 0rem 3rem;
        }
        
        &-cell--textLeft, &-cell{
            border: none !important;
        }

        &-cellContent{
            color: ${Theme.colors.cetaceanBlueColor};
            font-size: 2.2rem;
            font-weight: normal;
        }
        &-cell--withRenderer{
            i{
                color: ${Theme.colors.darkGrayColor};
                font-size: 2.2rem;
                margin-right: 2rem;
            }
        }
    }  

    .MuiTablePagination-displayedRows{
        font-size: 2rem;
    }

    .MuiSvgIcon-root{
        font-size: 3rem;
    }

    a{
        font-size: 2.2rem;
    }
`;


export const DivStyle = styled.div`
    .MuiDataGrid{
        &-root{
            border: none;
        }
    }
`;
