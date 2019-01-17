import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { HomeScreen } from 'screens';

const App = createStackNavigator({
  Home: HomeScreen,
});

export default createAppContainer(App);
