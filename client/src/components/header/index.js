import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  return (
    <AppBar position="fixed" color="transparent">
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
        <Link to="/register">
          <Typography variant="body1">Register</Typography>
        </Link>
        <Link to="/login">
          <Typography variant="body1">Login</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
