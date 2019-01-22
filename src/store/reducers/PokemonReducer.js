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

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const PokemonReducer = (state = initialState, action) => {
  let pokemons = [];
  let pokemon;
  let species;
  const stats = {};
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
        pokemons: action.payload.map((_pokemon, index) => ({
          ..._pokemon,
          id: index + 1,
          uri: `${IMG_URL}/${index + 1}.png`,
        })),
        isLoading: false,
      };
    case FETCH_POKEMON_SUCCESS:
      [pokemon, species] = action.payload;
      // eslint-disable-next-line
      pokemon.stats.forEach(stat => stats[stat.stat.name] = stat.base_stat);
      pokemons = state.pokemons.map((_pokemon) => {
        if (_pokemon.name === pokemon.name) {
          return {
            ..._pokemon,
            ...stats,
            weight: pokemon.weight / 10,
            height: pokemon.height / 10,
            description: species.flavor_text_entries.find(s => s.language.name === 'en').flavor_text,
          };
        }
        return _pokemon;
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
