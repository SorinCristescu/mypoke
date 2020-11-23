import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../components/header';

// Styles
import useStyles from './styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  console.log('from layout', alert);
  return (
    <div className={classes.root}>
      <Header />

      {children}
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
