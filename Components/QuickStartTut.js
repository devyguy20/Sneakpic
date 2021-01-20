import React from 'react';
import { useNunito, Nunito } from '../Util/Nunito';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions,
	SafeAreaView,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const QuickStartTut = ({ text, imgName }) => {
	return (
		<SafeAreaView flex={1}>
			<View style={{ alignItems: 'center', padding: height / 40 }}>
				<Image style={styles.showcase} source={imgName} />
				<Text style={styles.text}>{text}</Text>
			</View>
		</SafeAreaView>
	);
};

export default QuickStartTut;
const size = height / 9;
const styles = StyleSheet.create({
	showcase: {
		tintColor: 'white',
		width: size,
		height: size / 1.6,
	},
	text: {
		fontFamily: Nunito.NunitoSans_700Bold,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
