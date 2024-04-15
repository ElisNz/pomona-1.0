import React from 'react';
import { View, Text } from 'react-native';
import { LocationContext } from '@/src/context/locationContext';
import CameraView from '../../views/CameraView';
import styles from './styles';


const Main = () => {

  const value = React.useContext(LocationContext);
  console.log(value.then((res) => console.log(res)));

  return (
    <View style={styles.container}>
      <CameraView />
    </View>
  );
};

export default Main;
