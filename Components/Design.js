import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'




const Design = () => {
    return (
        <View style={styles.row}  >
            <Image style={styles.image} source={require('../assets/ChatInViewed.png')}/>
            <Image style={styles.image} source={require('../assets/ChatOutSeen.png')}/>
            <Image style={styles.image} source={require('../assets/ChatInViewed.png')}/>
            <Image style={styles.image} source={require('../assets/ChatOutSeen.png')}/>
            <Image style={styles.image} source={require('../assets/ChatInViewed.png')}/>
            <Image style={styles.image} source={require('../assets/ChatOutSeen.png')}/>
        </View>
    )
}

export default Design
const imgSize = 40;

const styles = StyleSheet.create({
    row: {
        padding:10,
        flexDirection:"row",
        justifyContent:'space-around',
        
        
    },
    image:{
        width:imgSize,
        height:imgSize,

    }
})
