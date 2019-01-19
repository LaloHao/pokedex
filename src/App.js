import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
  HomeScreen,
  DetailScreen,
} from 'screens';

const App = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: () => null,
  },
});

export default createAppContainer(App);
