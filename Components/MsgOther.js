import React from 'react'
import { ColorPropType, StyleSheet, Text, View } from 'react-native'

const MsgOther = ({sender,content}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

export default MsgOther

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F500FF',
        borderRadius: 30,
        margin:10,
        padding:14,
        alignItems:'center',
        alignSelf: 'flex-end'

    },
    sentby:{

    },
    content:{
        fontSize:16,
        color: "white",
    }
})
