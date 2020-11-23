import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createAndUpdatePokeboard } from '../../redux/user/actions';

import List from '../../components/list';
import Loader from '../../components/loader';
import { Container, Typography, Grow, Grid } from '@material-ui/core';

const Pokeboard = (props) => {
  const loading = useSelector((state) => state.user.loading);
  const pokeboard = useSelector((state) => state.user.pokeboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createAndUpdatePokeboard(pokeboard.language));
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Typography variant="h5" align="center">
        Your collection
      </Typography>
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
    </>
  );
};

Pokeboard.propTypes = {};

export default Pokeboard;
