import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemons } from '../../redux/pokemons/actions';

import List from '../../components/list';
import Loader from '../../components/loader';
import { Container, Typography, Grow, Grid } from '@material-ui/core';

const Pokemons = (props) => {
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const loading = useSelector((state) => state.pokemons.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" align="center">
        Pokemons
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
              <List list={pokemons} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

Pokemons.propTypes = {};

export default Pokemons;
