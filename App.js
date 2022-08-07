/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {goHome} from './src/Navigation';
import LocationDeniedView from './src/Containers/Location/locationDenied';

const App = () => {
  useEffect(() => {
    // this section would also handle hiding SplashScreen SplashScreen.hide()
    accessLocationPermissions();
  }, []);

  const accessLocationPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: ' Weather App',
            message:
              'This application needs access to your location ' +
              'so you can get the weather',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          goHome();
        } else {
          console.log('Location Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  console.log('home');
  return (
    <>
      <LocationDeniedView />
    </>
  );
};

export default App;
