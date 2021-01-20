import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Nunito } from '../Util/Nunito';

const ProfileHeader = ({ userName, lastName, firstName = '' }) => {
	return (
		<View>
			<View style={styles.header}>
				<View>
					<Text style={styles.tag}>@{userName}</Text>
					<Text style={styles.fullName}>
						{firstName} {lastName}
					</Text>
				</View>
				<TouchableOpacity>
					<Image
						style={styles.optionsImg}
						source={require('../assets/Settings.png')}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProfileHeader;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const optionsSize = 25;

const styles = StyleSheet.create({
	tag: {
		fontSize: 18,
		fontFamily: Nunito.NunitoSans_700Bold,
		color: '#000',
	},
	header: {
		flexDirection: 'row',
		width,
		position: 'relative',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 15,
		paddingBottom:10,
		paddingTop:8,
	},
	fullName: {
		fontSize: 15,
		fontFamily: Nunito.NunitoSans_600SemiBold,
		color: 'black',
		opacity: 0.35,
	},
	options: {},
	optionsImg: {
		width: optionsSize,
		height: optionsSize,
	},
});
