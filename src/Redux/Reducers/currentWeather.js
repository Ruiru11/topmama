import {LOADING, ERROR, GET_WEATHER_INFO} from '../Actions/constants';

let initialState = {
  error: '',
  weatherLoading: false,
  weatherData: [],
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        weatherLoading: true,
      };
    case GET_WEATHER_INFO:
      return {
        ...state,
        weatherData: action.payload,
        weatherLoading: false,
      };
    case ERROR:
      return {
        ...state,
        weatherData: action.payload,
        weatherLoading: false,
      };
    default:
      return state;
  }
};

export default weather;
