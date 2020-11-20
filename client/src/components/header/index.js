import React from 'react';
import PropTypes from 'prop-types';

// Styles
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="transparent">
      <Toolbar>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h5" className={classes.title}>
          MyPoke
        </Typography>
        <Button color="inherit">Register</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
