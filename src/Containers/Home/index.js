/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, PermissionsAndroid, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import {VStack, Heading, Input, FlatList} from 'native-base';
import WeatherListCard from '../../Components/weatherListComponent';
import {
  searchForCity,
  getWeatherInfo,
  storeForecastInfo,
} from '../../Redux/Actions/weatherAction';
import {snackbar} from '../../Utils/functions';

const Home = props => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState({latitude: '', longitude: ''});
  const {fetchCityLoad, cityData} = useSelector(state => state.city);
  const {weatherData, weatherLoading} = useSelector(state => state.weather);
  const {weatherForecastData, forecastLoading} = useSelector(
    state => state.forecast,
  );

  /* 
      Given i was not able to find a weather Api listing cities my implementation would have used the city action that returns a city object 
      From the object o would pass down the city lat and long and update data aw required
  */
  useEffect(() => {
    dispatch(searchForCity('nairobi'));
  }, []);

  useEffect(() => {
    dispatch(getWeatherInfo(location.latitude, location.longitude));
    dispatch(storeForecastInfo(location.latitude, location.longitude));
  }, [location]);

  useEffect(() => {
    getUserCurrentLocation();
    checkSystemPermission();
  }, []);

  const checkSystemPermission = () => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then(res => {
      if (res) {
        getUserCurrentLocation();
      }
    });
  };

  // Get access to user location once user has acted on request to access location.
  const getUserCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('ccccccc', position);
        setLocation({
          latitude: JSON.stringify(position.coords.latitude),
          longitude: JSON.stringify(position.coords.longitude),
        });
      },
      error => {
        snackbar(error.message);
        // See error code charts below.
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 1000 * 60 * 5},
    );
  };

  return (
    <View style={styles.view}>
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="sm">Search</Heading>
        <Input
          placeholder="Search for city ...."
          width="75%"
          borderRadius="4"
          py="3"
          px="10"
          fontSize="14"
          onChangeText={value => console.log('value', value)}
          borderColor="grey"
        />
      </VStack>
      <View style={styles.cardMargin}>
        <WeatherListCard
          location={weatherData.name}
          temp={weatherData.main?.feels_like}
          temp_max={weatherData.main?.temp_max}
          temp_min={weatherData.main?.temp_min}
          clouds={weatherData.weather ? weatherData.weather[0].main : 'loading'}
          componentId={props.componentId}
          forecastArray={weatherForecastData}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
  },
  cardMargin: {
    marginTop: 20,
  },
});

export default Home;
