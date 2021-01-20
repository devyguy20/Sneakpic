import React from 'react';
import { useEffect, useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	Button,
	navigation,
	Image,
	SafeAreaView,
	FlatList,
} from 'react-native';
import {
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { useNunito, Nunito } from '../Util/Nunito';
import OpenAlbum from '../Components/OpenAlbum';
import dummyArr from '../Util/dummyImageArr';
const AlbumPage = ({ route, navigation }) => {
	// useEffect(() => {
	//     //fetch()
	// })
	const { title } = route.params;

	return (
		<View style={{ backgroundColor: 'white' }}>
			<SafeAreaView style={{top:20}}>
				<View style={styles.container}>
					<TouchableWithoutFeedback
						onPress={() => navigation.goBack()}
						style={{ paddingRight: 26, paddingBottom: 12, paddingTop: 8 }}
						hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
					>
						<Image
							onPress={() => navigation.goBack()}
							style={styles.backImg}
							source={require('../assets/back.png')}
						/>
					</TouchableWithoutFeedback>
					<Text style={styles.title}>{title}</Text>
				</View>
				<FlatList style={{alignSelf:'center'}}
					contentContainerStyle={{
					paddingBottom: height/4,
					}}
					showsVerticalScrollIndicator={false}
					numColumns={3}
					data={dummyArr}
					keyExtractor={(item, index) => 'glizzy' + index}
					renderItem={({ item, index }) => {
						return (
							<OpenAlbum
								posts={dummyArr}
								navigation={navigation}
								title={item.title}
								img={item}
								id={index}
							/>
						);
					}}
				/>
			</SafeAreaView>
		</View>
		
	);
};

export default AlbumPage;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingBottom: 8,
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	title: {
		textAlign: 'center',
		left: -25,
		fontSize: 17,
		fontFamily: Nunito.NunitoSans_700Bold,
		flex: 1,
		top: 5,
	},
	backImg: {
		left: 10,
		right: 20,
		width: 20,
		height: 20,
	},
});
