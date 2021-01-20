import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Profile';

const UserProfile = ({ route, navigation }) => {
	// useEffect(() => {
	//     fetchStuff
	// })
	const { firstName, lastName, userName, img } = route.params;
	return (
		<Profile
			firstName={firstName}
			lastName={lastName}
			userName={userName}
			navigation={navigation}
			img={img}
		/>
	);
};

export default UserProfile;

const styles = StyleSheet.create({});
