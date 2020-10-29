import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import { back } from 'react-native/Libraries/Animated/src/Easing'
import Design from '../Components/Design'



const Splash = ({navigation}) => {

    const [user,setUser] = useState(null)
    const goToHomeScreen = () => {
        navigation.navigate('HOMe')
    }
    
    
    const Button = (color) => {
        return {
            textAlign:'center',
            paddingTop:10,
            margin: 10,
            borderRadius: 30,
            height:50 ,
            backgroundColor: '#ffffff',
            color,
            fontWeight:"bold"
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                {/* ICON GOES HERE */}
            </View>
            <View style={styles.buttonContainer}>
                <Design />
                <View>
                    <TouchableOpacity>
                        <Text style={Button("#850aff")} onPress={() => goToHomeScreen()}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Button("#f614ff")}>Sign up </Text>
                    </TouchableOpacity>
                </View>
                <Design />
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    
    container:{
        backgroundColor: "#f500ff",
        flex:1
    },
    icon:{
        flex:1
    },
    buttonContainer:{
        padding:10,
        marginBottom: 5
    }
})
