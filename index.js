/** @format */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import Store from 'store';

import App from './src/App';
import { name as appName } from './app.json';

const store = persistStore(Store);

const Root = () => (
  <Provider store={Store}>
    <PersistGate loading={null} persistor={store}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
