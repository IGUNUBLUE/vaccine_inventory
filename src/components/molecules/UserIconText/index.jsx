/* eslint-disable react/forbid-prop-types */
import propTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Tooltip } from '@mui/material';

export default function UserIconText({ user, logout }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <PersonPinIcon fontSize="large" />
      <Typography variant="body1" gutterBottom>
        {user?.email && user.email.split('@')[0]}
      </Typography>
      <Tooltip title="Logout" placement="bottom-start">
        <IconButton onClick={logout}>
          <ExitToAppIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

UserIconText.propTypes = {
  user: propTypes.object,
  logout: propTypes.func
};

UserIconText.defaultProps = {
  user: '',
  logout: () => null
};
