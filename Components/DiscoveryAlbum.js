import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Dimensions,
	ImageBackground,
} from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';
import BouncyView from 'react-native-bouncy-touchable';
import { log } from 'react-native-reanimated';
import { HeaderBackground } from '@react-navigation/stack';

const Album = (props) => {
	const { img, title, goToAlbums, navigation } = props;
	function log() {
		navigation.navigate('album', {
			title,
		});
	}
	return (
		<View>
			<TouchableOpacity onPress={() => log()} activeOpacity={0.75}>
				<Image style={styles.post} source={img} />
				<View style={styles.textContainer}>
					<Text style={styles.text}>{title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Album;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const postWidth = width / 2.14;
const postHeightRation = postWidth * 0.65;
const styles = StyleSheet.create({
	post: {
		borderColor: '#B7B7B7',
		borderWidth: 0.2,
		margin: 4,
		width: postWidth,
		height: postHeightRation,
		borderRadius: 12,
		flex: 1,
	},
	textContainer: {
		position: 'absolute',
		top: 15,
		left: 20,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 40,
	},
	text: {
		left: -20,
		top: -18,
		fontFamily: Nunito.NunitoSans_700Bold,
		color: 'white',
		fontSize: 15.6,
		textShadowRadius: 28,
		textShadowColor: 'rgba(0,0,0, 0.75)',
		padding: 20,
	},
});
