import { GET_ALL_POKEMONS_SUCCESS, GET_ALL_POKEMONS_FAIL } from './types';

const initialState = {
  loading: true,
  pokemons: [],
};

const pokemonsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: payload,
      };
    case GET_ALL_POKEMONS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
