import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';
const width = Dimensions.get('window').width;
const Textfield = ({
	placeholder,
	passwordMode = false,
	type = 'default',
	setMethod,
}) => {
	const blurStyle = {
		textAlignVertical: 'center',
		width: width / 1.1,
		fontSize: 16,
		fontWeight: '600',
		backgroundColor: '#EFEFEF',
		padding: 2,
		borderRadius: 8,
		borderWidth: 20,
		borderColor: '#EFEFEF',
		margin: 12,
		fontFamily: Nunito.NunitoSans_700Bold,
	};

	const foucusStyle = {
		textAlignVertical: 'center',
		width: width / 1.1,
		fontSize: 16,
		fontWeight: '600',
		backgroundColor: '#EFEFEF',
		padding: 2,
		borderRadius: 8,
		borderWidth: 20,
		borderColor: '#EFEFEF',
		margin: 12,
		fontFamily: Nunito.NunitoSans_700Bold,
	};

	const [styleState, setStyle] = useState(blurStyle);

	const changeToBlurStyle = () => {
		setStyle(blurStyle);
	};
	const changeToFoucusStyle = () => {
		setStyle(foucusStyle);
	};
	return (
		<View>
			<TextInput
				onChangeText={(val) => setMethod(val)}
				keyboardType={type}
				secureTextEntry={passwordMode}
				onBlur={() => changeToBlurStyle()}
				placeholder={placeholder}
				style={styleState}
				onFocus={() => changeToFoucusStyle()}
			/>
		</View>
	);
};

export default Textfield;

const styles = StyleSheet.create({});
