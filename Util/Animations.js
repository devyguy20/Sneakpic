import { Animated } from 'react-native';
const useNativeDriver = true;
export function createLikeAnimation(
	progress,
	fullHeartOpacityVal,
	emptyHearOpacityVal,
	val,
	time
) {
	return Animated.parallel([
		Animated.timing(progress, {
			toValue: 0,
			useNativeDriver,
			duration: time,
		}),
		Animated.timing(fullHeartOpacityVal, {
			toValue: 0.9,
			duration: time,
			useNativeDriver,
		}),
		Animated.timing(emptyHearOpacityVal, {
			toValue: 0,
			duration: time,
			useNativeDriver,
		}),
	]);
}

export function createAnimation(progress, timeLeft) {
	return Animated.parallel([
		Animated.timing(progress, {
			toValue: 0,
			duration: timeLeft._value,
			useNativeDriver,
		}),
		Animated.timing(timeLeft, {
			toValue: 0,
			duration: timeLeft._value,
			useNativeDriver,
		}),
	]);
}
export function createResetAnimation(
	progress,
	circumference,
	emptyHearOpacityVal,
	fullHeartOpacityVal
) {
	return Animated.parallel([
		Animated.timing(progress, {
			toValue: circumference,
			duration: 0,
			useNativeDriver,
		}),
		Animated.timing(emptyHearOpacityVal, {
			toValue: 1,
			duration: 400,
			useNativeDriver,
		}),
		Animated.timing(fullHeartOpacityVal, {
			toValue: 0,
			duration: 200,
			useNativeDriver,
		}),
	]);
}

export function pauseAnimation(animation) {
	animation.stop();
}
export function startRegularAnimation(animation) {
	animation.start();
}
export const stateOptions = {
	regular: 'regular',
	like: 'like',
	reset: 'reset',
	pause: 'pause',
	resetData: 'resetData',
};
export function runAnimation(animation, runFuncAfterFinish, ref) {
	return animation.start(({ finished }) => {
		runFuncAfterFinish(finished);
	});
}
export function calcTime(total, progress, time) {
	const speed = total / time;
	const timePassed = progress._value * speed;
	return time - timePassed;
}
