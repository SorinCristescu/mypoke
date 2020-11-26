import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemons } from '../../redux/pokemons/actions';
import { createAndUpdatePokeboard } from '../../redux/user/actions';
import { capitalize } from '../../utils/helpers';

import List from '../../components/list';
import Loader from '../../components/loader';

import useStyles from './styles';
import {
  Container,
  Typography,
  Grid,
  InputBase,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AtoZ from '../../assets/images/a-z.svg';
import ZtoA from '../../assets/images/z-a.svg';

const Pokemons = (props) => {
  const classes = useStyles();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const loading = useSelector((state) => state.pokemons.loading);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const path = props.match.path;
  const [searchQuerry, setSearchQuerry] = useState('');
  const [sortType, setSortType] = useState('asc');

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(createAndUpdatePokeboard());
  }, []);

  const handleSearch = (e) => {
    setSearchQuerry(e.target.value);
  };

  if (loading) {
    return <Loader message="Pokemons will apear in few seconds..." />;
  }

  let sorted = pokemons.sort((a, b) => {
    const isReversed = sortType === 'asc' ? 1 : -1;
    return isReversed * a.name.localeCompare(b.name);
  });

  let filteredPokemons = sorted.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(searchQuerry.toLowerCase())
  );

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        Welcome {capitalize(user.name)}
      </Typography>
      <Typography variant="body1" align="center">
        Now you can start choosing your favorite pokemons and add them to your
        personal collection.
      </Typography>
      <div className={classes.search}>
        <div className={classes.filter}>
          <InputBase
            className={classes.input}
            placeholder="Search pokemons..."
            onChange={handleSearch}
            value={searchQuerry}
          />
          <SearchIcon />
        </div>
        <div className={classes.sort}>
          <Tooltip title="Sort A-Z" arrow>
            <IconButton size="small" onClick={() => setSortType('asc')}>
              <img src={AtoZ} alt="ascending" className={classes.image} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Sort Z-A" arrow>
            <IconButton size="small" onClick={() => setSortType('des')}>
              <img src={ZtoA} alt="descending" className={classes.image} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={12}>
            <List list={filteredPokemons} path={path} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Pokemons;
