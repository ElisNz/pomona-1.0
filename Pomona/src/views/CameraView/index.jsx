import { useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { View, Pressable, Platform, Text } from 'react-native';
import styles from './styles';

const CameraView = () => {
	const videoRef = useRef(null);
	const photoRef = useRef(null);
	const [isRecording, setIsRecording] = useState(false);
	const [hasPhoto, setHasPhoto] = useState(false);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const type = Platform.OS !== 'web' ? CameraType.back : CameraType.front;

  return (
		<View style={styles.container}>
			{!permission &&
				<View>
					<Text>Requesting permission...</Text>
				</View>
			}
			{!permission?.granted &&
				<View>
					<Text>We need your permission to show the camera</Text>
					<Pressable style={styles.button} onPress={requestPermission} title="grant permission" />
				</View>
			}
			{permission?.granted &&
				<View style={styles.cameraContainer}>
					<Camera 
						type={type}
						ref={videoRef}
					/>
					{/* <View>
						<Pressable style={styles.button} onPress={() => {
							if (isRecording) {
								videoRef.current.stopRecording();
								setIsRecording(false);
							} else {
								videoRef.current.startRecording();
								setIsRecording(true);
							}
						}}>
							<Text style={styles.text}>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
						</Pressable>
					</View> */}
				</View>
			}
		</View>
  );
};

export default CameraView;
