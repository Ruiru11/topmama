import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import App from '../../App';
import RootComponent from './root';
import Home from '../Containers/Home';
import store from '../Redux/Store';
import ShowForecast from '../Containers/Detail/index';

/* 
  Here we register screens the registerComponent method generates componentId that we use with the navigation commands
  this are .push, .pop and all other available ones.
  React-native-navigation offers the best native navigation experience in my personal opinion
*/

export const registerScreens = () => {
  Navigation.registerComponent(
    'App',
    () => props =>
      (
        <Provider store={store}>
          <RootComponent PassedComponent={App} componentProps={props} />
        </Provider>
      ),
    () => App,
  );

  Navigation.registerComponent(
    'Home',
    () => props =>
      (
        <Provider store={store}>
          <RootComponent PassedComponent={Home} componentProps={props} />
        </Provider>
      ),
    () => Home,
  );

  Navigation.registerComponent(
    'ShowForecast',
    () => props =>
      (
        <Provider store={store}>
          <RootComponent
            PassedComponent={ShowForecast}
            componentProps={props}
          />
        </Provider>
      ),
    () => ShowForecast,
  );
};
