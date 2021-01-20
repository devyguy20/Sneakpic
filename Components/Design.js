import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'




const Design = ({op}) => {
    const Reverse = (i) => {
        return{
            padding:10,
            flexDirection:i,
            justifyContent:'space-around'
        }
    }
    return (
        <View style={Reverse(op)}  >
            <Image style={styles.image} source={require('../assets/ChatViewedPhoto.png')}/>
            <Image style={styles.image} source={require('../assets/ChatOutSeen.png')}/>
            <Image style={styles.image} source={require('../assets/ChatViewedPhoto.png')}/>
            <Image style={styles.image} source={require('../assets/ChatOutSeen.png')}/>
            <Image style={styles.image} source={require('../assets/ChatViewedPhoto.png')}/>
            <Image style={styles.image} source={require('../assets/ChatOutSeen.png')}/>
        </View>
    )
}



export default Design
const imgSize = 34;

const styles = StyleSheet.create({
    row: {
        padding:10,
        flexDirection:"row",
        justifyContent:'space-around',
        
        
    },
    image:{
        tintColor:"black",
        opacity:0.07,
        width:imgSize,
        height:imgSize,

    }
})
