import React, { useState, useEffect } from 'react';
import {
	Alert,
	ProgressBarAndroid,
	Dimensions,
	StyleSheet,
	Text,
	View,
	Animated,
	ProgressViewIOSComponent,
	ImageBackground,
	Image,
	Button,
} from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';
import { useIsFocused } from '@react-navigation/native';
import {
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import CoolCircle from '../Components/CoolCircle';
import { stateOptions } from '../Util/Animations';
import { useRef } from 'react';
// import CoolCircle from '../Components/CoolCircle';

// var i = 0;
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const widthBar = widthScreen / 1.3;
const RealHome = ({ route }) => {
	const i = useRef(0);
	const { gg } = route.params;
	const isFocused = useIsFocused();
	// const [value, setValue] = useState(new Animated.Value(0));
	// const [color1, setColor] = useState('rgb(255,255,255)');
	const [state, setState] = useState(stateOptions.regular);
	const [showPause, setShowPause] = useState(false);
	const [barFinished, setFinished] = useState(false);
	const [strokeColor, setStrokeColor] = useState("white");
	// const [isAbleToPause, setAbleToPause] = useState(false);
	// let meni = 0;
	// let menash = 0;

	const posts = [
		require('../assets/dummy.jpg'),
		require('../assets/dummy2.jpg'),
	];
	const [post, setPosts] = useState(posts[0]);
	if (posts[0] == post) {
		i.current = 0;
	}

	// const checkMeni = () => {
	// 	if (value['_value'] == widthBar) {
	// 		nextImage();
	// 	}
	// };
	const nextImage = () => {
		if(state !== stateOptions.like) {
			if (i.current < posts.length - 1) {
				i.current = i.current + 1;
			} else {
				i.current = 0;
			}
			setState(stateOptions.resetData);
			setPosts(posts[i.current]);
		}
	};
	const prevImage = () => {
		if(state !== stateOptions.like) {
			if (i.current > 0) {
				i.current = i.current - 1;
			}
			setState(stateOptions.resetData);
			setPosts(posts[i.current]);
		}
	};

	// function resetAnimation() {
	// 	meni = 0;
	// 	setColor('rgb(255, 255, 255)');
	// 	Animated.timing(value, {
	// 		toValue: -8,
	// 		duration: 0,
	// 		useNativeDriver: false,
	// 		borderRadius: 100,
	// 	}).start();
	// }

	function handleLike() {
		if (state !== stateOptions.reset) {
			setStrokeColor("#FF009D");
			setState(stateOptions.like);
		}
	}

	function handlePause() {
		if(state !== stateOptions.like)
		{
			if (state === 'pause') {
				setState(stateOptions.regular);
			} else {
				setState(stateOptions.pause);
			}
		}
	}
	//Check when bar finished:
	useEffect(() => {
		if (barFinished) {
			setStrokeColor("white");
			nextImage();
		}
	}, [barFinished]);
	//Dont know why but its not working
	// useEffect(() => {
	// 	console.log(isFocused);
	// 	if (isFocused) {
	// 		setState(stateOptions.regular);
	// 	} else {
	// 		setState(stateOptions.pause);
	// 	}
	// }, [isFocused]);
	return (
		<View style={styles.container}>
			{isFocused
				? gg[3].setNavi(gg[2].mStyles[1])
				: gg[3].setNavi(gg[2].mStyles[1])}
			{isFocused ? gg[0].setg(1) : gg[0].setg(0)}
			{isFocused
				? gg[1].setCsss({
						marginTop: 0,
						width: 25,
						height: 25,
						tintColor: 'white',
				  })
				: gg[1].setCsss({ marginTop: 0, width: 25, height: 25 })}
			{isFocused ? gg[4].setNavStyler({ backgroundColor: 'transparent',position: 'absolute', bottom: 0,right: 0,height:51,left: 0,elevation: 0}) : gg[4].setNavStyler({backgroundColor: 'white',position: 'relative',height:51, elevation: 0})}
			<ImageBackground source={post} style={styles.image}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<TouchableWithoutFeedback
						style={styles.touchMenash}
						onPress={prevImage}
						onLongPress={handleLike}
					/>
					<TouchableWithoutFeedback
						style={styles.touchMenash}
						onPress={handlePause}
						onLongPress={handleLike}
					/>
					<TouchableWithoutFeedback
						style={styles.touchMenash}
						onPress={nextImage}
						onLongPress={handleLike}
					/>
				</View>
			</ImageBackground>
			<View style={{ alignSelf: 'flex-end', right: 10, top: 12 }}>
				<CoolCircle
					state={state}
					setState={setState}
					strokeColor={strokeColor}
					time={8000}
					size={42}
					strokeWidth={4}
					heartSize={20}
					// setFinished is OPTIONAL
					setFinished={setFinished}
				/>
				<Text style={styles.likeCount}>1.3k</Text>
			</View>
		</View>
	);
};

export default RealHome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	emptyBarPart: {
		backgroundColor: 'white',
		width: 340,
		width: widthBar,
		opacity: 1,
		height: 2.5,
		borderRadius: 80,
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
	emptyBarPart: {
		textAlign:'center'
	},
	filledBarPart: {
		backgroundColor: '#F723F7',
		padding: 20,
		marginTop: 10,
		borderRadius: 30,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	touchMenash: {
		borderColor: '#888888',
		backgroundColor: 'transparent',
		height: 800,
		width: widthScreen / 3,
	},
});
