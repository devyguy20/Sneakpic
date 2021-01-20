import React from 'react';
import { useNunito, Nunito } from '../Util/Nunito';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const UserSearch = ({ firstName, userName, img, navigation, lastName }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('UserProfile', {
					userName,
					lastName,
					firstName,
					img,
				});
			}}
		>
			<View style={styles.container}>
				<Image style={styles.img} source={img} />
				<View style={styles.details}>
					<Text style={styles.tagStyle}>{userName}</Text>
					<Text style={styles.nameStyle}>{firstName}</Text>
				</View>
			</View>
			<View style={styles.coolLine} />
		</TouchableOpacity>
	);
};

export default UserSearch;
const imgSize = 40;
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 12,
		alignItems: 'center',
	},
	nameStyle: {
		fontFamily: Nunito.NunitoSans_600SemiBold,
		fontSize: 13,
		marginTop: -2,
		color: '#A9A9A9',
	},
	tagStyle: {
		fontFamily: Nunito.NunitoSans_700Bold,
		color: '#000',
		fontSize: 15,
		color: 'black',
	},
	img: {
		width: imgSize,
		height: imgSize,
		borderRadius: 100,
	},
	details: {
		marginLeft: 10,
	},
	coolLine: {
		backgroundColor: '#f4f4f4',
		width: '90%',
		height: 1.5,
		alignSelf: 'center',
	},
});
