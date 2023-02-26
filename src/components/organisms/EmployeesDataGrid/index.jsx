import { Box, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import columns from './columns';
import useAllEmployees from '../../../hooks/employee/useAllEmployees';
import useSetEmployeesState from '../../../hooks/common/useSetEmployeesState';
import rows from './rows';
import useSelectedEmployees from '../../../hooks/common/useSelectedEmployees';

export default function EmployeesDataGrid() {
  const { isLoading } = useAllEmployees();
  const { employees } = useSetEmployeesState();
  const { selectedEmployees, selectEmployees } = useSelectedEmployees();

  if (!employees?.length)
    return (
      <Box
        flexGrow={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <DataGrid
      pageSize={15}
      autoHeight
      columns={columns()}
      rows={rows(employees)}
      checkboxSelection
      disableSelectionOnClick
      selectionModel={selectedEmployees}
      onSelectionModelChange={selectEmployees}
      loading={isLoading}
    />
  );
}
