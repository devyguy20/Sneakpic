import React, { useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Dimensions,
	StatusBar,
	Text,
	View,
	Image,
	Alert,
} from 'react-native';
import {
	FlatList,
	ScrollView,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import BouncyView from 'react-native-bouncy-touchable';
import CoolSendCheckbox from '../Components/CoolSendCheckbox';
import Recent from '../Components/Recent';
import { Nunito } from '../Util/Nunito';
import SearchBar from '../Components/SearchBar';
import firebase from 'firebase';
import {uploadImage} from "../Util/FireBasePictures"
const SendScreen = ({ navigation, route }) => {
	const { photo } = route.params;
	const [recent, setRecent] = useState([
		{ name: 'Yosi Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Moti Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Meny Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Yoshi Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Money Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Mooney Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Yosi Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Yosi Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Yosi Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Yosi Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Yosi Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Yosi Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Yosi Bublil', img: require('../assets/dummy4.jpg') },
		{ name: 'Yosi Bublil', img: require('../assets/dummy4.jpg') },
	]);
	function handleDone() {
		Alert.alert(`Sent!`);
		uploadImage(photo).then((value) => {
		var storageRef = firebase.storage().ref('/images/'+ photo.slice(photo.lastIndexOf('/') + 1, photo.length));
		storageRef.getDownloadURL().then((url) => {
			alert(url);
		}, function(error){
			alert(error);
		});
		navigation.navigate('HOMe');

		});


	}
	/*const uploadImage = async (uri) => {
		const response = await fetch(uri);
		const blob = await response.blob();
		//
		console.log(blob);
		var ref = firebase.storage().ref().child('/images/my-image2');
		return ref.put(blob);
	};*/
	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			<StatusBar hidden={false}/>
			<View style={{ backgroundColor: 'white', flex: 1 }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					{/*SEND TO (TITLE) */}
					<View style={styles.container}>
						<Text
							style={{
								fontSize: 18,
								fontFamily: Nunito.NunitoSans_700Bold,
								left: 16,
							}}
						>
							Send To
						</Text>
						<TouchableWithoutFeedback
							scale={1.4}
							delay={40}
							onPressOut={() => navigation.navigate('Camera')}
							style={{ paddingHorizontal: 5 }}
						>
							<Image
								source={require('../assets/exit.png')}
								style={styles.exit}
							/>
						</TouchableWithoutFeedback>
					</View>
					{/* SEARCH BAR */}
					<View style={{ marginTop: 5, marginBottom: 10 }}>
						{/* <SearchBar /> */}
						<View style={styles.search}>
							<TextInput placeholder="Search" style={styles.input} />
						</View>
					</View>
					{/* WEIRD ADD TO MOMENT THING */}
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginBottom: 10,
							}}
						>
							<Image
								source={require('../assets/editMoment.png')}
								style={styles.img}
							/>
							<Text
								style={{
									color: 'black',
									fontFamily: Nunito.NunitoSans_700Bold,
									fontSize: 15,
									marginLeft: 18,
								}}
							>
								New Moment
							</Text>
						</View>
						<CoolSendCheckbox />
					</View>
					{/*מגילת העצמאות של בניסטי  */}
					<View style={{ marginBottom: 14 }}>
						<Text style={styles.paragraph}>
							Share your photos and videos for 24 hours. Your like count will be
							private and visible only to you unless you choose to add your
							moment to an album.
						</Text>
					</View>
					{/* NODER COOL LINE IS BACK AGAIN*/}
					<View style={styles.coolLine} />
					{/* RECENT STUFF */}
					<View style={{ marginBottom: 10 }}>
						<Text
							style={{
								fontSize: 17,
								fontFamily: Nunito.NunitoSans_700Bold,
								left: 18,
								marginVertical: 20,
							}}
						>
							Recent
						</Text>
						<FlatList
							data={recent}
							keyExtractor={({ _, idx }) => idx}
							renderItem={({ item }) => (
								<Recent img={item.img} name={item.name} />
							)}
						/>
					</View>
				</ScrollView>
			</View>
			<View>
				<TouchableOpacity onPress={handleDone} style={styles.coolBtn}>
					<Text
						style={{
							textAlign: 'center',
							color: 'white',
							fontFamily: Nunito.NunitoSans_800ExtraBold,
							fontSize: 15,
						}}
					>
						Send
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default SendScreen;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
	search: {
		backgroundColor: 'gray',
		opacity: 0.5,
		height: 55,
		justifyContent: 'center',
		paddingHorizontal: 10,
		borderRadius: 30,
		marginBottom: 20,
		width: '90%',
		alignSelf: 'center',
	},
	container: {
		paddingBottom: 10,
		paddingTop: 15,
		width: '100%',
		justifyContent: 'space-between',
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	input: {
		color: 'black',
		fontFamily: Nunito.NunitoSans_700Bold,
	},
	img: {
		left: 10,
		width: 40,
		height: 40,
		borderRadius: 50,
		tintColor: 'black',
	},
	exit: {
		right: 10,
		width: 26,
		height: 26,
		tintColor: 'black',
	},
	paragraph: {
		fontSize: 13,
		textAlign: 'center',
		color: '#B1B1B1',
		fontFamily: Nunito.NunitoSans_600SemiBold,
		top: 8,
		width: width - 20,
		left: 10,
	},
	coolLine: {
		backgroundColor: '#f4f4f4',
		marginTop: 20,
		width: width / 1.15,
		height: 1.5,
		alignSelf: 'center',
	},
	coolBtn: {
		marginTop: 4,
		marginBottom: 7,
		backgroundColor: '#ff009d',
		color: 'white',
		tintColor: 'white',
		borderRadius: 8,
		marginHorizontal: width / 50,
		borderColor: '#ff009d',
		borderWidth: 22,
	},
});
