import React, { useState } from 'react';
import { useNunito, Nunito } from '../Util/Nunito';
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
} from 'react-native';
import {
	FlatList,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Chat from '../Components/Chat';

const Chats = ({ navigation }) => {
	const [allChats, setChats] = useState([
		{ key: 1, name: 'Netanel', time: 10, timeType: 'h' },
		{ key: 2, name: 'Ofek', time: 35, timeType: 's' },
		{ key: 3, name: 'Nadam', time: 48, timeType: 'm' },
		{ key: 4, name: 'Trash', time: 6, timeType: 'h' },
		{ key: 5, name: 'Mesibolbol', time: 11, timeType: 'h' },
		{ key: 6, name: 'Gabner', time: 24, timeType: 's' },
		{ key: 7, name: 'Brahrah', time: 1, timeType: 'd' },
		{ key: 8, name: 'Lordzucc', time: 3, timeType: 'd' },
		{ key: 9, name: 'Trash', time: 3, timeType: 'd' },
		{ key: 10, name: 'Trash', time: 4, timeType: 'd' },
		{ key: 11, name: 'Trash', time: 4, timeType: 'd' },
		{ key: 12, name: 'Trash', time: 4, timeType: 'd' },
	]);

	return (
		<SafeAreaView style={styles.whiteBack}>
			<View style={styles.whiteBack}>
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.title}>Chat</Text>
						<TouchableWithoutFeedback
						onPress={() => navigation.navigate('Camera')}>
							<Image
								style={styles.img}
								source={require('../assets/Camera.png')}
							/>
						</TouchableWithoutFeedback>
					</View>
					<FlatList
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{
							paddingBottom: height / 4,
						}}
						data={allChats}
						renderItem={({ item }) => (
							<Chat
								navigation={navigation}
								name={item.name}
								time={item.time}
								timeType={item.timeType}
							/>
						)}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Chats;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const camSize = 27;
const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		backgroundColor: 'white',
		height,
	},
	bigText: {
		fontSize: 30,
	},
	input: {
		height: 40,
		marginBottom: 10,
		fontSize: 14,
		width: width / 1.26,
		backgroundColor: '#f2f2f2',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black',
		borderRadius: 30,
		paddingHorizontal: 20,
		alignSelf: 'center',
		marginHorizontal: 15,
		fontWeight: '600',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		marginBottom: 10,
	},
	img: {
		width: camSize,
		height: camSize,
		tintColor: 'black',
	},
	whiteBack: {
		backgroundColor: 'white',
		paddingTop: 10,
	},
	title: {
		fontSize: 19,
		fontFamily: Nunito.NunitoSans_700Bold,
		fontWeight: '700',
	},
});
