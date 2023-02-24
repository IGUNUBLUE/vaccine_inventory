import propTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';

import Alert from '../../molecules/Alert';

export default function PopAlert({ open, severity, message }) {
  const position = {
    vertical: 'top',
    horizontal: 'center'
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: position.vertical,
        horizontal: position.horizontal
      }}
      open={open}
      TransitionComponent={Fade}
    >
      <Alert severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

PopAlert.propTypes = {
  open: propTypes.bool.isRequired,
  severity: propTypes.string.isRequired,
  message: propTypes.string.isRequired
};
