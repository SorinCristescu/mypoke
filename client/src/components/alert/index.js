import React from 'react';

import { useSelector } from 'react-redux';

// Styles

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);

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

export default Alert;
