import {configureStore} from '@reduxjs/toolkit';
import forecast from '../Reducers/forecast';
import weather from '../Reducers/currentWeather';
import city from '../Reducers/searchCity';

const store = configureStore({
  reducer: {
    forecast: forecast,
    weather: weather,
    city: city,
  },
});

export default store;
