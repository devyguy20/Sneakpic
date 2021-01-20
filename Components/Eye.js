import React, { useState } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Eye = () => {
    const eyeClosed = {
        width:iconSize,
        height:iconSize,
        position:'absolute',
        right:0,
        top:'-20%'
    }
    const eyeOpened = {
        width:iconSize,
        height:iconSize,
        position:'absolute',
        right:0,
        top:'-20%',
        tintColor:''
    }

    const toggleEye = () => {
        if(eyeState == eyeClosed){
            setEyeState(eyeOpened)
        }
        else{
            setEyeState(eyeClosed)
        }
    }
    const [eyeState,setEyeState] = useState(eyeClosed)
    return (
        <View>
            <Image onPress={toggleEye()} style={styles.eye} source={require('../assets/eyePassword.png')}/>
        </View>
    )
}

export default Eye
const iconSize = 30
const styles = StyleSheet.create({

})
