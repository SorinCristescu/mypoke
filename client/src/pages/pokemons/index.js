import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemons } from '../../redux/pokemons/actions';

import List from '../../components/list';
import Loader from '../../components/loader';

import useStyles from './styles';
import { Container, Typography, Grow, Grid } from '@material-ui/core';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const Pokemons = (props) => {
  const classes = useStyles();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const loading = useSelector((state) => state.pokemons.loading);
  const dispatch = useDispatch();
  const path = props.match.path;
  const [searchQuerry, setSearchQuerry] = useState('');
  const [searchResults, setSearchResults] = useState(pokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  // useEffect(() => {
  //   const results = pokemons.filter((pokemon) =>
  //     pokemon.name.english.toLowerCase().includes(searchQuerry)
  //   );
  //   setSearchResults(results);
  // }, [searchQuerry]);

  const handleSearch = (e) => {
    setSearchQuerry(e.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        Pokemons
      </Typography>
      <div className={classes.search}>
        <InputBase
          className={classes.input}
          placeholder="Search pokemons"
          variant="outlined"
          onChange={handleSearch}
        />
        <IconButton type="submit" className={classes.iconButton}>
          <SearchIcon />
        </IconButton>
      </div>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={12}>
              <List list={pokemons} path={path} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

Pokemons.propTypes = {};

export default Pokemons;
