/* eslint-disable react/forbid-prop-types */
import propTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Typography from '@mui/material/Typography';

export default function UserIconText({ user }) {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <PersonPinIcon fontSize="large" />
      <Typography variant="body1" gutterBottom>
        {user?.data && user.data.email.split('@')[0]}
      </Typography>
    </Stack>
  );
}

UserIconText.propTypes = {
  user: propTypes.object.isRequired
};
