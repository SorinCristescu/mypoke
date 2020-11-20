import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from './types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        loading: false,
        isAuthenticated: false,
      };
    // case LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     token: payload,
    //   };
    // case LOGIN_FAIL:
    //   return {
    //     ...state,
    //     errorCode: payload,
    //     loading: false,
    //   };
    // case RESET_PASSWORD_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     token: payload,
    //   };
    // case RESET_PASSWORD_FAIL:
    //   return {
    //     ...state,
    //     errorCode: payload,
    //     loading: false,
    //   };
    default:
      return state;
  }
};

export default authReducer;
