import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Dimensions,
} from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';
import { log } from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const OpenAlbum = (props) => {
	const { img, goToAlbums, navigation, posts, id } = props;
	function log() {
		navigation.navigate('imgMode', {
			img,
			posts,
			idx: id,
		});
	}
	return (
		<View>
			<TouchableWithoutFeedback onPress={() => log()}>
				<Image style={styles.post} source={img} />
				<View style={styles.textContainer}></View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default OpenAlbum;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const postWidth = width / 3;
const postHeightRation = postWidth * 1.44;
const styles = StyleSheet.create({
	post: {
		borderColor: 'white',
		borderWidth: 1,
		width: postWidth,
		height: postHeightRation,
		borderRadius: 0.5,
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
		shadowOpacity: 1,
		shadowRadius: 7,
		elevation: 40,
	},
});
