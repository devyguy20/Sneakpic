import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Likes = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Likes</Text>
        </View>
    )
}

export default Likes

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
