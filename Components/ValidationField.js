import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const ValidatedField = ({picture}) => {

    

    return (
        <View>
            <Image source={picture} style={styles.validStyle}/>
        </View>
    )
}

export default ValidatedField

const styles = StyleSheet.create({
    validStyle:{
        tintColor:'#4bde8b'
    },
    invalidStyle:{

    }

})
