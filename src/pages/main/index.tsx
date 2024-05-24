import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { LocationContext } from '@/src/context/locationContext';
import { internalPostRequest } from '@/src/helpers/requests';
import { expoImage } from '@/src/types';
import CameraView from '../../views/CameraView';
import HeaderView from '../../views/HeaderView';
import ResultView from '../../views/ResultView';
import styles from './styles';


const Main = () => {
  const [location, setLocation] = useState({});
  const [img, setImg] = useState({} as expoImage);
  const [result, setResult] = useState(null);

  const locationPromise = React.useContext(LocationContext);

  useEffect(() => {
    locationPromise.then((res) => {
      if (res) {
        setLocation(res);
      }
    });
  }, [locationPromise]);

  useEffect(() => {
    if (!img.uri) return;

    const data = {
      base64img: img.uri
    };
    internalPostRequest(data)
      .then((res) => {
        setResult({ result: res.data, location: location });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [img]);

  return (
    <>
      <HeaderView />
      <View style={styles.container}>
        {result ?
          <ResultView result={result} setResult={setResult} /> 
            :
          <CameraView setImg={setImg} />
        }
      </View>
    </>
  );
};

export default Main;
