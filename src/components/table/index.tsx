import React from 'react'
import {DataGrid, GridCallbackDetails, GridColDef, GridRowParams, MuiEvent} from "@mui/x-data-grid";


interface IProps {
    columns: Array<GridColDef>;
    rows: Array<object>
    disableSelectionOnClick?: boolean
    rowsPerPageOptions?: Array<number>
    onPageChange?: (page: number) => void
    onPageSizeChange?: (size: number) => void
    page?: number
    rowCount?: number
    isLoading?: boolean
    getRowId: any
    onRowDoubleClick?: (params: GridRowParams, event: MuiEvent<React.MouseEvent>, details: GridCallbackDetails) => void
    checkboxSelection?: boolean;
}

const SharedTable = ({
                         columns,
                         rows,
                         getRowId,
                         rowCount,
                         rowsPerPageOptions,
                         page,
                         onPageChange,
                         onPageSizeChange,
                         isLoading,
                         disableSelectionOnClick,
                         onRowDoubleClick,
                         checkboxSelection
                     }: IProps) => {
    return (
        
        <DataGrid
            disableExtendRowFullWidth={true}
            rows={rows}
            loading={isLoading}
            columns={columns}
            rowsPerPageOptions={[100]}
            getRowId={getRowId}
            rowCount={rowCount}
            page={page}
            disableVirtualization={true}
            paginationMode={"server"}
            pageSize={25}
            density={"compact"}
            onPageSizeChange={onPageSizeChange}
            onPageChange={onPageChange}
            onRowDoubleClick={onRowDoubleClick}
            checkboxSelection={checkboxSelection}
            disableSelectionOnClick={disableSelectionOnClick}

        />
    )
}

export default SharedTable;