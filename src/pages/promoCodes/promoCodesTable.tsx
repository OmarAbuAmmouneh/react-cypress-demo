import Paper from "@mui/material/Paper";
import { GridColDef } from "@mui/x-data-grid";
import { StyledTableHeader, viewButton } from "./style";
import ButtonComponent from "@/components/button";
import SharedTable from "@/components/table";

interface IProps {
  data: any;
  isFetching: boolean;
  state: {
    limit: number;
    offset: number;
    searchText: string;
  };
  total: number;
  setState: (e: any) => void;
}

const PromoCodesTable = ({
  data,
  isFetching,
  setState,
  state,
  total,
}: IProps) => {
  const columns: GridColDef[] = [
    {
      field: "id",
      flex: 1,
      sortable: false,
      hideable: false,
      filterable: false,
      filterOperators: undefined,
      disableColumnMenu: true,
      renderHeader: () => {
        return <StyledTableHeader>{"id"}</StyledTableHeader>;
      },
    },
    {
      field: "code",
      flex: 1,
      sortable: false,
      hideable: false,
      filterable: false,
      filterOperators: undefined,
      disableColumnMenu: true,
      renderHeader: () => {
        return <StyledTableHeader>{"code"}</StyledTableHeader>;
      },
    },
    {
      field: "totalUsage",
      flex: 1,
      sortable: false,
      hideable: false,
      filterable: false,
      filterOperators: undefined,
      disableColumnMenu: true,
      renderHeader: () => {
        return <StyledTableHeader>{"totalUsage"}</StyledTableHeader>;
      },
    },
  ];

  return (
    <>
      <Paper
        elevation={2}
        sx={{ marginTop: "2rem", width: "100%", height: "50vh" }}
      >
        <SharedTable
          onPageChange={(i) =>
            setState((s: any) => ({ ...s, offset: i * s.limit }))
          }
          page={Math.ceil(state?.offset / state?.limit)}
          onPageSizeChange={(i) => setState((s: any) => ({ ...s, limit: i }))}
          rowCount={total}
          columns={columns}
          rows={data?.matches ?? []}
          isLoading={isFetching}
          getRowId={(i: any) => i.id}
          disableSelectionOnClick
        />
      </Paper>
    </>
  );
};

export default PromoCodesTable;
