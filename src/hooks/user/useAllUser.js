import { useEffect, useState } from 'react';
import getAllUsers from '../../services/user/getAllUsers';
import useAlert from '../common/useAlert';

export default function useAllUsers() {
  const { createAlert, finishAlert } = useAlert();
  const [users, setUsers] = useState();
  const [fullError, setFullError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers()
      .then(({ data, error }) => {
        if (error) {
          createAlert({
            show: true,
            severity: 'error',
            message: 'Something went wrong...'
          });
          return setFullError({ ...error });
        }

        return setUsers(data);
      })
      .finally(() => {
        finishAlert();
        setIsLoading(false);
      });
  }, []);

  return { users, isLoading, fullError };
}
