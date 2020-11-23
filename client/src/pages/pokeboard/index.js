import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createAndUpdatePokeboard } from '../../redux/user/actions';

import List from '../../components/list';
import Loader from '../../components/loader';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';

const Pokeboard = () => {
  const classes = useStyles();
  const loading = useSelector((state) => state.user.loading);
  const pokeboard = useSelector((state) => state.user.pokeboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createAndUpdatePokeboard());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        Your collection
      </Typography>
      {pokeboard.pokemons.length === 0 ? (
        <Typography variant="h5" align="center">
          is empty. Please go back and start add pokemons to your pokeboard!
        </Typography>
      ) : (
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={12}>
                <List list={pokeboard.pokemons} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      )}
    </div>
  );
};

export default Pokeboard;
