import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import Draggable from 'react-native-draggable';
import {
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
class Label extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editable: true,
			input: null,
		};
		Keyboard.addListener('keyboardDidHide', () => {
			this.state.editable = false;
			// console.log('OOGA');
		});

		this.toggleEditable = this.toggleEditable.bind(this);
	}

	toggleEditable() {
		this.setState({
			editable: !this.state.editable,
		});
	}

	handleDragPress() {
		this.toggleEditable();
		console.log(this.state.editable);
		this.state.input.focus();
	}

	render() {
		return (
			<Draggable x={75} y={200} renderSize={100} renderColor="#FF009D">
				<TouchableOpacity>
					<TextInput
						ref={(input) => {
							this.state.input = input;
						}}
						style={{ minWidth: 100 }}
						editable={this.state.editable}
						keyboardType="default"
						returnKeyType="next"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid="transparent"
					/>
				</TouchableOpacity>
			</Draggable>
		);
	}
}

export default Label;

const styles = StyleSheet.create({});
