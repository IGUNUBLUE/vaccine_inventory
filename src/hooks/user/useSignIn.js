/* eslint-disable camelcase */
import { useState, useEffect } from 'react';

import config from '../../config';
import signInUser from '../../services/user/signInUser';
import useAlert from '../common/useAlert';
import useNavigateTo from '../common/useNavigateTo';
import useSetUserState from '../common/useSetUserState';

export default function useSignIn() {
  const { createAlert, finishAlert } = useAlert();
  const { saveUserState, user: userInStore } = useSetUserState();
  const { navigateTo } = useNavigateTo();
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

        if (!data.length) {
          createAlert({
            show: true,
            severity: 'warning',
            message: 'Incorrect credentials'
          });

          return setFullError(error);
        }

        const {
          address,
          email: userEmail,
          first_names,
          last_names,
          number_doses,
          id_number,
          birthdays,
          id,
          phone_number,
          id_type,
          vaccination_date,
          vaccine,
          vaccination_state,
          created_at,
          role
        } = data[0];

        saveUserState({
          id,
          address,
          email: userEmail,
          firstNames: first_names,
          lastNames: last_names,
          numberDoses: number_doses,
          idNumber: id_number,
          birthdays,
          phoneNumber: phone_number,
          idType: id_type,
          vaccinationDate: vaccination_date,
          createdAt: created_at,
          vaccinationState: vaccination_state,
          vaccine,
          role
        });

        setUser(data);
        return navigateTo({ path: config.paths.dashboard });
      })
      .finally(() => {
        finishAlert();
        setIsLoading(false);
      });
  };
  // if user is logged
  useEffect(() => {
    if (userInStore?.id) {
      navigateTo(config.paths.dashboard);
    }
  }, []);

  return { user, isLoading, signIn, fullError };
}
