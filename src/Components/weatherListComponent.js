import React from 'react';
import {ImageBackground, TouchableHighlight} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Box, Text, Flex} from 'native-base';
import moment from 'moment';
import {kelvinToCelsius} from '../Utils/functions';

const WeatherListCard = props => {
  const changeWeatherName = weather => {
    switch (weather) {
      case 'Clouds':
        return 'Cloudy';
      case 'Clear':
        return 'sunny';
      case 'Rain':
        return 'rainy';
      default:
        return '....';
    }
  };

  //   this makes the card dynamic

  const makeViewDynamic = clouds => {
    switch (clouds) {
      case 'Clouds':
        return require('../Utils/images/cloudy.png');
      case 'Clear':
        return require('../Utils/images/sunny.png');
      case 'Rain':
        return require('../Utils/images/rainy.png');
      default:
        return require('../Utils/images/sunny.png');
    }
  };

  console.log('component id', props.forecastArray);

  return (
    <TouchableHighlight
      onPress={() =>
        Navigation.push(props.componentId, {
          component: {
            name: 'ShowForecast',
            passProps: {
              weatherForecastData: props.forecastArray,
              componentId: props.componentId,
            },
          },
        })
      }>
      <ImageBackground
        source={makeViewDynamic(props.clouds)}
        resizeMode="cover">
        <Box height="80" width="301" borderRadius="10" marginBottom="5">
          <Box marginTop="5" alignItems="center">
            <Text fontWeight="bold" fontSize="18">
              {props.location}
            </Text>
            <Text fontWeight="500" fontSize="18">
              {moment().format('MMMM Do YYYY')}
            </Text>
            <Text fontWeight="200" fontSize="18">
              {moment().format('LT')}
            </Text>
          </Box>
          <Box alignItems="center" marginBottom="20">
            <Text fontSize="44" fontWeight="bold" color="white">
              {kelvinToCelsius(props.temp_min)}°
            </Text>
          </Box>
          <Flex direction="row" justifyContent="space-evenly">
            <Box>
              <Text color={'white'}>{kelvinToCelsius(props.temp)}°</Text>
              <Text color={'white'}>Current</Text>
            </Box>
            <Box>
              <Text color={'white'}>{kelvinToCelsius(props.temp_max)}°</Text>
              <Text color={'white'}>Max</Text>
            </Box>
            <Box>
              <Text color={'white'}>{kelvinToCelsius(props.temp_min)}°</Text>
              <Text color={'white'}>Min</Text>
            </Box>
            <Box>
              <Text color={'white'}>{changeWeatherName(props.clouds)}</Text>
              <Text color={'white'}>Condition</Text>
            </Box>
          </Flex>
        </Box>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default WeatherListCard;
