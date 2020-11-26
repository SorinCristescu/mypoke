import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/actions";

// Styles
import useStyles from "./styles";
import { AppBar, Toolbar, IconButton, Tooltip } from "@material-ui/core";
import Logo from "../../assets/images/pikachu.svg";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Header = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <AppBar position="fixed" color="secondary" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.nav}>
          <Link to="/">
            <img className={classes.logo} src={Logo} alt="Logo" />
          </Link>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/pokeboard">Pokeboard</Link>
        </div>
        <div className={classes.logout}>
          <Tooltip title="Sign out" arrow>
            <IconButton color="primary" onClick={() => dispatch(logout())}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
          {user ? <Avatar src={user.avatar} alt="avatar" /> : null}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
