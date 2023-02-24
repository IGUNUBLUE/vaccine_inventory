import { useState } from 'react';

import createUser from '../../services/createUser';

export default function useSignUp() {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const signUp = ({ email, password }) => {
    setIsLoading(true);
    createUser({ email, password })
      .then(({ data }) => {
        setResponse(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return { response, isLoading, signUp };
}
