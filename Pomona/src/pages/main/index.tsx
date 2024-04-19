import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { LocationContext } from '@/src/context/locationContext';
import { internalPostRequest } from '@/src/helpers/requests';
import { expoImage } from '@/src/types';
import CameraView from '../../views/CameraView';
import HeaderView from '../../views/HeaderView';
import styles from './styles';


const Main = () => {
  const [location, setLocation] = useState({});
  const [img, setImg] = useState({} as expoImage);

  const locationPromise = React.useContext(LocationContext);

  useEffect(() => {
    locationPromise.then((res) => {
      if (res) {
        setLocation(res);
      }
    });
  }, [locationPromise]);

  useEffect(() => {
    console.log(img.uri);
    // console.log(location);
    const data = {
      base64img: img.uri
    };
    const res = internalPostRequest(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
