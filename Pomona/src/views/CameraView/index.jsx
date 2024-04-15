import { useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { View, Pressable, Platform, Text } from 'react-native';
import Svg, { path } from "react-native-svg";
import styles from './styles';

const CameraView = () => {
	const videoRef = useRef(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const type = Platform.OS !== 'web' ? CameraType.back : CameraType.front;

	const __takePicture = async () => {
		if (!videoRef.current) return;
		
		const photo = await videoRef.current.takePictureAsync({ base64: true });
		console.log(photo);
	};

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
				<View style={styles.content}>
					<View style={styles.cameraContainer}>
						<Camera 
							style={styles.camera}
							type={type}
							focusDepth={1}
							ref={videoRef}
						/>
						<View style={styles.overlay}>
							<Svg viewBox="0 0 21 21" fill="#000000">
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
									<path d="m16.5 5.5v-3.00587878c0-1.10227102-.8918463-1.99674657-1.9941126-1.99999134l-3.0058874-.00884851m5 11.01471863v3c0 1.1045695-.8954305 2-2 2h-3m-6-16.01471863-3.00588742.00884851c-1.10226624.00324477-1.99411258.89772032-1.99411258 1.99999134v3.00587878m5 11h-3c-1.1045695 0-2-.8954305-2-2v-3" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"></path>
								</g>
							</Svg>
						</View>
					</View>
					<Pressable style={styles.button} onPress={__takePicture} title="take picture">
						<Text style={{color: 'white', textAlign: 'center', fontSize: '20px'}}>Take Picture</Text>
					</Pressable>
				</View>
			}
		</View>
  );
};

export default CameraView;
