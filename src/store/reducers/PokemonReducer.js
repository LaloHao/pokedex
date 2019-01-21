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
        pokemons: action.payload.map((pokemon, index) => ({
          ...pokemon,
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        })),
        isLoading: false,
      };
    default:
      return state;
  }
};

export default PokemonReducer;
