import { useState } from 'react';

import signInUser from '../../services/user/signInUser';
import useAlert from '../common/useAlert';

export default function useSignIn() {
  const { createAlert, finishAlert } = useAlert();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [fullError, setFullError] = useState(null);

  const signIn = ({ email, password }) => {
    setIsLoading(true);
    signInUser({ email, password })
      .then(({ data, error }) => {
        if (error) {
          createAlert({
            show: true,
            severity: 'error',
            message: error.message
          });

          return setFullError({ ...error });
        }

        return setUser(data);
      })
      .finally(() => {
        finishAlert();

        setIsLoading(false);
      });
  };

  return { user, isLoading, signIn, fullError };
}
