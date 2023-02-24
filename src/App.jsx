import { ThemeProvider, CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import routers from './routers';

import GlobalCss from './theme/Global';
import light from './theme/light';

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalCss />
      <ThemeProvider theme={light}>
        <RouterProvider router={routers()} />
      </ThemeProvider>
    </>
  );
}

export default App;
