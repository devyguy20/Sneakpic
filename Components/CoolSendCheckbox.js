import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
const CoolSendCheckbox = () => {
	const [style, setStyle] = useState(styles.unselected);
	function toggle() {
		if (style === styles.unselected) {
			setStyle(styles.selected);
		} else {
			setStyle(styles.unselected);
		}
	}
	return (
		<TouchableOpacity onPress={toggle} style={style}>
			{style === styles.selected ? (
									<Image
									source={require('../assets/checkmark.png')}
									style={styles.checkmark}
									
								/>
			) : null}
		</TouchableOpacity>
	);
};

export default CoolSendCheckbox;
const size = 38;
const styles = StyleSheet.create({
	selected: {
		marginHorizontal:22,
		marginVertical:2,
		justifyContent: 'center',
		alignItems: 'center',
		width: size,
		height: size,
		backgroundColor: '#FF009D',
		borderRadius: 50,
	},
	unselected: {
		marginHorizontal:14,
		marginVertical:2,
		borderRadius: 50,
		width: size,
		height: size,
		borderWidth: 2.25,
		borderColor: '#EDEDED',
	},
	checkmark: {
		height:20,
		width:20,
	},
});
