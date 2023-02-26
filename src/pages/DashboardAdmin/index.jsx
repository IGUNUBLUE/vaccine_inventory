import { Outlet } from 'react-router-dom';
import AppBar from '../../components/organisms/AppBar';

export default function DashboardAdmin() {
  return (
    <AppBar>
      <Outlet />
    </AppBar>
  );
}
