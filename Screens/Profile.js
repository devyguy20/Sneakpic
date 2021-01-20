import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	Switch,
	ScrollView,
	Dimensions,
	SafeAreaView,
} from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';
import {
	FlatList,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native-gesture-handler';
import ProfileData from '../Components/ProfileData';
import Album from '../Components/Album';
import firebase from 'firebase';
import { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { downLoadImage, uploadImage } from '../Util/FireBasePictures';
import ProfileHeader from '../Components/ProfileHeader';
import ProfileSubHeader from '../Components/ProfileSubHeader';
import PostList from '../Components/PostList';

const Profile = ({ firstName, lastName, userName, navigation, img }) => {
	// const username = 'menomo';
	//const firstName = 'Menashe';
	// const lastName = 'Mamterionet';
	const user = firebase.auth().currentUser;
	if (!firstName) {
		firstName = '';
		lastName = 'Mamterionet';
		userName = user.displayName;
		img = user.photoURL;
	}
	const [image, setImage] = useState(img);
	// console.log(image);

	// const addCam = () => {
	// 	navigation.navigate('Camera');
	// };

	return (
		<SafeAreaView style={styles.whiteBack}>
			{/* <Image style={styles.roundedImg} source={{ uri: image }} /> */}
			<View style={styles.container}>
				<ProfileHeader userName={userName} lastName={lastName} />
				<ScrollView showsVerticalScrollIndicator={false}>
					<ProfileSubHeader image={image} user={user} setImage={setImage} />
					<View style={styles.coolLine} />
					<PostList navigation={navigation} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Profile;
const postWidth = width / 2.1;
const postHeightRation = postWidth * 1.6;
const styles = StyleSheet.create({
	container: {
		height: height,
		width: width,
		justifyContent: 'center',
		backgroundColor: '#fff',
	},

	headerText: {
		fontSize: 20,
	},

	addCam: {
		padding: 12,
		borderColor: 'white',
		borderWidth: 3,
		borderRadius: 100,
		left: 80,
		top: -30,
		width: 38,
		height: 38,
		backgroundColor: '#FF009D',
	},

	coolLine: {
		backgroundColor: '#f4f4f4',
		opacity: 0.65,
		marginTop: 20,
		width: width / 1.15,
		height: 1.5,
		alignSelf: 'center',
	},

	whiteBack: {
		backgroundColor: 'white',
	},
});
