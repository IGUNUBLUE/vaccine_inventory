import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import { useForm } from 'react-hook-form';

import useSignIn from '../../../hooks/user/useSignIn';
import regex from '../../../common/regex';

export default function SignIn() {
  const { isLoading, signIn } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleOnSubmit = ({ email, password }) => {
    signIn({ email, password });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper
        elevation={6}
        sx={{ width: 450, height: 420, padding: 5, margin: 5 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleOnSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              autoComplete="email"
              autoFocus
              {...(errors.email && {
                error: true,
                helperText: errors.email.message
              })}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: regex.email,
                  message: 'Enter a valid email address'
                }
              })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              {...(errors.password && {
                error: true,
                helperText: errors.password.message
              })}
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: regex.password,
                  message: `Password must include an uppercase, lowercase, symbol, number and be at least 6 characters long.`
                }
              })}
            />
            <LoadingButton
              type="submit"
              loading={isLoading}
              loadingPosition="start"
              startIcon={<LoginIcon />}
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
