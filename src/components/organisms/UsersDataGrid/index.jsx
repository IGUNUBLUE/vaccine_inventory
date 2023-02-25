import { Box, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import columns from './columns';
import useAllEmployees from '../../../hooks/employee/useAllEmployees';
import useSetEmployeesState from '../../../hooks/common/useSetEmployeesState';
import rows from './rows';
import useSelectedEmployee from '../../../hooks/common/useSelectedEmployee';

export default function UsersDataGrid() {
  const { isLoading } = useAllEmployees();
  const { employees } = useSetEmployeesState();
  const { selectedEmployee, selectEmployee } = useSelectedEmployee();

  if (!employees?.length)
    return (
      <Box
        flexGrow={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 7
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <DataGrid
      autoHeight
      columns={columns()}
      rows={rows(employees)}
      checkboxSelection
      disableSelectionOnClick
      selectionModel={selectedEmployee}
      onSelectionModelChange={selectEmployee}
      loading={isLoading}
    />
  );
}
