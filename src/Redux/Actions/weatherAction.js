import * as TYPES from './constants';
/*
AsyncStorage: This would have been used to store data device to allow for offline view
Location that we could save :
       - User Location
       - User forecast
AsyncStorage.setItem('Locations', JSON.stringify(locations));

*/
import {searchCity, currentWeather, weatherForecast} from '../Api/fetch';

export const getWeatherInfo = (lat, lon) => dispatch => {
  dispatch({type: TYPES.LOADING});

  currentWeather(lat, lon).then(response => {
    try {
      if (response) {
        dispatch({type: TYPES.GET_WEATHER_INFO, payload: response});
      }
    } catch (err) {
      dispatch({type: TYPES.ERROR});
    }
  });
};

export const storeForecastInfo = (lat, lon) => dispatch => {
  dispatch({type: TYPES.LOADING});
  weatherForecast(lat, lon).then(response => {
    try {
      if (response) {
        dispatch({type: TYPES.GET_WEATHER_FORECAST, payload: response});
      }
    } catch (err) {
      dispatch({type: TYPES.ERROR});
    }
  });
};

export const searchForCity = name => dispatch => {
  dispatch({type: TYPES.LOADING});
  searchCity(name).then(response => {
    try {
      if (response) {
        dispatch({type: TYPES.SEARCH_CITY, payload: response});
      }
    } catch (err) {
      dispatch({type: TYPES.ERROR});
    }
  });
};
