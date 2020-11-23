import {
  CREATE_AND_UPDATE_POKEBOARD_SUCCESS,
  CREATE_AND_UPDATE_POKEBOARD_FAIL,
  ADD_POKEMON_SUCCESS,
  ADD_POKEMON_FAIL,
  DELETE_POKEMON_SUCCESS,
  DELETE_POKEMON_FAIL,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL,
} from './types';

const initialState = {
  loading: true,
  loaded: false,
  pokeboard: null,
  pokemon: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_AND_UPDATE_POKEBOARD_SUCCESS:
    case ADD_POKEMON_SUCCESS:
    case DELETE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokeboard: payload,
      };
    case CREATE_AND_UPDATE_POKEBOARD_FAIL:
    case ADD_POKEMON_FAIL:
    case DELETE_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        pokemon: payload,
      };
    case GET_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
