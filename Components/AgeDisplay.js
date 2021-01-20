import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Nunito } from '../Util/Nunito';

const AgeDisplay = ({ value }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{value}</Text>
		</View>
	);
};

export default AgeDisplay;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f2f2f2',
		padding: 30,
		marginHorizontal: 5,
		borderRadius: 6,
	},
	text: {
		fontFamily: Nunito.NunitoSans_700Bold,
	},
});
