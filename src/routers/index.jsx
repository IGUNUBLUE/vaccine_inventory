import { createBrowserRouter } from 'react-router-dom';

import config from '../config';
import Dashboard from '../pages/Dashboard';
import Main from '../pages/Main';

export default function routers() {
  const appRouters = createBrowserRouter([
    {
      path: config.paths.home,
      element: <Main />
    },
    {
      path: config.paths.dashboard,
      element: <Dashboard />
    }
  ]);

  return appRouters;
}
