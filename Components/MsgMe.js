import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MsgMe = ({content}) => {
    return (
        <View style={styles.msg}>
            <Text style={styles.text}>{content}</Text>
        </View>
    )
}

export default MsgMe

const styles = StyleSheet.create({
    msg:{
        backgroundColor:'white',
        margin:10,
        padding:14,
        borderRadius:30,
        alignSelf:'flex-start',
        alignItems:'center'
    },
    text:{
        fontSize:17

    }

})
