import React, { useContext, useState } from 'react'
import { Alert, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TouchableHighlight, TouchableNativeFeedback,} from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import { back } from 'react-native/Libraries/Animated/src/Easing'
import Design from '../Components/Design'



const Splash = ({navigation}) => {

    const [user,setUser] = useState(null)
    const goToHomeScreen = () => {
        navigation.navigate('HOMe')
    }
    
    const Txt = (color) => {
        return {
        textAlign:'center',
        color,
        fontWeight:"bold"

        }

    }
    const Button = (color) => {
        return {
            textAlign:'center',
            paddingTop: 17,
            margin: 10,
            borderRadius: "100%",
            borderWidth: 1,
            borderColor: '#fff',
            backgroundColor: "#fff",
            height:50 ,
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
                    <TouchableOpacity onPress={()=>goToHomeScreen()}>
                        <View style = {Button("#850aff")}>
                            <Text style={Txt("#f614ff")}>Log in</Text>
                        </View>
                        </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style = {Button("#850aff")}>
                            <Text style = {Txt("#850aff")}>Sign up </Text>
                        </View>
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
    },
});
