import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const screens = {
  Main: {
    screen: Main,
  },
  User: {
    screen: User,
  },
};

const Routes = createAppContainer(
  createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#666',
      },
      headerTintColor: '#FFF',
    },
  })
);

export default Routes;
