import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/list';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import { mockDB } from '../../mockDB';

const Pokemons = (props) => {
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
              <List list={mockDB} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

Pokemons.propTypes = {};

export default Pokemons;
