import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
  HomeScreen,
  DetailScreen,
} from 'screens';

const App = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
}, {
  initialouteName: 'Home',
  defaultNavigationOptions: {
    header: () => null,
  },
});

export default createAppContainer(App);
