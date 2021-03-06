import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging3188030Navigator from '../features/Messaging3188030/navigator';
import SignIn21188028Navigator from '../features/SignIn21188028/navigator';
import SignUp22188027Navigator from '../features/SignUp22188027/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging3188030: { screen: Messaging3188030Navigator },
SignIn21188028: { screen: SignIn21188028Navigator },
SignUp22188027: { screen: SignUp22188027Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
