import { combineEpics } from 'redux-observable';
import { fetchPokemons } from './PokemonEpics';

export default combineEpics(fetchPokemons);
