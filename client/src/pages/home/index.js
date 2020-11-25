import React from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";
import Logo from "../../assets/images/pikachu.svg";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Grow in>
        <img src={Logo} alt="logo" className={classes.logo} />
      </Grow>
      <div className={classes.text}>
        <Typography variant="h2" component="h2" align="center">
          Wellcome to MyPoke
        </Typography>
        <Typography variant="h5" component="h5" align="center">
          You can explore now the pokemons world and start creating your own
          collection of extraordinary pokemons.
        </Typography>
      </div>
      <Link to="/login">
        <Button variant="contained" size="large" color="primary">
          Get Start
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
