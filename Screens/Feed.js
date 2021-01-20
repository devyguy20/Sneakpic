import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
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
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
const LazyImage = lazy(() => import('../Components/LazyImage'));
import Loading from './Loading';

const widthScreen = Dimensions.get('window').width;
const widthBar = widthScreen / 1.3;
const Feed = ({ route }) => {
	const [imgLoaded, setImgLoaded] = useState(false);
	const renders = useRef(0);
	const { gg } = route.params;
	const isFocused = useIsFocused();
	const [value, setValue] = useState(new Animated.Value(0));
	const [color1, setColor] = useState('rgb(255,255,255)');
	let meni = 0;
	let menash = 0;
	const myColor = value.interpolate({
		inputRange: [value['_value'], widthBar],
		outputRange: ['rgb(255,255,255)', color1],
	});
	const animateFastAnim = () => {
		setColor('rgb(231, 24, 228)');
		Animated.timing(value, {
			toValue: widthBar,
			duration: 700,
			useNativeDriver: false,
			borderRadius: 100,
		}).start();
	};
	function animateProgress() {
		Animated.timing(value, {
			toValue: widthBar,
			duration: 7500,
			useNativeDriver: false,
			borderRadius: 100,
		}).start();
	}
	function resetAnimation() {
		setColor('rgb(255, 255, 255)');
		Animated.timing(value, {
			toValue: -8,
			duration: 0,
			useNativeDriver: false,
			borderRadius: 100,
		}).start(() => animateProgress());
	}
	function stopAnimation() {
		menash = 0;
		if (meni == 0) {
			meni = 1;
			Animated.timing(value, {
				toValue: value,
				duration: 10,
				useNativeDriver: false,
				borderRadius: 100,
			}).start();
		} else {
			meni = 0;
			Animated.timing(value, {
				toValue: widthBar,
				duration: 7500 - value['_value'] * 20,
				useNativeDriver: false,
				borderRadius: 100,
			}).start();
		}
	}

	return (
		<Suspense fallback={<Text>Loading...</Text>}>
			<View
				style={{
					opacity: imgLoaded ? 0 : 1,
					height: imgLoaded ? 0 : 200,
				}}
			>
				<Loading />
			</View>
			<View
				style={{
					height: imgLoaded ? '100%' : 0,
					opacity: imgLoaded ? 1 : 0,
					...styles.container,
				}}
			>
				{isFocused
					? gg[3].setNavi(gg[2].mStyles[1])
					: gg[3].setNavi(gg[2].mStyles[1])}
				{isFocused ? gg[0].setg(1) : gg[0].setg(0)}
				{isFocused
					? gg[1].setCsss({
							marginTop: 15,
							width: 30,
							height: 30,
							tintColor: 'white',
					  })
					: gg[1].setCsss({ marginTop: 15, width: 30, height: 30 })}
				<LazyImage
					setLoad={setImgLoaded}
					// src="https://www..org/productImages2/30/2018/06/27/image1530081206.png"
				>
					<View style={{ alignItems: 'center' }}>
						<TouchableOpacity
							style={{ padding: 20 }}
							onPress={() => animateProgress()}
							onLongPress={() => animateFastAnim()}
						>
							<View style={{ flexDirection: 'row' }}>
								<View style={styles.emptyBarPart}>
									<Animated.View
										style={[
											{
												height: 12,

												position: 'absolute',
												left: 0,
												width: value,
												backgroundColor: '#F723F7',
												borderRadius: 100,
											},
										]}
									></Animated.View>
								</View>
								<Animated.Image
									source={require('../assets/HeartFilled.png')}
									style={{
										width: 47,
										height: 47,
										tintColor: myColor,
										marginLeft: widthScreen / 15,
										marginTop: -20,
									}}
								></Animated.Image>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => resetAnimation()}
							onLongPress={() => animateFastAnim()}
						>
							<View style={styles.filledBarPart}>
								<Text>Press to reset Progress bar</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => stopAnimation()}
							onLongPress={() => animateFastAnim()}
						>
							<View style={styles.filledBarPart}>
								<Text>Press to stop Progress bar</Text>
							</View>
						</TouchableOpacity>
					</View>
				</LazyImage>
			</View>
		</Suspense>
	);
};

export default Feed;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'green',
	},
	emptyBarPart: {
		backgroundColor: 'white',
		width: widthBar,
		height: 12,
		borderRadius: 80,
	},
	filledBarPart: {
		backgroundColor: '#F723F7',
		padding: 20,
		marginTop: 20,
		borderRadius: 30,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
});
