import uuid from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from './types';

// Set alert.
export const setAlert = (message, severity, open, timeout = 5000) => (
  dispatch
) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { message, severity, open, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
