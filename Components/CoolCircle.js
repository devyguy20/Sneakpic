import * as React from 'react';
import { useState } from 'react';
import {
	Button,
	Dimensions,
	StyleSheet,
	View,
	Animated,
	Image,
	Alert,
} from 'react-native';
import { set } from 'react-native-reanimated';
import Svg, { Defs, LinearGradient, Stop, Circle } from 'react-native-svg';
import {
	createResetAnimation,
	createAnimation,
	pauseAnimation,
	stateOptions,
	runAnimation,
	createLikeAnimation,
} from '../Util/Animations';

// const size = 200;
// const strokeWidth = 40;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const { PI } = Math;
function createCircleConfig(size, strokeWidth) {
	const center = size / 2;
	const r = (size - strokeWidth) / 2;
	const circumference = r * 2 * PI;
	return { center, r, circumference };
}
function initAnimationVals(circumference) {
	const fullHeartOpacityVal = React.useRef(new Animated.Value(0)).current;
	const emptyHearOpacityVal = React.useRef(new Animated.Value(1)).current;
	return { fullHeartOpacityVal, emptyHearOpacityVal };
}

export default CoolCircle = ({
	state,
	setState,
	time,
	strokeWidth,
	strokeColor,
	size,
	setFinished,
	heartSize,
}) => {
	// 'regular' ->  play regularly the animation
	// 'reset' ->  reset the animation
	// 'like' ->  animate faster (Like)
	// 'pause' -> pause animation
	// ''
	//Circle Config
	const { center, r, circumference } = createCircleConfig(size, strokeWidth);
	//Animated Vals
	const speed = 0.15;
	const { fullHeartOpacityVal, emptyHearOpacityVal } = initAnimationVals(
		circumference
	);
	const progress = React.useRef(new Animated.Value(circumference)).current;
	const timeLeft = React.useRef(new Animated.Value(time)).current;
	//DONT DELETE THIS
	//KEEP TRACK OF TIME
	timeLeft.addListener((e) => {});

	const resetAnim = createResetAnimation(
		progress,
		circumference,
		emptyHearOpacityVal,
		fullHeartOpacityVal
	);
	//Whenever state changes, this will run
	React.useEffect(() => {
		switch (state) {
			case 'regular':
				startAnimation();
				break;
			case 'reset':
				resetAnimation();
				break;

			case 'like':
				LikeAnimation();
				break;
			case 'resetData':
				resetAnimationData();
				break;
			case 'pause':
				console.log('Stopping...');
				timeLeft.stopAnimation();
				break;
		}
	}, [state]);

	//Regular Animation
	const startAnimation = () => {
		const anim = createAnimation(progress, timeLeft);
		if (setFinished) {
			setFinished(false);
		}
		runAnimation(anim, (finished) => {
			if (finished) {
				setState(stateOptions.reset);
			}
		});
	};
	const resetAnimation = () => {
		runAnimation(resetAnim, (finished) => {
			if (finished) {
				resetAnimationData();
				setState(stateOptions.regular);
				if (setFinished) {
					setFinished(true);
				}
			}
		});
	};
	const LikeAnimation = () => {
		const val = 500;
		if (setFinished) {
			setFinished(false);
		}
		const likeAnim = createLikeAnimation(
			progress,
			fullHeartOpacityVal,
			emptyHearOpacityVal,
			val,
			timeLeft._value * speed
		);

		setState(stateOptions.like);
		runAnimation(likeAnim, (finished) => {
			if (finished) {
				console.log('finished');
				setState(stateOptions.reset);
			}
		});
	};
	function resetAnimationData() {
		progress.setValue(circumference);
		timeLeft.setValue(time);
		setState(stateOptions.regular);
	}

	return (
		<View onLayout={() => startAnimation()} style={{ alignItems: 'center' }}>
			<View style={styles.thing}>
				<Svg width={size} height={size} style={styles.container}>
					<AnimatedCircle
						r={r}
						fill="white"
						opacity={0.25}
						cy={center}
						cx={center}
						stroke="white"
						strokeWidth={2.75}
					/>
					<AnimatedCircle
						fill="transparent"
						stroke={strokeColor}
						r={r}
						cx={center}
						cy={center}
						strokeWidth={2.75}
						opacity={0.9}
						strokeDasharray={circumference}
						strokeDashoffset={progress}
					/>
				</Svg>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						position: 'relative',
						height: 100,
						width: 100,
						position: 'absolute',
					}}
				>
					<Animated.Image
						style={{
							...styles.imageContainer,
							width: heartSize * 1,
							shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 0,
},
shadowOpacity: 0.65,
shadowRadius: 0.5,
							height: heartSize * 1,
						}}
						source={require('../assets/Like.png')}
					/>
					<Animated.Image
						style={{
							width: heartSize,
							height: heartSize,
							tintColor: '#FF009D',
							opacity: fullHeartOpacityVal,
							position: 'absolute',
						}}
						source={require('../assets/Like.png')}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		transform: [{ rotateZ: '270deg' }],
	},
	thing: {
		position: 'relative',

		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		position: 'relative',
		height: 100,
		width: 100,
	},
	btn: {
		marginVertical: 10,
	},
});
