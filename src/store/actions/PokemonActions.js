export const FETCH_POKEMONS = 'FETCH_WHISKYS';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_WHISKYS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_WHISKYS_FAILURE';

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
