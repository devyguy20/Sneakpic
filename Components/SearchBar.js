import React, { Component, useEffect, useRef, useState } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
} from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function SearchBar(
	{ changeToSearchMode, changeToDiscoveryMode, isSearching },
	props
) {
	const text = useRef('');
	function handleDiscovery() {
		changeToDiscoveryMode();
		text.current.clear();
	}

	return (
		<View style={[styles.container, props.style]}>
			<View style={styles.inputBox}>
				<FeatherIcon name="search" style={styles.inputLeftIcon}></FeatherIcon>
				<TextInput
					blurOnSubmit={true}
					autoCapitalize={false}
					autoCorrect={false}
					onScroll={() => changeToDiscoveryMode()}
					selectionColor={'rgba(171,168,186,1)'}
					ref={(input) => (text.current = input)}
					onFocus={() => changeToSearchMode()}
					placeholder="Search"
					returnKeyType="search"
					placeholderTextColor="rgba(171,168,186,1)"
					style={styles.inputStyle}
				></TextInput>
				<MaterialCommunityIconsIcon
					style={{
						...styles.inputRightIcon,
						opacity: isSearching ? 100 : 0,
					}}
					name="close-circle"
					onPress={handleDiscovery}
					onPress={() => text.current.clear()}
				></MaterialCommunityIconsIcon>
			</View>
			<TouchableOpacity
				style={{
					...styles.rightIconButton,
					width: isSearching ? 90 : 0,
				}}
				onPress={handleDiscovery}
			>
				<Text style={styles.cancel}>Cancel</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: -20,
		marginBottom: -20,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 8,
		paddingRight: 8,
		height: 100,
	},
	inputBox: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'rgba(242,242,242,1)',
		borderRadius: 100,
		borderWidth: 8,
		borderColor: 'rgba(242,242,242,1)',
		left: 8,
		width: 301,
		top: -2,
		height: 40,
	},
	inputLeftIcon: {
		color: 'rgba(171,168,186,1)',
		fontSize: 20,
		paddingBottom: 1.25,
		alignSelf: 'center',
		paddingLeft: 5,
		paddingRight: 5,
	},
	inputStyle: {
		height: 26,
		fontFamily: Nunito.NunitoSans_700Bold,
		alignSelf: 'flex-start',
		fontSize: 15,
		lineHeight: 18,
		color: '#000',
		flex: 1,
	},
	inputRightIcon: {
		color: 'rgba(171,168,186,1)',
		fontSize: 22,
		alignSelf: 'center',
		paddingLeft: 5,
		paddingRight: 5,
	},
	rightIconButton: {
		alignItems: 'center',
		padding: 8,
	},
	cancel: {
		color: 'black',
		fontFamily: Nunito.NunitoSans_700Bold,
		fontSize: 14,
		marginLeft: 12,
	},
});

export default SearchBar;
