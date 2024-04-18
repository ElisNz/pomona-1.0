import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { LocationContext } from '@/src/context/locationContext';
import CameraView from '../../views/CameraView';
import HeaderView from '../../views/HeaderView';
import styles from './styles';


const Main = () => {
  const [location, setLocation] = useState({});
  const [img, setImg] = useState('');

  const locationPromise = React.useContext(LocationContext);

  useEffect(() => {
    locationPromise.then((res) => {
      if (res) {
        setLocation(res);
      }
    });
  }, [locationPromise]);

  useEffect(() => {
    // when an image is taken, construct the object to be sent to the server
    console.log(img);
    console.log(location);
  }, [img]);

  return (
    <>
      <HeaderView />
      <View style={styles.container}>
        <CameraView setImg={setImg} />
      </View>
    </>
  );
};

export default Main;
