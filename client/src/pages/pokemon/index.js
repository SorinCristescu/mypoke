import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../redux/user/actions';

// Components
import Chart from '../../components/chart';
import Loader from '../../components/loader';

// Styles
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const Pokemon = (props) => {
  const classes = useStyles();
  const loading = useSelector((state) => state.user.loading);
  const pokemon = useSelector((state) => state.user.pokemon);
  const dispatch = useDispatch();

  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getPokemon(id));
  }, []);

  const { base, type, urlImage, name } = pokemon;
  const { HP, Attack, Defense, SpAttack, SpDefense, Speed } = base;
  const dataSet = [HP, Attack, Defense, SpAttack, SpDefense, Speed];
  if (loading) {
    return <Loader />;
  }
  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={6}
            justify="center"
            alignItems="center"
            className={classes.gridItem}
          >
            <img src={urlImage} alt="pokemon image" className={classes.image} />
          </Grid>
          <Grid
            item
            xs={6}
            justify="center"
            alignItems="center"
            className={classes.gridItem}
          >
            <Typography variant="h4" align="center">
              {name}
            </Typography>
            <div className={classes.chips}>
              {type.map((chip, index) => (
                <Chip
                  key={index}
                  className={classes.chip}
                  color="primary"
                  size="small"
                  label={chip}
                />
              ))}
            </div>
            <Chart dataSet={dataSet} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

Pokemon.propTypes = {};

export default Pokemon;
