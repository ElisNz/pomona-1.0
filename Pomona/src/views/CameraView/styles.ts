import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    width:'50%',
    height: '50%',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
    flex: 1,
    gap: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cameraContainer: {
    width: '50%',
    height: '50%',
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
  button: {
    width: '50%',
    height: '10%',
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: 'black',
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default styles;
