import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import RNDrawOnScreen from 'react-native-draw-on-screen'; 
export default class App extends React.Component {
  state = {
    color: 'red',
    strokeWidth: 15,
    borderColor:'red',
  };
 
  changeColor = (color) => {
    this.setState({ color });
  };
 
  changeBrushSize = (strokeWidth) => {
    this.setState({ strokeWidth });
  };
 
  undo = () => {
    this.RNDraw.undo();
  };
 
  clear = () => {
    this.RNDraw.clear();
  };
 
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            border: 'solid',
            borderWidth: 2,
            borderColor: 'grey',
          }}
        >
          <RNDrawOnScreen
            penColor={this.state.color}
            strokeWidth={this.state.strokeWidth}
            ref={(r) => (this.RNDraw = r)}
          />
        </View>
      </SafeAreaView>
    );
  }
}