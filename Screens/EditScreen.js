import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	Text,
	StatusBar,
	View,
	TouchableHighlight,
	Image,
	Dimensions,
	Alert,
	ImageBackground,
	Keyboard,
	SnapshotViewIOSComponent,
	SafeAreaViewBase,
} from 'react-native';
import BouncyView from 'react-native-bouncy-touchable';
import AwesomeAlert from 'react-native-awesome-alerts';
import {
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Draggable from 'react-native-draggable';
import EditCaption from '../Screens/EditCaption';
import EditSketch from '../Screens/EditSketch';
import { Nunito } from '../Util/Nunito';
import Label from '../Components/Label';
const EditScreen = ({ route, navigation }) => {
	const imgURI = route.params.params.photo.uri;
	const [showState, setShowState] = useState(false);
	const [message, setShowMessage] = useState('');
	const [showBtn, setShowBtn] = useState(false);
	const [title, setShowTitle] = useState('');
	const [draggables, setDraggables] = useState([]);
	const [isInGiphyMode, setGiphyMode] = useState(false);

	useEffect(() => {
		Keyboard.addListener('keyboardDidHide', () => {
			Keyboard.dismiss();
		});
	});
	function exitCamera() {
		navigation.navigate('Camera');
	}
	function handleAlertClose() {
		setShowState(false);
	}
	function handleConfirm() {
		setShowTitle('Done!');
		setShowMessage('');
		setShowBtn(false);
	}
	function addDraggable() {
		navigation.navigate('EditCaption', {
			photo: imgURI,
		});
	}
	function addSketch() {
		console.log("added sketch")
		navigation.navigate('EditSketch', {
			photo: imgURI,
		});
	}
	function addDraggableImage(src) {
		setDraggables([...draggables, { id: 2, src }]);
	}
	function goToSendScreen() {
		navigation.navigate('SendScreen', {
			photo: imgURI,
		});
	}
	function newMoment() {
		// Zacklin is bat sharmoota
		// added by almighty boss netanel
		setShowState(true);
		setShowBtn(true);
		setShowTitle('Share Moment?');
		setShowMessage(
			'Your moment will disappear after 24 hours. only you can see your like count unless you choose to keep your moment on an album on the preview screen.'
		);
		console.log('pressed');
	}
	function enterTrashMode() {
		console.log('T r a s h   M o d e');
	}
	function openGiphsGallery() {}
	function handleDraggables(draggable) {
		console.log(draggable);
		if (draggable.src == undefined) {
			return <Label />;
		}
		return (
			<Draggable
				x={75}
				y={100}
				animatedViewProps={{ style: { backgroundColor: 'green' } }}
				renderSize={60}
				renderColor="'rgba(52, 52, 52, 0)'"
				imageSource={draggable.src}
				isCircle
				onShortPressRelease={() => alert('touched!!')}
			/>
		);
	}

	return (
		//style=transform: [{rotateY: '180deg'}] SHOULD ROTATE ONLY SELFIE
		<View style={{ backgroundColor: 'black', flex: 1 }}>
			<AwesomeAlert
				show={showState}
				title={title}
				titleStyle={{ fontFamily: Nunito.NunitoSans_700Bold, color: 'black' }}
				messageStyle={{
					fontFamily: Nunito.NunitoSans_600SemiBold,
					color: '#AAAAAA',
					fontSize: 14,
					textAlign: 'center',
				}}
				message={message}
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={false}
				showConfirmButton={showBtn}
				showCancelButton={showBtn}
				cancelButtonTextStyle={{
					fontFamily: Nunito.NunitoSans_700Bold,
					textAlign: 'center',
					color: '#5D5D5D',
				}}
				cancelButtonStyle={{
					borderWidth: 8,
					borderColor: 'rgba(242,242,242,1)',
					borderRadius: 8,
					width: 100,
					marginHorizontal: 10,
				}}
				cancelButtonColor="rgba(242,242,242,1)"
				confirmButtonTextStyle={{
					fontFamily: Nunito.NunitoSans_800ExtraBold,
					textAlign: 'center',
				}}
				confirmButtonStyle={{
					borderWidth: 8,
					borderColor: '#ff009d',
					borderRadius: 8,
					width: 100,
					marginHorizontal: 10,
				}}
				confirmText="Share"
				cancelText="Cancel"
				confirmButtonColor="#ff009d"
				onConfirmPressed={handleConfirm}
				onCancelPressed={handleAlertClose}
				onDismiss={handleAlertClose}
			/>
			<StatusBar hidden />

			<ImageBackground source={{ uri: imgURI }} style={styles.bgImg}>
				<TouchableWithoutFeedback
					style={{
						alignSelf: 'flex-start',
						alignItems: 'center',
						backgroundColor: 'transparent',
						alignContent: 'center',
						paddingRight: 14,
					}}
					onPress={() => exitCamera()}
				>
					<SafeAreaView>
						<Image
							style={styles.closeimg}
							source={require('../assets/exit.png')}
						/>
					</SafeAreaView>
				</TouchableWithoutFeedback>
				<View style={styles.container}>
					<TouchableOpacity onPress={addDraggable} style={styles.addBtn}>
						<Image
							style={styles.editimg}
							source={require('../assets/editText.png')}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.container}>
				<TouchableOpacity onPress={addSketch} style={styles.addBtn}
						style={styles.addBtn}
					>
						<Image
							style={styles.editimg}
							source={require('../assets/editSketch.png')}
						/>
					</TouchableOpacity>
				</View>
				{draggables.map((draggable) => handleDraggables(draggable))}

				<View style={styles.container}>
					<TouchableOpacity
						style={styles.addBtn}
						onPress={() => openGiphsGallery()}
					>
						<Image
							style={styles.editimg}
							source={require('../assets/editStickers.png')}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.addBtn}
						onPress={() => alert('Beauty')}
					>
						<Image
							style={styles.editimg}
							source={require('../assets/editBeauty.png')}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.addBtn}
						onPress={() => alert('Filters')}
					>
						<Image
							style={styles.editimg}
							source={require('../assets/editFilters.png')}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.addBtn}
						onPress={() => alert('Tweaks')}
					>
						<Image
							style={styles.editimg}
							source={require('../assets/editTweaks.png')}
						/>
						<Text
							style={{
								color: 'white',
								textAlign: 'center',
								fontSize: 10.5,
								fontFamily: Nunito.NunitoSans_800ExtraBold,
								ShadowColor: 'black',
								ShadowRadius: 10,
								width: 60,
								alignSelf: 'center',
								top: 2,
								shadowOpacity: 0.35,
								shadowOffset: { width: 0, height: 0 },
							}}
						>
							Tweaks
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.container}>
					<TouchableOpacity
						onPress={() => enterTrashMode()}
						style={styles.addBtn}
					>
						<View
							//MENY ICON GOES HERE
							style={{ width: 100, height: 100, backgroundColor: 'pink' }}
						></View>
					</TouchableOpacity>
				</View>
				<SafeAreaView style={styles.sendContainer}>
					<TouchableWithoutFeedback
						scale={1.2}
						delay={10}
						onPress={goToSendScreen}
						style={styles.sendBtn}
						underlayColor={('white', 0.5)}
						activeOpacity={0.5}
					>
						<Text style={styles.sendTxt}>Send To</Text>
					</TouchableWithoutFeedback>
				</SafeAreaView>
				<SafeAreaView style={styles.momentContainer}>
					<BouncyView
						scale={1.6}
						delay={10}
						onPress={newMoment}
						style={styles.momentImg}
						underlayColor={('white', 0.5)}
						activeOpacity={0.9}
					>
						<Image
							source={require('../assets/editMoment.png')}
							style={styles.momentImg}
						/>
					</BouncyView>
					<Text
						style={{
							color: 'white',
							textAlign: 'center',
							fontSize: 10.5,
							fontFamily: Nunito.NunitoSans_800ExtraBold,
							ShadowColor: 'black',
							ShadowRadius: 10,
							padding: 5,
							shadowOpacity: 0.35,
							shadowOffset: { width: 0, height: 0 },
						}}
					>
						New Moment
					</Text>
				</SafeAreaView>
			</ImageBackground>
		</View>
	);
};

