import {
  FETCH_POKEMONS,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  FETCH_POKEMON_SUCCESS,
} from 'store/actions';

const initialState = {
  pokemons: [],
  isLoading: false,
  error: null,
};

const PokemonReducer = (state = initialState, action) => {
  let pokemons = [];
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
    case FETCH_POKEMON_SUCCESS:
      // eslint-disable-next-line
      action.payload.stats.forEach(stat => stats[stat.stat.name] = stat.base_stat);
      pokemons = state.pokemons.map((pokemon) => {
        if (pokemon.name === action.payload.name) {
          return {
            ...pokemon,
            weight: action.payload.weight,
            height: action.payload.height,
          };
        }
        return pokemon;
      });
      return {
        ...state,
        pokemons,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default PokemonReducer;
