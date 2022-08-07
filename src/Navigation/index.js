import {Navigation} from 'react-native-navigation';
import {registerScreens} from './registerScreen';

const rootNavigationOptions = () => {
  Navigation.setDefaultOptions({
    topBar: {
      elevation: 0,
      backgroundColor: 'white',
      leftButtonColor: 'black',
      barStyle: 'default',
      noBorder: true,
      background: {
        color: '#fff',
      },
      options: {},
    },
    layout: {
      orientation: ['portrait'],
    },
  });
};

export const goHome = () => {
  registerScreens();
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Home',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
};

export const setRootNavigationInitializer = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    rootNavigationOptions();
    Navigation.setRoot({
      root: {
        stack: {
          id: 'App',
          children: [
            {
              component: {
                name: 'App',
              },
            },
          ],
        },
      },
    });
  });
};
