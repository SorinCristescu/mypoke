import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Chart from '../../components/chart';
import Loader from '../../components/loader';

// Styles
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Details = (props) => {
  const classes = useStyles();
  const loading = useSelector((state) => state.user.loading);
  const dataSet = [100, 19, 3, 5, 2, 3];
  // const data = [HP, Attack, Defense, SpAttack, SpDefense, Speed];

  if (loading) {
    return <Loader />;
  }
  return (
    <Container maxWidth="md">
      <Paper className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} justify="center" alignItems="center"></Grid>
          <Grid item xs={6} justify="center" alignItems="center">
            <Typography variant="h6">Pokemon Details</Typography>
            <Chart dataSet={dataSet} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

Details.propTypes = {};

export default Details;
