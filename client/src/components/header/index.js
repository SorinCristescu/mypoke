import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/actions';

// Styles
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../assets/images/pikachu.svg';

const Header = (props) => {
  const classes = useStyles();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const authLinks = (
    <>
      <Link to="/pokeboard">
        <Typography variant="body1">Pokeboard</Typography>
      </Link>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </>
  );

  const guestLinks = (
    <>
      <Link to="/register">
        <Typography variant="body1">Register</Typography>
      </Link>
      <Link to="/login">
        <Typography variant="body1">Login</Typography>
      </Link>
    </>
  );

  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar className={classes.toolbar}>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Link to="/">
          <img className={classes.logo} src={Logo} alt="Logo" />
        </Link>
        <Typography variant="h5" className={classes.title}>
          MyPoke
        </Typography>

        {!loading && isAuthenticated ? authLinks : guestLinks}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
