import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/actions';

import { setAlert } from '../../redux/alert/actions';
import { Link, Redirect } from 'react-router-dom';

import JapanFlag from '../../assets/images/japan.svg';
import ChinaFlag from '../../assets/images/china.svg';
import EnglishFlag from '../../assets/images/uk.svg';
import FrenchFlag from '../../assets/images/france.svg';
import Logo from '../../assets/images/pikachu.svg';

// Styles
import useStyles from './styles';
import clsx from 'clsx';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';

const Register = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [postData, setPostData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
    language: 'english',
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
        language,
      };
      dispatch(register(newUser));
      setPostData({
        name: '',
        email: '',
        password: '',
        confirmedPassword: '',
        language: 'english',
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

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const { name, email, password, confirmedPassword, language } = postData;

  // Redirect if logged in
  if (isAuthenticated && user !== null) {
    return <Redirect to="/pokemons" />;
  }
  return (
    <>
      <div className={classes.root}>
        <img className={classes.logo} src={Logo} alt="logo" />
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
            onChange={handleChange}
          />
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            fullWidth
            value={email}
            onChange={handleChange}
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
              onChange={handleChange}
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
            <InputLabel htmlFor="outlined-adornment-confirmedpassword">
              Confirmed
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirmedpassword"
              type={showPassword ? 'text' : 'password'}
              name="confirmedPassword"
              value={confirmedPassword}
              onChange={handleChange}
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
            <div className={classes.fieldset}>
              <FormLabel
                component="legend"
                focused={false}
                className={classes.legend}
              >
                Please choose your language.
              </FormLabel>
              <div className={classes.language}>
                <FormControlLabel
                  name="language"
                  value="english"
                  control={
                    <Radio
                      checked={language === 'english'}
                      color="primary"
                      onChange={handleChange}
                    />
                  }
                  labelPlacement="top"
                  label={
                    <img
                      className={classes.flag}
                      src={EnglishFlag}
                      alt="flag"
                    />
                  }
                />
                <FormControlLabel
                  name="language"
                  value="chinese"
                  control={
                    <Radio
                      checked={language === 'chinese'}
                      color="primary"
                      onChange={handleChange}
                    />
                  }
                  labelPlacement="top"
                  label={
                    <img className={classes.flag} src={ChinaFlag} alt="flag" />
                  }
                ></FormControlLabel>
                <FormControlLabel
                  name="language"
                  value="japanese"
                  control={
                    <Radio
                      checked={language === 'japanese'}
                      color="primary"
                      onChange={handleChange}
                    />
                  }
                  labelPlacement="top"
                  label={
                    <img className={classes.flag} src={JapanFlag} alt="flag" />
                  }
                ></FormControlLabel>
                <FormControlLabel
                  name="language"
                  value="french"
                  control={
                    <Radio
                      checked={language === 'french'}
                      color="primary"
                      onChange={handleChange}
                    />
                  }
                  labelPlacement="top"
                  label={
                    <img className={classes.flag} src={FrenchFlag} alt="flag" />
                  }
                ></FormControlLabel>
              </div>
            </div>
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
      </div>
    </>
  );
};

export default Register;
