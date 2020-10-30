import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Chat = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Chat</Text>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
        container:{
        alignItems:'center',
        justifyContent:'center',
        marginTop: 20,

    },
    bigText:{
        fontSize: 30
    }
})
