import React, { useState, useEffect } from 'react';
import { useNunito, Nunito } from '../Util/Nunito';
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Button,
} from 'react-native';
import {
	FlatList,
	TextInput,
	TouchableOpacity,
} from 'react-native-gesture-handler';
import Notification from '../Components/Notification';
import { useIsFocused } from '@react-navigation/native';

const Likes = ({ navigation }) => {
	//const isFocused = useIsFocused();
	//const [check, setCheck] = useState(0);
	const [allLikes, setLikes] = useState([
		{ key: 1, name: 'Netanel', time: 10, timeType: 'h' },
		{ key: 2, name: 'Ofek', time: 35, timeType: 's' },
		{ key: 3, name: 'Nadam', time: 48, timeType: 'm' },
		{ key: 3, name: 'Gabner', time: 3, timeType: 'h' },
		{ key: 3, name: 'Mesibolbol', time: 4, timeType: 'h' },
		{ key: 3, name: 'Nadam', time: 48, timeType: 'm' },
		{ key: 3, name: 'Nadam', time: 48, timeType: 'm' },
		{ key: 3, name: 'Nadam', time: 48, timeType: 'm' },
		{ key: 3, name: 'Nadam', time: 48, timeType: 'm' },
		{ key: 3, name: 'Nadam', time: 48, timeType: 'm' },
		{ key: 3, name: 'Nadam', time: 48, timeType: 'm' },
		{ key: 3, name: 'Nadam', time: 48, timeType: 'm' },
		{ key: 4, name: 'Trash', time: 6, timeType: 'h' },
	]);
	return (
		
		<SafeAreaView style={styles.whiteBack}>
			<View style={styles.whiteBack}>
				{/*isFocused ? setCheck(1) : alert(1)*/}
				<View style={styles.container}>
					<View style={styles.header}>
						<Text
							style={{
								fontSize: 19,
								fontFamily: Nunito.NunitoSans_700Bold,
								fontWeight: '700',
								paddingHorizontal: 8000 / width,
								paddingBottom: 12,
							}}
						>
							Inbox
						</Text>
					</View>

					<FlatList
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{
							paddingBottom: height/4,
						  }}
						style={{flex:1}}
						data={allLikes}
						renderItem={({ item }) => (
							<Notification
							style={{flex:1}}
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

export default Likes;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const camSize = 28;
const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		backgroundColor: 'white',
		height,
	},
	bigText: {
		fontSize: 30,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	img: {
		width: camSize,
		height: camSize,
		tintColor: 'black',
		marginTop: -8,
	},
	whiteBack: {
		backgroundColor: 'white',
		paddingTop: 10,
	},
});
