import React from 'react';
import PropTypes from 'prop-types';

// Styles
import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  );
};

Loader.propTypes = {};

export default Loader;
