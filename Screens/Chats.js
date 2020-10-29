import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Chats = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Chats</Text>
        </View>
    )
}

export default Chats

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