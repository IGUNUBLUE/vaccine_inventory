import { useState } from 'react';
import deleteEmployees from '../../services/employees/deleteEmployees';
import getAllEmployees from '../../services/employees/getAllEmployees';
import useAlert from '../common/useAlert';
import useSelectedEmployees from '../common/useSelectedEmployees';
import useSetEmployeesState from '../common/useSetEmployeesState';

export default function useDeleteEmployees() {
  const { selectedEmployees } = useSelectedEmployees();
  const { saveEmployees } = useSetEmployeesState();
  const { finishAlert, createAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [fullError, setFullError] = useState();

  function startDeleteEmployees() {
    setIsLoading(true);
    deleteEmployees(selectedEmployees)
      .then(({ error }) => {
        if (error) {
          createAlert({
            show: true,
            severity: 'error',
            message: 'Something went wrong...'
          });
          return setFullError({ ...error });
        }
        // fetch all employees
        getAllEmployees().then(
          ({ data: dataGetAllEmployees, error: errorGetAllEmployees }) => {
            if (errorGetAllEmployees) {
              createAlert({
                show: true,
                severity: 'error',
                message: 'Something went wrong...'
              });
              return setFullError({ ...errorGetAllEmployees });
            }

            if (!dataGetAllEmployees.length) {
              createAlert({
                show: true,
                severity: 'info',
                message: 'There are not employees...'
              });
              return setFullError(error);
            }

            saveEmployees(dataGetAllEmployees);
            return createAlert({
              show: true,
              severity: 'success',
              message: 'Employees successfully removed'
            });
          }
        );
        // end fetch all employees
        return null;
      })
      .finally(() => {
        finishAlert();
        setIsLoading(false);
      });
  }

  return { startDeleteEmployees, isLoading, fullError };
}
