import React from 'react';

// Components
import Header from '../components/header';

// Styles
import useStyles from './styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
