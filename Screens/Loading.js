import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import meny from '../assets/Splashlogo.png';
import { FileSystem } from 'expo';

const Loading = () => {
	const [logoLoaded, setLoaded] = useState(false);

	return (
		<View>
			<Image source={meny} style={styles.logo} />
			<Text>Loading...</Text>
		</View>
	);
};

export default Loading;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
});
