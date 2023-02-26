import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import {
  Button,
  Container,
  FormHelperText,
  ListItem,
  ListItemText,
  MenuItem
} from '@mui/material';

import constants from '../../../common/constants';
import regex from '../../../common/regex';
import useSetUserState from '../../../hooks/common/useSetUserState';

export default function EmployeeFrom({ employee }) {
  const [formValues, setFormValues] = useState({
    id_type: constants.idType[0],
    first_names: '',
    last_names: '',
    email: '',
    birthdays: '',
    address: '',
    phone_number: '',
    vaccination_state: false,
    vaccine: constants.vaccines[0],
    vaccination_date: '',
    number_doses: 0,
    password: '',
    id_number: ''
  });
  const { user } = useSetUserState();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnSubmit = (data) => {
    const newData = { ...data };
    if (user?.role === constants.roles.admin) {
      newData.role = constants.roles.employee;
    }
    console.log(newData);
  };

  const handleOnChance = (e) => {
    const { id, value } = e.target;
    setFormValues((prevState) => ({
      [id]: value,
      ...prevState
    }));
  };

  useEffect(() => {
    if (employee) {
      setFormValues({
        id_type: employee.id_type,
        first_names: employee.first_names,
        last_names: employee.last_names,
        email: employee.email,
        birthdays: employee.birthdays,
        address: employee.address,
        phone_number: employee.phone_number,
        vaccination_state: employee.vaccination_state,
        vaccine: employee.vaccine,
        vaccination_date: employee.vaccination_date,
        number_doses: employee.number_doses,
        password: employee.password,
        id_number: employee.id_number
      });
    }
  }, [employee]);

  return (
    <Box component="div" sx={{ mt: 2 }}>
      <Box
        onSubmit={handleSubmit(handleOnSubmit)}
        component="form"
        maxWidth={640}
        noValidate
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 'auto'
        }}
      >
        <ListItem divider sx={{ marginBottom: 3 }}>
          <ListItemText
            primary="Information"
            primaryTypographyProps={{
              fontSize: 22,
              fontWeight: 'bold'
            }}
          />
        </ListItem>
        <TextField
          autoComplete="off"
          select
          label="Identification type"
          id="id_type"
          value={formValues.id_type}
          sx={{ m: 1, width: '34ch', mb: 3 }}
          {...(errors.id_type && {
            error: true,
            helperText: errors.id_type.message
          })}
          {...register('id_type', {
            required: 'Identification type is required'
          })}
        >
          {constants.idType.map((option) => (
            <MenuItem key={option} value={option} onChange={handleOnChance}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          autoComplete="off"
          type="number"
          label="Identification number"
          id="id_number"
          sx={{ m: 1, width: '34ch', mb: 3 }}
          value={formValues.id_number}
          onChange={handleOnChance}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon />
              </InputAdornment>
            )
          }}
          {...(errors.id_number && {
            error: true,
            helperText: errors.id_number.message
          })}
          {...register('id_number', {
            required: 'Identification number is required',
            pattern: {
              value: regex.idNumber,
              message: 'You must enter a unique 10-digit numeric value'
            }
          })}
        />
        <TextField
          autoComplete="off"
          label="First names"
          id="first_names"
          sx={{ m: 1, width: '70ch', mb: 3 }}
          value={formValues.first_names}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon />
              </InputAdornment>
            )
          }}
          {...(errors.first_names && {
            error: true,
            helperText: errors.first_names.message
          })}
          {...register('first_names', {
            required: 'First names is required',
            pattern: {
              value: regex.letters,
              message: 'Only letters are accepted'
            }
          })}
        />
        <TextField
          autoComplete="off"
          label="Last names"
          id="last_names"
          sx={{ m: 1, width: '70ch', mb: 3 }}
          value={formValues.last_names}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon />
              </InputAdornment>
            )
          }}
          {...(errors.last_names && {
            error: true,
            helperText: errors.last_names.message
          })}
          {...register('last_names', {
            required: 'last names is required',
            pattern: {
              value: regex.letters,
              message: 'Only letters are accepted'
            }
          })}
        />
        <TextField
          autoComplete="off"
          type="date"
          label="Birthdays"
          id="birthdays"
          sx={{ m: 1, width: '34ch', mb: 3 }}
          value={formValues.birthdays}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon />
              </InputAdornment>
            )
          }}
          {...(errors.birthdays && {
            error: true,
            helperText: errors.birthdays.message
          })}
          {...register('birthdays', {
            required: 'Birthdays is required'
          })}
        />
        <TextField
          autoComplete="off"
          label="Mobile number"
          id="phone_number"
          sx={{ m: 1, width: '34ch', mb: 3 }}
          value={formValues.phone_number}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon />
              </InputAdornment>
            )
          }}
          {...(errors.phone_number && {
            error: true,
            helperText: errors.phone_number.message
          })}
          {...register('phone_number', {
            required: 'Mobile number is required'
          })}
        />
        <TextField
          autoComplete="off"
          label="Address"
          id="address"
          sx={{ m: 1, width: '70ch', mb: 3 }}
          value={formValues.address}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon />
              </InputAdornment>
            )
          }}
          {...(errors.address && {
            error: true,
            helperText: errors.address.message
          })}
          {...register('address', {
            required: 'Address is required'
          })}
        />
        <TextField
          type="email"
          autoComplete="off"
          label="Email"
          id="email"
          value={formValues.email}
          sx={{ m: 1, width: '43ch', mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon />
              </InputAdornment>
            )
          }}
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
        <FormControl
          sx={{ m: 1, width: '25ch', mb: 3 }}
          variant="outlined"
          {...(errors.password && {
            error: true
          })}
        >
          <InputLabel htmlFor="input-label-password">Password</InputLabel>
          <OutlinedInput
            autoComplete="off"
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={formValues.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: regex.password,
                message:
                  'Password must include an uppercase, lowercase, symbol, number and be at least 6 characters long.'
              }
            })}
          />
          {errors.password && (
            <FormHelperText id="password-helper-message">
              {errors.password.message}
            </FormHelperText>
          )}
        </FormControl>
        <ListItem divider sx={{ marginBottom: 3, marginTop: 4 }}>
          <ListItemText
            primary="Vaccination"
            primaryTypographyProps={{
              fontSize: 22,
              fontWeight: 'bold'
            }}
          />
        </ListItem>
        <TextField
          autoComplete="off"
          select
          label="Vaccination state"
          id="vaccination_state"
          value={
            formValues.vaccination_state
              ? constants.vaccinationState[1]
              : constants.vaccinationState[0]
          }
          sx={{ m: 1, width: '34ch', mb: 3 }}
          {...(errors.vaccination_state && {
            error: true,
            helperText: errors.vaccination_state.message
          })}
          {...register('vaccination_state', {
            required: 'vaccination_state is required'
          })}
        >
          {constants.vaccinationState.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          autoComplete="off"
          select
          label="Vaccine"
          id="vaccine"
          value={formValues.vaccine}
          sx={{ m: 1, width: '34ch', mb: 3 }}
          {...(errors.vaccine && {
            error: true,
            helperText: errors.vaccine.message
          })}
          {...register('vaccine', {
            required: 'vaccine is required'
          })}
        >
          {constants.vaccines.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          autoComplete="off"
          type="date"
          label="vaccination date"
          id="vaccination_date"
          sx={{ m: 1, width: '34ch', mb: 3 }}
          value={formValues.vaccination_date}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon />
              </InputAdornment>
            )
          }}
          {...(errors.vaccination_date && {
            error: true,
            helperText: errors.vaccination_date.message
          })}
          {...register('vaccination_date', {
            required: 'Vaccination date is required'
          })}
        />
        <TextField
          autoComplete="off"
          type="number"
          label="Doses"
          id="number_doses"
          value={formValues.number_doses}
          sx={{ m: 1, width: '34ch', mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon />
              </InputAdornment>
            )
          }}
          {...(errors.number_doses && {
            error: true,
            helperText: errors.number_doses.message
          })}
          {...register('number_doses', {
            required: 'Doses is required',
            pattern: {
              value: regex.numberMaxLength10,
              message: 'Only numbers are accepted'
            }
          })}
        />
        <ListItem divider sx={{ marginBottom: 3 }} />
        <Container sx={{ margin: 'auto', mb: 5 }} maxWidth="xs">
          <Button variant="contained" fullWidth type="submit">
            Save
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

EmployeeFrom.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  employee: propTypes.object
};

EmployeeFrom.defaultProps = {
  employee: null
};
