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
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = (props) => {
  const classes = useStyles();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const avatar = useSelector((state) => state.auth.user.avatar);
  const dispatch = useDispatch();

  return (
    <AppBar position="fixed" color="secondary" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.nav}>
          <Link to="/">
            <img className={classes.logo} src={Logo} alt="Logo" />
          </Link>
          {/* <Typography variant="h5" className={classes.title}>
          MyPoke
        </Typography> */}
          <Link to="/pokmons">Pokemons</Link>
          <Link to="/pokeboard">Pokeboard</Link>
        </div>

        <div className={classes.logout}>
          <IconButton color="primary" onClick={() => dispatch(logout())}>
            <ExitToAppIcon />
          </IconButton>

          {avatar ? <Avatar alt={avatar} /> : null}
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
