import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const LazyImage = (props) => {
	return (
		<ImageBackground
			onLoad={() => props.setLoad(true)}
			style={{ width: '100%', height: '100%', zIndex: 0 }}
			source={{ uri: props.src }}
		>
			{props.children}
		</ImageBackground>
	);
};

export default LazyImage;

const styles = StyleSheet.create({});
