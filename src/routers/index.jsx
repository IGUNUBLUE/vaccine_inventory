import { createBrowserRouter, Outlet } from 'react-router-dom';

import config from '../config';
import DashboardAdmin from '../pages/DashboardAdmin';
import Main from '../pages/Main';
import Error from '../pages/Error';
import UsersDataGrid from '../components/organisms/UsersDataGrid';
import SecureRoute from '../components/organisms/SecureRoute';

export default function routers() {
  const appRouters = createBrowserRouter([
    {
      path: config.paths.home,
      element: <Main />,
      errorElement: <Error />
    },
    {
      path: config.paths.dashboard,
      element: <SecureRoute />,
      children: [
        {
          path: config.paths.dashboardAdmin,
          element: <DashboardAdmin />,
          children: [
            {
              path: config.paths.dashboardAdmin,
              element: <UsersDataGrid />
            }
          ]
        },
        {
          path: config.paths.dashboardUser,
          element: (
            <h1>
              <Outlet />
            </h1>
          ),
          children: [
            {
              path: config.paths.dashboardUser,
              element: <h1>user</h1>
            }
          ]
        }
      ]
    }
  ]);

  return appRouters;
}
