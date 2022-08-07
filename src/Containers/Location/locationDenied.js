/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Box} from 'native-base';

const LocationDeniedView = () => {
  const openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };
  return (
    <View style={{alignItems: 'center', width: '100%', marginTop: 50}}>
      <Box
        w="400"
        height="340"
        backgroundColor="grey"
        justifyContent="center"
        borderRadius="10">
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Please NOTE that this application requires access to location.
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            paddingTop: 5,
          }}>
          No weather update to show. Open settings to set application
          permissions
        </Text>

        <TouchableOpacity onPress={() => openAppSettings()}>
          <Text
            style={{
              fontSize: 20,
              color: '#3dcfe1',
              textAlign: 'center',
              paddingTop: 25,
            }}>
            Open Settings
          </Text>
        </TouchableOpacity>
      </Box>
    </View>
  );
};

export default LocationDeniedView;
