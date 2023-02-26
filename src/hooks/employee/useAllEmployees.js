import { useEffect, useState, useRef } from 'react';
import getAllEmployees from '../../services/employees/getAllEmployees';
import useAlert from '../common/useAlert';
import useSetEmployeesState from '../common/useSetEmployeesState';

export default function useAllEmployees() {
  const executionTimesRef = useRef(false);
  const { createAlert, finishAlert } = useAlert();
  const { saveEmployees } = useSetEmployeesState();
  const [fullError, setFullError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (!executionTimesRef.current) {
      executionTimesRef.current = true;

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
          executionTimesRef.current = false;
          finishAlert();
        });
    }

    setIsLoading(false);
  }, []);

  return { isLoading, fullError };
}
