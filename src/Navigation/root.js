/*
Create a Root component wrapped by NativeBaseProvider which helps us set application theme globally
The NativeBaseProvider accepts initialWindowMetrics:{}, colorModeManager:() => and theme:{} 
A global component also helps us define things like network connection status and snackbar
*/

import React, {useEffect, useState} from 'react';
import {LogBox, ImageBackground, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';

LogBox.ignoreAllLogs();

const RootComponent = ({PassedComponent, componentProps}) => {
  const [networkAvailability, setNetworkAvailability] = useState(false);

  useEffect(() => {
    networkEventListener();
    return () => {
      networkEventListener();
    };
  });

  const networkEventListener = NetInfo.addEventListener(state => {
    if (state.isConnected !== networkAvailability) {
      setNetworkAvailability(state.isConnected);
    }
    if (!state.isConnected) {
      Snackbar.show({
        text: 'Please check your network connection',
        duration: Snackbar.LENGTH_INDEFINITE,
      });
    }
  });

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require('../Utils/images/background.png')}
        style={styles.image}>
        <PassedComponent {...componentProps} />
      </ImageBackground>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },
});

export default RootComponent;
