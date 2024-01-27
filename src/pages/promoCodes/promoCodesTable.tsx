import Paper from "@mui/material/Paper";
import {GridColDef} from "@mui/x-data-grid";
import { StyledTableHeader, viewButton } from "./style";
import ButtonComponent from "@/components/button";
import SharedTable from "@/components/table";

interface IProps {
    data: any;
    isFetching: boolean;
}

const PromoCodesTable = ({data, isFetching}: IProps) => {

    const columns: GridColDef[] = [
        {
            field: 'nationalId',
            width: 120,
            sortable: false,
            hideable: false,
            filterable: false,
            filterOperators: undefined,
            disableColumnMenu: true,
            renderHeader: () => {
                return (
                    <StyledTableHeader>
                        {('nationalId')}
                    </StyledTableHeader>
                )
            },
            renderCell: (params: any) => {
                return (
                    <ButtonComponent
                    type="primary"
                        title={('view')}
                        onClick={() => {
                        }}
                        customStyle={viewButton}
                    />
                )
            }
        },

    ];

    return (
        <>
            <Paper elevation={2} sx={{marginTop: '2rem', width: '100%', height: '50vh'}}>
                <SharedTable
                    columns={columns}
                    rows={data?.matches ?? []}
                    isLoading={isFetching}
                    getRowId={(i: any) => i.id}
                    disableSelectionOnClick
                />
            </Paper>
        </>

    )
}

export default PromoCodesTable;