import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/actions';
import { setAlert } from '../../redux/alert/actions';
import { Redirect } from 'react-router-dom';

// Styles
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Login = (props) => {
  const classes = useStyles();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    dispatch(login(credentials));
    setPostData({
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const { email, password } = postData;

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/pokeboard" />;
  }
  return (
    <Container maxWidth="xs">
      <Paper className={classes.root}>
        <Typography variant="h6">Login</Typography>
        <form
          autoComplete="off"
          noValidate
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            name="password"
            variant="outlined"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => handleChange(e)}
          />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            syze="large"
            type="submit"
            fullWidth
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

Login.propTypes = {};

export default Login;