export default EditScreen;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const radius = 50;
const styles = StyleSheet.create({
	container: {
		position:'relative',
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
	exitContainer: {
		height: '100%',
	},
	sendBtn: {
		fontFamily: Nunito.NunitoSans_760SemiBold,
		textAlign: 'center',
		margin: 2.5,
		marginTop: -6,
		marginLeft: 24,
		backgroundColor: '#FF009D',
		alignSelf: 'center',
		width: 100,
		padding: 13,
		marginBottom: 6,
		borderRadius: 6,
	},
	bgImg: {
		flex: 1,
		width: width,
		height: height,
	},
	addBtn: {
		right: 4,
		marginRight: 10,
		marginBottom: 14,
		width: 38,
		height: 38,
	},
	sendContainer: {
		position: 'absolute',
		right: 10,
		bottom: 10,
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
		shadowRadius: 3,

		elevation: 10,
	},
	editimg: {
		alignContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.35,
		shadowRadius: 2,
	},
	momentImg: {
		alignSelf: 'center',
		width: 38,
		height: 38,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowRadius: 2,
		padding: 5,
		shadowOpacity: 0.1,
		shadowColor: 'black',
	},
	momentContainer: {
		position: 'absolute',
		left: 10,
		bottom: 10,
	},
	sendTxt: {
		fontFamily: Nunito.NunitoSans_800ExtraBold,
		textAlign: 'center',
		color: 'white',
	},
});
