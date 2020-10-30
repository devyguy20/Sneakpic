import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Notifications</Text>
        </View>
    )
}

export default Notifications

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
