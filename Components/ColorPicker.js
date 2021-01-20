import React from 'react';
import {
    SliderHuePicker,
    SliderSaturationPicker,
    SliderValuePicker,
} from 'react-native-slider-color-picker';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import tinycolor from 'tinycolor2';

const {
    width,
} = Dimensions.get('window');

export default class SliderColorPickerExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldColor: "#FF7700",
        };
    }

    changeColor = (colorHsvOrRgb, resType) => {
        if (resType === 'end') {
            this.setState({
                oldColor: tinycolor(colorHsvOrRgb).toHexString(),
            });
        }
    }

    render() {
        const {
            oldColor,
        } = this.state;

        return (
            <View style={styles.container}>
                <View style={{marginHorizontal: 24, marginTop: 6, height: 16, width: width - 48}}>
                    <SliderHuePicker
                        ref={view => {this.sliderHuePicker = view;}}
                        oldColor={oldColor}
                        trackStyle={[{height: 10, width: width - 50, right:2, borderWidth:1.75, borderColor:'white', borderRadius:50, bottom:2}]}
                        thumbStyle={styles.thumb}
                        useNativeDriver={true}
                        onColorChange={this.changeColor}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    thumb: {
        top:5,
        width: 26,
        height: 26,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 50,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 0.35,
    },
});