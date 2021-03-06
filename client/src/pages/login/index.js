import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/actions";
import { Link, Redirect } from "react-router-dom";

// Styles
import useStyles from "./styles";
import clsx from "clsx";
import {
  TextField,
  Button,
  Typography,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Logo from "../../assets/images/pikachu.svg";

const Login = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    dispatch(login(credentials));
    setPostData({
      email: "",
      password: "",
    });
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

  const { email, password } = postData;

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/pokemons" />;
  }
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={Logo} alt="logo" />
      <Typography variant="h6">Wellcome to MyPoke</Typography>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            className={classes.input}
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
              type={showPassword ? "text" : "password"}
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
        </div>
        <Typography variant="p" component="p">
          Sign in for your account
        </Typography>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Login
        </Button>
        <div className={classes.redirect}>
          <Typography variant="p" component="p">
            Need a new acount?
          </Typography>
          <Link className={classes.link} to="/register">
            Register your new account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
