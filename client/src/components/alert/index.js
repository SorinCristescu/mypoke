import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import useStyles from './styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  const classes = useStyles();
  const alerts = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };
  return (
    <>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <Snackbar
            open={alert.open}
            autoHideDuration={4000}
            vertical="top"
            horizontal="center"
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              severity={alert.severity}
              onClose={handleClose}
            >
              {alert.message}
            </MuiAlert>
          </Snackbar>
        ))}
    </>
  );
};

Alert.propTypes = {};

export default Alert;
