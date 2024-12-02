import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

interface TableProps {
  title: string;
  columns: any[];
  rows: any[];
  properties: Properties;
}

interface Properties {
  checkboxSelection: boolean;
  hideFooter: boolean;
  className: string;
}

const Table = ({ title, columns, rows, properties }:TableProps) => {
  const { checkboxSelection, hideFooter, className } = properties;
  
  return (
    <Paper className={`datagrid-wrapper ${className}`}>
      <h6 className="datagrid-title">{title}</h6>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        rowHeight={40}
        checkboxSelection={checkboxSelection}
        sx={{ border: 0 }}
        hideFooter={hideFooter}
        disableColumnMenu={true}
        disableColumnResize={true}
        scrollbarSize={0}
      />
    </Paper>
  );
  
}

export default Table;
