import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Nunito } from '../Util/Nunito';
import ProfileData from './ProfileData';

const ProfileSubHeader = ({ image }) => {
	async function pickImage() {
		let photo = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
		});
		//setImage(photo.uri);
		uploadImage(photo.uri).then((value) => {
			var storageRef = firebase
				.storage()
				.ref(
					'/images/' +
						photo.uri.slice(photo.uri.lastIndexOf('/') + 1, photo.uri.length)
				);
			storageRef.getDownloadURL().then(
				(url) => {
					user.updateProfile({
						photoURL: url,
					});
					setImage(url);
				},
				function (error) {
					alert(error);
				}
			);
		});
		useEffect(() => {
			console.log(image);
		});
		alert(image);
	}

	return (
		<View style={styles.followers}>
			<View style={styles.imgContainer}>
				<TouchableOpacity onPress={pickImage}>
					<Image style={styles.roundedImg} source={{ uri: image }} />
				</TouchableOpacity>
			</View>
			<View style={styles.dataContainer}>
				<View style={styles.data}>
					<ProfileData text="Likes" num={'561'} />
					<ProfileData text="Followers" num={'1.4K'} />
					<ProfileData text="Faves" num={'11'} />
				</View>
				<TouchableOpacity style={styles.editContainer}>
					<View style={styles.followBtn}>
						<Text style={styles.editTxt}>Edit Profile</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProfileSubHeader;
const imageSize = 94;
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
	roundedImg: {
		borderRadius: 200,
		width: imageSize,
		height: imageSize,
	},
	followers: {
		flexDirection: 'row',
		width: '100%',
		paddingHorizontal: 1,
		justifyContent: 'center',
		paddingRight: 45,
		paddingLeft: 50,
		alignItems: 'center',
	},
	data: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
		paddingTop: 10,
	},
	dataContainer: {
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	followBtn: {
		fontFamily: Nunito.NunitoSans_760SemiBold,
		borderWidth: 1.5,
		borderColor: '#EFEFEF',
		alignSelf: 'center',
		width: width / 2,
		padding: 10,
		borderRadius: 5,
	},
	editContainer: {
		marginTop: 5,
		width: '100%',
	},
	imgContainer: {
		marginLeft: 15,
	},
	editTxt: {
		textAlign: 'center',
		fontSize: 14,
		fontFamily: Nunito.NunitoSans_700Bold,
	},
});
