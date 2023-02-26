import { useEffect, useState } from 'react';
import getAllEmployees from '../../services/user/getAllEmployees';
import useAlert from '../common/useAlert';
import useSetEmployeesState from '../common/useSetEmployeesState';

export default function useAllEmployees() {
  const { createAlert, finishAlert } = useAlert();
  const { saveEmployees, employees } = useSetEmployeesState();
  const [fullError, setFullError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (!employees?.length) {
      getAllEmployees()
        .then(({ data, error }) => {
          if (error) {
            createAlert({
              show: true,
              severity: 'error',
              message: 'Something went wrong...'
            });
            return setFullError({ ...error });
          }

          if (!data.length) {
            createAlert({
              show: true,
              severity: 'info',
              message: 'There are not employees...'
            });
            return setFullError(error);
          }

          return saveEmployees(data);
        })
        .finally(() => {
          finishAlert();
        });
    }

    setIsLoading(false);
  }, []);

  return { isLoading, fullError };
}
