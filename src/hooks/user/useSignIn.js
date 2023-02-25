/* eslint-disable camelcase */
import { useState } from 'react';
import config from '../../config';

import signInUser from '../../services/user/signInUser';
import useAlert from '../common/useAlert';
import useNavigateTo from '../common/useNavigateTo';
import useSetUserState from '../common/useSetUserState';

export default function useSignIn() {
  const { createAlert, finishAlert } = useAlert();
  const { saveUserState } = useSetUserState();
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

        const {
          session: { access_token, refresh_token, token_type },
          user: {
            address,
            auth_uuid,
            email: userEmail,
            first_names,
            last_names,
            number_doses,
            id_number,
            birthdate,
            id,
            phone_number,
            role_id,
            type_id,
            vaccination_date,
            vaccine_id,
            vaccine_state
          }
        } = data;

        saveUserState({
          session: {
            accessToken: access_token,
            refreshToken: refresh_token,
            tokenType: token_type
          },
          data: {
            id,
            address,
            auth: auth_uuid,
            email: userEmail,
            firstNames: first_names,
            lastNames: last_names,
            numberDoses: number_doses,
            idNumber: id_number,
            birthdate,
            phoneNumber: phone_number,
            roleId: role_id,
            typeId: type_id,
            vaccinationDate: vaccination_date,
            vaccineId: vaccine_id,
            vaccineState: vaccine_state
          }
        });

        return setUser(data);
      })
      .finally(() => {
        finishAlert();
        navigateTo({ path: config.paths.dashboard });
        setIsLoading(false);
      });
  };

  return { user, isLoading, signIn, fullError };
}
