import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Nunito } from '../Util/Nunito';
import CoolSendCheckbox from './CoolSendCheckbox';
const Recent = ({ img, name }) => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Image source={img} style={styles.img} />
				<Text style={styles.name}>{name}</Text>
			</View>
			<CoolSendCheckbox />
		</View>
	);
};

export default Recent;
const size = 40;
const styles = StyleSheet.create({
	container: {
		marginLeft:15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	name: {
		marginLeft: 10,
		fontSize: 15,
		fontFamily: Nunito.NunitoSans_700Bold
	},
	img: { width: size, height: size, borderRadius: 50 },
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
