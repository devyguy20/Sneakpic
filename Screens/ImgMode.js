import React, { useState, useRef } from 'react';
import {
	Dimensions,
	ImageBackground,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	Image,
	Alert,
	Text,
	View,
	SafeAreaViewBase,
} from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';
import CoolCircle from '../Components/CoolCircle';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { set } from 'react-native-reanimated';
import { stateOptions } from '../Util/Animations';
const ImgMode = ({ route, navigation }) => {
	const { posts, idx } = route.params;

	const [state, setState] = useState(stateOptions.regular);
	const [barFinished, setFinished] = useState(false);
	const [strokeColor, setStrokeColor] = useState('white');
	const [i, setI] = useState(idx);
	const username = "gabigay300";
	const [curPost, setCurPost] = useState(posts[i]);
	useEffect(() => {
		setCurPost(posts[i]);
	}, [i]);

	useEffect(() => {
		if (barFinished) {
			nextImage();
		}
	}, [barFinished]);

	function nextImage() {
		if (state !== stateOptions.like) {
			if (i < posts.length - 1) {
				setI((curI) => curI + 1);
			} else {
				navigation.goBack();
			}
			setState(stateOptions.resetData);
			setStrokeColor("white");
		}
		//setState(stateOptions.resetData);
		//setPosts(posts[i.current]);
	}
	function prevImage() {
		if (state !== stateOptions.like) {
			if (i > 0) {
				setI((curI) => curI - 1);
			} else {
				navigation.goBack();
			}
			setState(stateOptions.resetData);
		}
		return;

		navigation.goBack();
		//setState(stateOptions.resetData);
		//setPosts(posts[i.current]);
	}
	function changeToLikeMode() {
		setStrokeColor("#FF009D");
		setState(stateOptions.like);
	}
	function handlePause() {
		console.log(state);
		state == stateOptions.pause
			? setState(stateOptions.regular)
			: setState(stateOptions.pause);
	}
	function goToProfile(){
		Alert.alert("Profile");
	}

	return (
		<ImageBackground style={{ width: '100%', height: '100%' }} source={curPost}>
			<SafeAreaView style={{flex:1, top:20}}>
			<StatusBar hidden={true} translucent={true}/>
			<View style={{ flexDirection:'row' }}>
			<TouchableWithoutFeedback
						onPress={() => navigation.goBack()}
						style={{ width:20, height:20, marginTop:0, marginLeft:6, marginRight:10, backgroundColor:'transparent' }}
					>
						<Image
							onPress={() => navigation.goBack()}
							style={styles.backImg}
							source={require('../assets/back.png')}
						/>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						onPress={() => goToProfile()}
						style={{ width:32, height:32, top:-5, shadowColor:'black', shadowOpacity:0.15, shadowRadius:4, borderRadius:30, shadowOffset: { width: 0, height: 0 } }}
					>
						<Image
							source={require('../assets/defaultProfile.png')}
							onPress={() => goToProfile()}
							style={styles.profileImg}
						/>
					</TouchableWithoutFeedback>
					<Text style={styles.nameStyle} onPress={() => goToProfile()}>{username}</Text>
					<View style={{ position: 'absolute', right: 10, top:-10 }}>
			<CoolCircle
				state={state}
				setState={setState}
				time={8000}
				size={42}
				strokeWidth={4}
				strokeColor={strokeColor}
				heartSize={20}
				// setFinished is OPTIONAL
				setFinished={setFinished}
			/>
			<Text style={styles.likeCount}>1.3k</Text>
			</View>
			</View>
			<View
				style={{
					justifyContent: 'space-between',
					flexDirection: 'row',
				}}
			>
				<TouchableWithoutFeedback
					onPress={prevImage}
					onLongPress={changeToLikeMode}
					style={styles.moveScreen}
				/>
				<TouchableWithoutFeedback
					onLongPress={changeToLikeMode}
					style={styles.likeStyle}
					onPress={handlePause}
				/>

				<TouchableWithoutFeedback
					onPress={nextImage}
					style={styles.moveScreen}
					onLongPress={changeToLikeMode}
				/>
			</View>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default ImgMode;
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
	moveScreen: {
		height: '100%',
		width: width / 3,
	},
	likeStyle: {
		width: width / 3,
		height: '100%',
	},
	backImg: {
		shadowColor:'black',
		shadowOpacity:0.35,
		shadowRadius:4,
		borderRadius:30,
		shadowOffset: { width: 0, height: 0 },
		width: '100%',
		height: '100%',
		tintColor:'white'
	},
	profileImg: {
		width: '100%',
		height: '100%',
	},
	likeCount: {
		alignSelf:'center',
		fontFamily: Nunito.NunitoSans_800ExtraBold,
		fontSize:13,
		top:2,
		opacity:0.9,
		color:'white',
		padding:2,
		textShadowColor:'rgba(0, 0, 0, 0.25)',
		textShadowRadius:4

	},
	nameStyle: {
		alignSelf:'center',
		fontFamily: Nunito.NunitoSans_700Bold,
		fontSize:15,
		top:-4,
		left:6,
		opacity:0.95,
		color:'white',
		padding:2,
		textShadowColor:'rgba(0, 0, 0, 0.55)',
		textShadowRadius:4

	},
});
