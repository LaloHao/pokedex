import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers';
import Epics from './epics';

const epicMiddleware = createEpicMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const store = createStore(
  persistReducer(persistConfig, Reducers),
  composeWithDevTools(
    applyMiddleware(epicMiddleware),
  ),
);

epicMiddleware.run(Epics);

export default store;
