import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width:'50%',
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    width: '50%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 60,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
