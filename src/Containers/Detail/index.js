/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, FlatList, Flex, Box, Divider} from 'native-base';
import {View} from 'react-native';
import WeatherForecast from './weatherDetail';
import {Navigation} from 'react-native-navigation';

const ShowForecast = props => {
  console.log('weatherForecastData', props.weatherForecastData);
  return (
    <View
      style={{
        backgroundColor: 'grey',
        width: '100%',
      }}>
      <Text
        style={{
          marginLeft: 25,
          marginTop: 7,
          fontSize: 24,
          fontWeight: 'bold',
        }}
        onPress={() => Navigation.pop(props.componentId)}>
        Back Home
      </Text>

      <Flex direction="row" justifyContent="space-evenly" marginTop="10">
        <Box>
          <Text color={'white'}>Day</Text>
        </Box>
        <Box>
          <Text color={'white'}>Condition</Text>
        </Box>
        <Box>
          <Text color={'white'}>Temperature</Text>
        </Box>
      </Flex>
      <Divider />
      {props.weatherForecastData?.list &&
        Array.isArray(props.weatherForecastData?.list) &&
        props.weatherForecastData?.list.length > 0 && (
          <FlatList
            data={props.weatherForecastData.list}
            renderItem={weather => <WeatherForecast weather={weather} />}
          />
        )}
    </View>
  );
};

ShowForecast.options = {
  topBar: {
    title: {
      text: 'Weather Forecast',
    },
    backgroundColor: 'grey',
    backButton: {
      color: 'white',
      visible: true,
    },
  },
  statusBar: {
    backgroundColor: 'grey',
    style: 'dark',
  },
};

export default ShowForecast;
