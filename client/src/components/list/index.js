import React from 'react';

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
        <Grid key={item.id} item xs={12} sm={6} md={3}>
          <CardItem item={item} path={path} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
