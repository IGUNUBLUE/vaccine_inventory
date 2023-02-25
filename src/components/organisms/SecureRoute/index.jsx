import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useSetUserState from '../../../hooks/common/useSetUserState';
import useNavigateTo from '../../../hooks/common/useNavigateTo';
import config from '../../../config';
import constants from '../../../common/constants';

export default function SecureRoute() {
  const { user } = useSetUserState();
  const { navigateTo } = useNavigateTo();

  useEffect(() => {
    if (!user) {
      return navigateTo({ path: config.paths.home });
    }

    if (user && user.role === constants.roles.admin) {
      return navigateTo({ path: config.paths.dashboardAdmin });
    }

    return navigateTo({ path: config.paths.dashboardUser });
  }, []);

  return <Outlet />;
}
