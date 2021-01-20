import React, { useState, useRef } from 'react';
import {
	Dimensions,
	ImageBackground,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';
import CoolCircle from '../Components/CoolCircle';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { set } from 'react-native-reanimated';
import { stateOptions } from '../Util/Animations';
const ChatMode = ({ route, navigation }) => {
	const { posts, idx } = route.params;

	const [state, setState] = useState(stateOptions.regular);
	const [barFinished, setFinished] = useState(false);
	const [i, setI] = useState(idx);
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
		setState(stateOptions.like);
	}
	function handlePause() {
		console.log(state);
		state == stateOptions.pause
			? setState(stateOptions.regular)
			: setState(stateOptions.pause);
	}

	return (
		<View style={{backgroundColor:'#000'}}>
		<ImageBackground style={{ width: '100%', height: '100%'}} source={curPost}>
			<StatusBar hidden={true} translucent={true} />
			<View style={{ alignSelf: 'flex-end', right: 10, top:-8}}>
			<SafeAreaView style={{flex:1, top:20}}>
			<CoolCircle
				state={state}
				setState={setState}
				time={8000}
				size={30}
				strokeColor="white"
				strokeWidth={4}
				heartSize={0}
				// setFinished is OPTIONAL
				setFinished={setFinished}
			/>
			</SafeAreaView>
			</View>
			<View
				style={{
					position: 'absolute',
					height: '100%',
					justifyContent: 'space-between',
					flexDirection: 'row',
					width: '100%',
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
				/>

				<TouchableWithoutFeedback
					onPress={nextImage}
					style={styles.moveScreen}
					onLongPress={changeToLikeMode}
				/>
			</View>
		</ImageBackground>
		</View>
	);
};

export default ChatMode;
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
	closeimg: {
		width: 28,
		height: 28,
		flexDirection: 'row',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginLeft: 16,
		shadowOpacity: 0.2,
		shadowRadius: 3,

	},
	exitContainer: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
		width: '100%',
	},
});
