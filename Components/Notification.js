import React, { useState } from 'react';
import { useNunito, Nunito } from '../Util/Nunito';
import { StyleSheet, Text, View, Image, Dimensions, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from "firebase"
const Notification = ({ name, time, timeType, navigation }) => {

	const user = firebase.auth().currentUser;
	//const [profileImg, setProfile] = useState('');
	//setProfile(user.photoURL);
	const [likeState, setLikeState] = useState([
		'liked',
		'follow',
		'fave',
		'faves',
	]);

	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	const randomNum = getRandomInt(4);
	
	const textAccordingToState = (state) => {
		if (state == likeState[0]) {
			return <Text style={styles.status}>liked your Moment</Text>;
		} else if (state == likeState[1]) {
			return <Text style={styles.status}>started to follow you</Text>;
		} else if (state == likeState[2]) {
			return <Text style={styles.status}>sent you a fave request</Text>;
		} else if (state == likeState[3]) {
			return <Text style={styles.status}>is now faves with you</Text>;
		}
	};

	const goToProfile = () => {
		navigation.navigate('', {
			name,
		});
	};
	return (
		<TouchableOpacity onPress={() => goToProfile()}>
			<View style={styles.likeContainer}>
				<View></View>
				<Image
					style={styles.roundedImg}
					source={{url: user.photoURL}}
					
				/>
				<View style={styles.details}>
					<Text style={styles.name}>{name}</Text>
					<View style={styles.row}>
						{textAccordingToState(likeState[randomNum])}
						<Text style={styles.time}>
							{time}
							{timeType}
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.coolLine} />
		</TouchableOpacity>
	);
};

export default Notification;
const imgSize = 40;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
	likeContainer: {
		padding: 20,
		alignItems: 'center',
		width,
		height: 68,
		flexDirection: 'row',
	},
	roundedImg: {
		borderRadius: 200,
		width: imgSize,
		height: imgSize,
	},
	row: {
		flexDirection: 'row',
	},
	time: {
		fontFamily: Nunito.NunitoSans_600SemiBold,
		fontSize: 14,
		marginHorizontal: 4,
		color: '#b7b7b7',
	},
	details: {
		marginHorizontal: 16,
	},
	name: {
		fontFamily: Nunito.NunitoSans_700Bold,
		fontSize: 15,
	},
	status: {
		fontFamily: Nunito.NunitoSans_600SemiBold,
		fontSize: 14,
		color: '#b7b7b7',
	},
	coolLine: {
		opacity:0.65,
		backgroundColor: '#f4f4f4',
		width: width / 1.15,
		height: 1.5,
		alignSelf: 'center',
	},
});
