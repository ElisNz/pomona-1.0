import React from 'react';
import * as Location from 'expo-location';

const getLocation = async() => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return;
  }
  return await Location.getCurrentPositionAsync({});
};

export const LocationContext = React.createContext(getLocation());

export const LocationProvider = ({ children } : { children: any }) => {
  return (
    <LocationContext.Provider value={getLocation()}>
      {children}
    </LocationContext.Provider>
  );
};