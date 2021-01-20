import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Nunito } from '../Util/Nunito';

const CoolDateSlider = ({ minRange, maxRange, setValue, title, inverted }) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View
				style={{
					width: 70,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text style={styles.text}>{title}</Text>
			</View>
			<Slider
				style={{ right:10, width: width / 1.5, height: 40 }}
				minimumValue={minRange}
				maximumValue={maxRange}
				minimumTrackTintColor="darkgrey"
				maximumTrackTintColor="#f2f2f2"
				onValueChange={(val) => {
					setValue(Math.floor(val));
				}}
				inverted={false}
			/>
		</View>
	);
};

export default CoolDateSlider;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
	text: {
		fontSize:13,
		fontFamily: Nunito.NunitoSans_700Bold,
	},
});
