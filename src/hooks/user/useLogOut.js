import constants from '../../common/constants';
import config from '../../config';
import useNavigateTo from '../common/useNavigateTo';
import useSetEmployeesState from '../common/useSetEmployeesState';
import useSetUserState from '../common/useSetUserState';

export default function useLogOut() {
  const { saveUserNull, user } = useSetUserState();
  const { saveEmployees } = useSetEmployeesState();
  const { navigateTo } = useNavigateTo();

  function logout() {
    saveUserNull();

    if (user && user.role === constants.roles.admin) {
      saveEmployees(null);
    }

    navigateTo({ path: config.paths.home });
  }

  return { logout };
}
