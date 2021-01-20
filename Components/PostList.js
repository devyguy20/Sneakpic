import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Album from './Album';

const PostList = ({ navigation }) => {
	const [posts, setPosts] = useState([
		{ img: require('../assets/dummy.jpg'), title: 'Moments' },
		{ img: require('../assets/dummy2.jpg'), title: 'Food' },
		{ img: require('../assets/dummy3.jpg'), title: 'Workouts' },
		{ img: require('../assets/dummy.jpg'), title: 'Menashe' },
		{ img: require('../assets/dummy.jpg'), title: 'Moments' },
		{ img: require('../assets/dummy2.jpg'), title: 'Food' },
		{ img: require('../assets/dummy3.jpg'), title: 'Workouts' },
		{ img: require('../assets/dummy.jpg'), title: 'Menashe' },
	]);
	return (
		<View style={styles.list}>
			{/* Posts goes here*/}
			<FlatList
				flex={1}
				marginBottom={height/4}
				numColumns={2}
				data={posts}
				keyExtractor={(item, index) => 'glizzy' + index}
				renderItem={({ item }) => {
					return (
						<Album navigation={navigation} title={item.title} img={item.img} />
					);
				}}
			/>
		</View>
	);
};
const height = Dimensions.get('screen').height;
export default PostList;

const styles = StyleSheet.create({
	list: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
	},
});
