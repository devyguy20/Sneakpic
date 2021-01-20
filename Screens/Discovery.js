import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	Button,
	SafeAreaView,
	Alert,
	Keyboard,
} from 'react-native';
import BouncyView from 'react-native-bouncy-touchable';
import dummyArr from '../Util/dummyImageArr';
import { useNunito, Nunito } from '../Util/Nunito';
import {
	FlatList,
	TouchableOpacity,
	TextInput,
	ScrollView,
	ScrollViewBase,
	TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Album from '../Components/DiscoveryAlbum';
import SearchBar from '../Components/SearchBar';
import Search from './Search';

class Discovery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSearching: false,
			posts: [
				{ img: require('../assets/dummy3.jpg'), title: 'Satisfying' },
				{ img: require('../assets/dummy3.jpg'), title: 'Funny' },
				{ img: require('../assets/dummy3.jpg'), title: 'Learning' },
				{ img: require('../assets/dummy2.jpg'), title: 'Lifestyle' },
				{ img: require('../assets/dummy.jpg'), title: 'Food' },
				{ img: require('../assets/dummy3.jpg'), title: 'Beauty' },
				{ img: require('../assets/dummy.jpg'), title: 'Sports' },
				{ img: require('../assets/dummy.jpg'), title: 'Fitness' },
				{ img: require('../assets/dummy2.jpg'), title: 'Art' },
				{ img: require('../assets/dummy2.jpg'), title: 'Ideas' },
				{ img: require('../assets/dummy3.jpg'), title: 'Decor' },
				{ img: require('../assets/dummy3.jpg'), title: 'Inspiration' },
			],
		};
	}
	changeToSearchMode() {
		this.setState({
			...this.state,
			isSearching: true,
		});
	}
	changeToDiscoveryMode() {
		this.setState({
			...this.state,
			isSearching: false,
		});
		Keyboard.dismiss();
	}
	goToForYou() {
		this.props.navigation.navigate('imgMode', {
			idx: 0,
			posts: dummyArr,
		});
	};
	goToAlbums() {
		this.props.navigation.navigate('albums');
	}
	render() {
		const { navigation } = this.props;
		const { posts, isSearching } = this.state;
		return (
			<View
				style={{ ...styles.whiteBack }}
				alwaysBounceVertical
				scrollBarThumbImage={null}
			>
				<ScrollView showsVerticalScrollIndicator={false}>
					<SearchBar
						changeToSearchMode={this.changeToSearchMode.bind(this)}
						changeToDiscoveryMode={this.changeToDiscoveryMode.bind(this)}
						isSearching={isSearching}
					/>
					<View
						style={{
							...styles.container,
							opacity: this.state.isSearching ? 0 : 1,
							height: this.state.isSearching ? 0 : '100%',
						}}
					>
						<View style={styles.up}>
							{/*
						
					
						<TextInput
							onFocus={() =>
								this.setState({ ...this.state, isSearching: true })
							}
							style={styles.input}
							placeholder="Search"
						/>
						*/}
							<View>
								<View>
								<TouchableWithoutFeedback style={styles.forYouBtn}
									delay={40}
									scale={1.05}
									onPress={() => this.goToForYou()}
									>
										<Text
											style={{
												alignSelf: 'center',
												fontSize: 15,
												color: 'white',
												fontWeight: 'bold',
												fontFamily: Nunito.NunitoSans_800ExtraBold,
											}}
										>
											For You
										</Text>
									</TouchableWithoutFeedback>
								</View>
									<View style={styles.coolLine} />
								<Text style={styles.discoveryText}>Discovery</Text>
								{/* Posts goes here*/}
								<FlatList
									numColumns={2}
									data={posts}
									keyExtractor={(item, index) => 'glizzy' + index}
									renderItem={({ item }) => {
										console.log(item);
										return (
											<Album
												navigation={this.props.navigation}
												goToAlbums={this.goToAlbums}
												img={item.img}
												title={item.title}
											/>
										);
									}}
								/>
							</View>
						</View>
					</View>
					<View>
						<Search
							navigation={navigation}
							isSearching={isSearching}
							changeToDiscoveryMode={this.changeToDiscoveryMode.bind(this)}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

// const Discovery = () => {
// 	const [posts, setPosts] = useState([
// 		require('../assets/dummy.jpg'),
// 		require('../assets/dummy2.jpg'),
// 	]);
// 	const [isSearching, setSearch] = useState(false);

// 	const handleSearchLogic = (isSearching) => {
// 		if (isSearching) {
// 			setStyle({});
// 			return;
// 		}
// 		setStyle({});
// 		return;
// 	};
// 	const renderSearch = () => {
// 		if (!isSearching) {
// 			return (
// 				<SafeAreaView style={styles.whiteBack}>
// 					<View style={styles.container}>
// 						<View style={styles.up}>
// 							<TextInput
// 								onFocus={() => setSearch(true)}
// 								style={styles.input}
// 								placeholder="Search"
// 							/>
// 							<TouchableOpacity>
// 								<View style={styles.forYouBtn}>
// 									<Text
// 										style={{
// 											textAlign: 'center',
// 											fontSize: 15,
// 											color: 'white',
// 											fontWeight: 'bold',
// 										}}
// 									>
// 										For You
// 									</Text>
// 								</View>
// 								<View style={styles.coolLine} />
// 							</TouchableOpacity>
// 							<Text style={styles.discoveryText}>Discovery</Text>
// 							{/* Posts goes here*/}
// 							<FlatList
// 								numColumns={2}
// 								data={posts}
// 								keyExtractor={(item, index) => 'glizzy' + index}
// 								renderItem={({ item }) => {
// 									return <Post img={item} />;
// 								}}
// 							/>
// 						</View>
// 					</View>
// 				</SafeAreaView>
// 			);
// 		} else {
// 			return <Search />;
// 		}
// 	};

// 	return renderSearch();
// 	//(
// 	// <SafeAreaView style={styles.whiteBack}>
// 	// 	<View style={styles.container}>
// 	// 		<View style={styles.up}>
// 	// 			<TextInput style={styles.input} placeholder="Search" />
// 	// 			<TouchableOpacity>
// 	// 				<View style={styles.forYouBtn}>
// 	// 					<Text
// 	// 						style={{
// 	// 							textAlign: 'center',
// 	// 							fontSize: 15,
// 	// 							color: 'white',
// 	// 							fontWeight: 'bold',
// 	// 						}}
// 	// 					>
// 	// 						For You
// 	// 					</Text>
// 	// 				</View>
// 	// 				<View style={styles.coolLine} />
// 	// 			</TouchableOpacity>
// 	// 			<Text style={styles.discoveryText}>Discovery</Text>
// 	// 			{/* Posts goes here*/}
// 	// 			<FlatList
// 	// 				numColumns={2}
// 	// 				data={posts}
// 	// 				keyExtractor={(item, index) => 'glizzy' + index}
// 	// 				renderItem={({ item }) => {
// 	// 					return <Post img={item} />;
// 	// 				}}
// 	// 			/>
// 	// 		</View>
// 	// 	</View>
// 	// </SafeAreaView>
// 	//);
// };

export default Discovery;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const imageSize = 90;
const postWidth = width / 2.1;
const postHeightRation = postWidth * 1.6;
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	header: {
		flexDirection: 'row',
		width,
		marginBottom: 14,
		position: 'relative',
	},
	whiteBack: {
		backgroundColor: 'white',
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		tintColor: 'white',
		backgroundColor: 'white',
		height,
	},
	bigText: {
		fontSize: 30,
	},
	discoveryText: {
		fontFamily: Nunito.NunitoSans_700Bold,
		marginTop: 12000 / height,
		marginBottom: 10000 / height,
		fontSize: 17.5,
		marginLeft: 6000 / width,
		fontWeight: 'bold',
	},
	forYouBtn: {
		marginTop: 2,
		backgroundColor: '#ff009d',
		color: 'white',
		tintColor: 'white',
		borderRadius: 8,
		marginHorizontal: width / 50,
		borderColor: '#ff009d',
		borderWidth: 24,
	},
	coolLine: {
		opacity: 0.65,
		backgroundColor: '#f4f4f4',
		marginTop: 20,
		width: width / 1.15,
		height: 1.5,
		alignSelf: 'center',
	},
	input: {
		height: 40,
		marginTop: 6,
		marginBottom: 10,
		fontSize: 14,
		width: width / 1.15,
		backgroundColor: '#f2f2f2',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black',
		borderRadius: 30,
		paddingHorizontal: 20,
		alignSelf: 'center',
		marginHorizontal: 15,
		fontWeight: '600',
	},
});
