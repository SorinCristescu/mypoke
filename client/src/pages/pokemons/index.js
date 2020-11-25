import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/pokemons/actions";
import { createAndUpdatePokeboard } from "../../redux/user/actions";
import { capitalize } from "../../utils/helpers";

import List from "../../components/list";
import Loader from "../../components/loader";

import useStyles from "./styles";
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const Pokemons = (props) => {
  const classes = useStyles();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const loading = useSelector((state) => state.pokemons.loading);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const path = props.match.path;
  const [searchQuerry, setSearchQuerry] = useState("");

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
  let filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(searchQuerry.toLowerCase())
  );
  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        Wellcome {capitalize(user.name)}
      </Typography>
      <Typography variant="body1" align="center">
        Now you can start choosing your favorite pokemons and add them to your
        personal collection.
      </Typography>
      <div className={classes.search}>
        <InputBase
          className={classes.input}
          placeholder="Search pokemons..."
          onChange={handleSearch}
          value={searchQuerry}
        />
        <SearchIcon />
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
