import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CardItem from '../card';
import Loader from '../loader';
import useStyles from './styles';

const List = (props) => {
  const classes = useStyles();
  const { path, list } = props;
  return !list.length ? (
    <Loader />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {list.map((item) => (
        <Grid item xs={12} sm={6} md={3}>
          <CardItem key={item.id} item={item} path={path} />
        </Grid>
      ))}
    </Grid>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
};

export default List;
