import React, { useContext, useState } from 'react';
import SearchBar from '../Components/SearchBar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import UserSearch from '../Components/UserSearch';
import { User } from '../Util/User';
//
const Search = ({ isSearching, changeToDiscoveryMode, navigation }) => {
	const [users, setUsers] = useState([
		new User('moti', 'birziya', 'Moti Mitriya', require('../assets/dummy.jpg')),
		new User('Igor', 'Motirovski', 'russia', require('../assets/dummy2.jpg')),
	]);

	const height = Dimensions.get('screen').height;
	return (
		<View
			style={{
				opacity: isSearching ? 1 : 0,
				minHeight: isSearching ? height : 0,
			}}
		>
			{users.map((user) => {
				console.log(navigation);
				return (
					<UserSearch
						navigation={navigation}
						firstName={user.firstName}
						tag={user.tag}
						img={user.img}
						lastName={user.lastName}
						userName={user.tag}
					/>
				);
			})}
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({});
