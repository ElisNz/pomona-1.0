import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { LocationContext } from '@/src/context/locationContext';
import CameraView from '../../views/CameraView';
import styles from './styles';


const Main = () => {
  const [location, setLocation] = useState({});

  const locationPromise = React.useContext(LocationContext);

  useEffect(() => {
    locationPromise.then((res) => {
      if (res) {
        setLocation(res);
      }
    });
  }, [locationPromise]);

  console.log(location);

  return (
    <View style={styles.container}>
      <CameraView />
    </View>
  );
};

export default Main;
