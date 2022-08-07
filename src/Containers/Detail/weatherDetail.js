/* eslint-disable react-native/no-inline-styles */
import {Image} from 'react-native';
import React from 'react';
import {Box, HStack, Text} from 'native-base';
import {extractDays, kelvinToCelsius} from '../../Utils/functions';
import moment from 'moment';

const WeatherForecast = props => {
  const weatherIconSwitcher = weather => {
    switch (weather) {
      case 'Clouds':
        return require('../../Utils/images/cloudy.png');
      case 'Clear':
        return require('../../Utils/images/sunny.png');
      case 'Rain':
        return require('../../Utils/images/rainy.png');
      default:
        return require('../../Utils/images/sunny.png');
    }
  };

  return (
    <HStack
      p={3}
      justifyContent={'space-between'}
      style={{marginLeft: 8, marginRight: 8}}
      onPress={() => console.log('nnnnnn')}>
      <Box onPress={() => console.log('ooooo')}>
        <Text color={'white'}>
          {extractDays(moment(props.weather.item.dt_txt).day())}
        </Text>
        <Text color={'white'}>
          {moment(props.weather.item.dt_txt).format('HH:mm')}
        </Text>
      </Box>
      <Box>
        <Image
          source={weatherIconSwitcher(props.weather.item.weather[0].main)}
          style={{width: 20, height: 20}}
        />
      </Box>
      <Box>
        <Text color={'white'}>
          {kelvinToCelsius(props.weather.item?.main?.feels_like)}°
        </Text>
      </Box>
    </HStack>
  );
};

export default WeatherForecast;
