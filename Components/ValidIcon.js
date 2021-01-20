import React, { useCallback, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ValidIcon = ({img,isValid,hasSubmited=true,imgStyle}) => {
    const changeStyle = useCallback(() => setStyle,[])


    return (
        <View>
            <Image source={img} style={imgStyle}/>
        </View>
    )
}

export default ValidIcon
const iconSize = 30

const styles = StyleSheet.create({
        defaultStyle:{
        width:iconSize,
        height:iconSize,
        position:'absolute',
        left:0,
        tintColor:'#F500FF',
        bottom:-15
    },
        validStyle:{
        width:iconSize,
        height:iconSize,
        position:'absolute',
        left:0,
        tintColor: 'green',    
                bottom:-15

    },
    invalidStyle:{
        width:iconSize,
        height:iconSize,
        position:'absolute',
        left:0,
        tintColor: 'red',    
        bottom:-15

    }
})
