import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAndUpdatePokeboard } from "../../redux/user/actions";

import List from "../../components/list";
import Loader from "../../components/loader";
import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Pokeboard = (props) => {
  const classes = useStyles();
  const loading = useSelector((state) => state.user.loading);
  const pokeboard = useSelector((state) => state.user.pokeboard);
  const dispatch = useDispatch();
  const path = props.match.path;

  useEffect(() => {
    dispatch(createAndUpdatePokeboard());
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center" style={{ margin: "20px" }}>
        Your pokeboard
      </Typography>
      {pokeboard.pokemons.length === 0 ? (
        <Typography variant="h5" align="center">
          is empty. Please go back and start add pokemons to your pokeboard!
        </Typography>
      ) : (
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={12}>
              <List list={pokeboard.pokemons} path={path} />
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Pokeboard;
