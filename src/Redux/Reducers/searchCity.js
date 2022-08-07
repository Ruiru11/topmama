import {LOADING, ERROR, SEARCH_CITY} from '../Actions/constants';

let initialState = {
  error: '',
  fetchCityLoad: false,
  cityData: [],
};

const citySearch = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        cityData: action.payload,
        fetchCityLoad: true,
      };
    case SEARCH_CITY:
      return {
        ...state,
        cityData: action.payload,
        fetchCityLoad: false,
      };
    case ERROR:
      return {
        ...state,
        cityData: action.payload,
        fetchCityLoad: false,
      };
    default:
      return state;
  }
};

export default citySearch;
