import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Profile</Text>
        </View>
    )
}

export default Profile

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
