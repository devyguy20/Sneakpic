import { NunitoSans_200ExtraLight } from '@expo-google-fonts/nunito-sans';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';

const ProfileData = ({ text, num }) => {
	const textStyle = (color, fontWeight, fontSize, fontFamily) => {
		return {
			textAlign: 'center',
			marginHorizontal: 12,
			marginVertical: -0.75,
			color,
			fontSize,
			fontWeight,
			fontFamily,
		};
	};

	return (
		<View style={styles.container}>
			<Text style={textStyle('black', '700', 15, Nunito.NunitoSans_800ExtraBold)}>
				{num}
			</Text>
			<Text
				style={textStyle('#C4C4C4', '400', 13.5, Nunito.NunitoSans_600SemiBold)}
			>
				{text}
			</Text>
		</View>
	);
};

export default ProfileData;

const styles = StyleSheet.create({
	container: {},
});
