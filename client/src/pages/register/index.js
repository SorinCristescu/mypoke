import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/actions';
import { setAlert } from '../../redux/alert/actions';
import { Redirect } from 'react-router-dom';

// Styles
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Register = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [postData, setPostData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

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

  const { name, email, password, confirmedPassword } = postData;

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/pokeboard" />;
  }
  return (
    <Container maxWidth="xs">
      <Paper className={classes.root}>
        <Typography variant="h6">Register</Typography>
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
          <TextField
            name="password"
            variant="outlined"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            name="confirmedPassword"
            variant="outlined"
            label="Confirmed Password"
            fullWidth
            value={confirmedPassword}
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
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

Register.propTypes = {};

export default Register;
