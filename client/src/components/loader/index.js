import React from 'react';

// Styles
import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default Loader;
