import { Outlet } from 'react-router-dom';

import AppBar from '../../components/organisms/AppBar';
import PopAlert from '../../components/organisms/PopAlert';
import useAlert from '../../hooks/common/useAlert';
import Actions from '../../components/organisms/Actions';

export default function DashboardAdmin() {
  const { alert } = useAlert();

  return (
    <>
      <PopAlert
        open={alert.show}
        severity={alert.severity}
        message={alert.message}
      />
      <AppBar Actions={Actions}>
        <Outlet />
      </AppBar>
    </>
  );
}
