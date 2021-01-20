import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	StatusBar,
	Platform,
	Image,
	TouchableHighlight,
	TouchableWithoutFeedback,
} from 'react-native';
import TouchableBounce from 'react-native-bouncy-touchable';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import {
	FontAwesome,
	Ionicons,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import BouncyView from 'react-native-bouncy-touchable';

export default class SneakCamera extends React.Component {
	state = {
		hasPermission: null,
		cameraType: Camera.Constants.Type.back,
	};

	async componentDidMount() {
		this.getPermissionAsync();
	}

	getPermissionAsync = async () => {
		// Camera roll Permission
		if (Platform.OS === 'ios') {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
			}
		}
		// Camera Permission
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasPermission: status === 'granted' });
	};

	handleCameraType = () => {
		const { cameraType } = this.state;

		this.setState({
			cameraType:
				cameraType === Camera.Constants.Type.back
					? Camera.Constants.Type.front
					: Camera.Constants.Type.back,
		});
	};

	takePicture = async () => {
		if (this.camera) {
			let photo = await this.camera.takePictureAsync();
			this.props.navigation.navigate('Edit', {
				params: {
					photo,
				},
			});
		}
	};
	exitCamera = async () => {
		this.props.navigation.navigate('HOMe')
	};

	pickImage = async () => {
		let photo = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
		});
//		alert(photo.uri)
		this.props.navigation.navigate('Edit', {
		params: {
			photo,
			},
		});
	};

	render() {
		const { hasPermission } = this.state;
		if (hasPermission === null) {
			return <View />;
		} else if (hasPermission === false) {
			return <Text>Camera permissions have to be enabled.</Text>;
		} else {
			return (
				<View style={{ flex: 1 }}>
				<StatusBar hidden />
					<Camera
						ratio="16:9"
						style={{ flex: 1 }}
						type={this.state.cameraType}
						ref={(ref) => {
							this.camera = ref;
						}}
					>
							<TouchableWithoutFeedback
								style={{
									alignSelf: 'flex-start',
									alignItems: 'center',
									backgroundColor: 'transparent',
								}}
								onPress={() => this.exitCamera()}
							>
								<SafeAreaView>
								<Image
									style={styles.closeimg}
									source={require('../assets/exit.png')}
								/>
								</SafeAreaView>
							</TouchableWithoutFeedback>
						<SafeAreaView
							onTouchMove={() => console.log('Moving')}
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'space-between',
								margin: 20,
							}}
						>
							<TouchableOpacity
							activeOpacity={1}
								style={{
									alignSelf: 'flex-end',
									alignItems: 'center',
									backgroundColor: 'transparent',
								}}
								onPress={() => this.pickImage()}
							>
								<Image
									style={styles.img}
									source={require('../assets/gallery.png')}
								/>
							</TouchableOpacity>
							<BouncyView
								scale={1.2}
								delay={10}
								style={{
									alignSelf: 'flex-end',
									alignItems: 'center',
									backgroundColor: 'transparent',
								}}
								onPress={() => this.takePicture()}
							>
							<View style={styles.circle}/>
							</BouncyView>
							<BouncyView
								scale={1.4}
								delay={10}	
								style={{
									alignSelf: 'flex-end',
									alignItems: 'center',
									backgroundColor: 'transparent',
								}}
								onPress={() => this.handleCameraType()}
							>
								<Image
									style={styles.img}
									source={require('../assets/flipCam.png')}
								/>
							</BouncyView>
						</SafeAreaView>
					</Camera>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	img: {
		width: 40,
		height: 40,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,

		elevation: 10,
	},
	circle: {
		width: 78,
		height: 78,
		borderColor: 'white',
		borderWidth: 5.5,
		borderRadius: 500,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginBottom: 8,
		shadowOpacity: 0.2,
		shadowRadius: 4,

		elevation: 10,
	},
	camtext: {
		fontSize:17,
		textAlignVertical: 'center',
		textAlign: 'center',
		color:'white',
		fontWeight:'600',
		paddingBottom: 8,
		borderRadius: 500,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: 6,
	},
	closeimg: {
		width: 28,
		height: 28,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginLeft: 16,
		shadowOpacity: 0.2,
		shadowRadius: 4,

		elevation: 10,
	},
});
