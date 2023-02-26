import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { AppBarStyled, Drawer } from './styled';
import useSetUserState from '../../../hooks/common/useSetUserState';
import UserIconText from '../../molecules/UserIconText';
import useLogOut from '../../../hooks/user/useLogOut';

export default function AppBar({ children, Actions }) {
  const { user } = useSetUserState();
  const { logout } = useLogOut();
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarStyled position="absolute">
        <Toolbar
          sx={{
            pr: '24px'
          }}
        >
          <Stack direction="row" sx={{ flexGrow: 1 }} spacing={2}>
            <img src="/vite.svg" alt="logo" />
            <Typography component="h1" variant="h5" color="inherit">
              Dashboard
            </Typography>
          </Stack>
          <UserIconText user={user} logout={logout} />
        </Toolbar>
      </AppBarStyled>
      <Drawer variant="permanent">
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1]
          }}
        />
        <Divider />
        <List component="nav">
          <Actions />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Toolbar />
        <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                {children}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

AppBar.propTypes = {
  children: propTypes.element.isRequired,
  Actions: propTypes.func.isRequired
};
