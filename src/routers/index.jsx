import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main';

export default function routers() {
  const appRouters = createBrowserRouter([
    {
      path: '/',
      element: <Main />
    },
    {
      path: '/dashboard',
      element: <h1>dashboard</h1>
    }
  ]);

  return appRouters;
}
