import { combineEpics } from 'redux-observable';
import { fetchPokemons, fetchPokemon } from './PokemonEpics';

export default combineEpics(
  fetchPokemons,
  fetchPokemon,
);
