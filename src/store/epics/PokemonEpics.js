import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import {
  FETCH_POKEMONS,
  fetchPokemonsFailure,
  fetchPokemonsSuccess,
} from 'store/actions';

const API = 'https://pokeapi.co/api/v2';

// eslint-disable-next-line
export const fetchPokemons = action$ => action$
  .ofType(FETCH_POKEMONS)
  // eslint-disable-next-line
  .switchMap(() => {
    return ajax
      .getJSON(`${API}/pokemon/?limit=10000`)
      .map(data => data.results);
  })
  .map(pokemons => fetchPokemonsSuccess(pokemons))
  .catch(error => Observable.of(fetchPokemonsFailure(error.message)));
