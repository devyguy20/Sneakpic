import React, { useState } from 'react';
import { useNunito, Nunito } from '../Util/Nunito';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChatStatusManager, { generateRandomKey } from '../Util/chatStatus';
import dummyArr from '../Util/dummyImageArr';
const Chat = ({ name, time, timeType, navigation }) => {
	const goToChat = () => {
		navigation.navigate('ChatMode', {
			idx: 0,
			posts: dummyArr,
		});
	};
	const [state, setState] = useState(generateRandomKey());
	return (
		<TouchableOpacity onPress={() => goToChat()} activeOpacity={0.9}>
			<View style={styles.chatContainer}>
				<View>
					<Image style={styles.image} source={state.src} />
				</View>
				<View style={styles.details}>
					<Text style={styles.name}>{name}</Text>
					<View style={styles.row}>
						<Text style={styles.status}>{state.status}</Text>
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

export default Chat;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const imgSize = 26;
const styles = StyleSheet.create({
	chatContainer: {
		padding: 20,
		alignItems: 'center',
		width,
		height: 68,
		flexDirection: 'row',
	},
	image: {
		width: imgSize,
		height: imgSize,
	},
	row: {
		flexDirection: 'row',
	},
	time: {
		fontFamily: Nunito.NunitoSans_600SemiBold,
		fontSize: 13,
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
		fontSize: 13,
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
