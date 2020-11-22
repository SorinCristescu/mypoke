import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../components/header';

// Styles
import useStyles from './styles';
import Box from '@material-ui/core/Box';

const Layout = ({ children }) => {
  const classes = useStyles();

  console.log('from layout', alert);
  return (
    <Box className={classes.root}>
      <Header />

      {children}
    </Box>
  );
};

Layout.propTypes = {};

export default Layout;
