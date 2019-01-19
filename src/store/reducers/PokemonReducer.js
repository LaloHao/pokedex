import {
  FETCH_POKEMONS,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
} from 'store/actions';

const initialState = {
  pokemons: [],
  isLoading: false,
  error: null,
};

const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return { ...state, isLoading: true };
    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default PokemonReducer;
