import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Discovery = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Discovery</Text>
        </View>
    )
}

export default Discovery

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
