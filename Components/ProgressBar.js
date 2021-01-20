import React, { Component } from 'react';
import { Animated, Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProgressBar extends Component {
	timer = 2000;
	finalValue = 200;
	constructor(props) {
		super(props);
		this.state = {
			value: new Animated.Value(0),
		};

		this.state.value.addListener(({ value }) => {
			/* your logic */
			this.curValue = value;
		});
	}

	Animate(targetVal, dur) {
		Animated.timing(this.state.value, {
			toValue: targetVal,
			duration: dur,
		}).start(() => this.reset());
	}
	reset() {
		this.state.value.setValue(0);
	}
	startAnimation(tarVal, dur) {
		this.Animate(tarVal, dur);
	}
	pauseAnimation() {
		const value = this.curValue;
		this.state.value.stopAnimation((x) => null);
		this.state.value.setValue(value);
	}
	handleAnimationTiming(x) {
		const speed = this.timer / this.finalValue;

		return 2000 - speed * x;
	}
	render() {
		return (
			<View style={styles.container}>
				<Animated.View
					style={[
						{
							backgroundColor: 'blue',
							width: this.state.value,
							height: 30,
						},
					]}
				/>
				<TouchableOpacity
					style={styles.test}
					onPress={() =>
						this.startAnimation.bind(this)(
							this.finalValue,
							this.handleAnimationTiming.bind(this)(this.curValue)
						)
					}
				>
					<Text>Press me</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.test}
					onPress={this.pauseAnimation.bind(this)}
				>
					<Text>Pause</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'pink',
		height: 30,
		width: 200,
	},
	test: {
		backgroundColor: 'white',
		padding: 10,
	},
});
