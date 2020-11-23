import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/actions';
import { setAlert } from '../../redux/alert/actions';
import { Link, Redirect } from 'react-router-dom';

// Styles
import useStyles from './styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../../assets/images/pikachu.svg';

const Register = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const alert = useSelector((state) => state.alert);
  const [postData, setPostData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      console.log('Password do not match');
      dispatch(setAlert('Passwords do not match!', 'error', true));
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      dispatch(register(newUser));

      setPostData({
        name: '',
        email: '',
        password: '',
        confirmedPassword: '',
      });
    }
  };

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { name, email, password, confirmedPassword } = postData;

  // Redirect if logged in
  if (isAuthenticated && user !== null) {
    return <Redirect to="/language" />;
  }
  return (
    <Container maxWidth="xs">
      <Paper className={classes.root}>
        <img className={classes.logo} src={Logo} />
        <Typography variant="h6">Wellcome to MyPoke</Typography>

        <form
          autoComplete="off"
          noValidate
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={(e) => handleChange(e)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Confirmed Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="confirmedPassword"
              value={confirmedPassword}
              onChange={(e) => handleChange(e)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <Typography variant="p" component="p" className={classes.message}>
            Register your new account
          </Typography>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Register
          </Button>
          <div className={classes.redirect}>
            <Typography variant="p" component="p">
              If you have an account.
            </Typography>
            <Link className={classes.link} to="/login">
              Login in your account!
            </Link>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

Register.propTypes = {};

export default Register;
