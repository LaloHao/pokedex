export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';

export const fetchPokemons = () => ({
  type: FETCH_POKEMONS,
});

export const fetchPokemonsSuccess = pokemons => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: pokemons,
});

export const fetchPokemonsFailure = message => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: message,
});

export const FETCH_POKEMON = 'FETCH_POKEMON';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchPokemon = pokemon => ({
  type: FETCH_POKEMON,
  pokemon,
});

export const fetchPokemonSuccess = pokemon => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: pokemon,
});

export const fetchPokemonFailure = message => ({
  type: FETCH_POKEMON_FAILURE,
  payload: message,
});
