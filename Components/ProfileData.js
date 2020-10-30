import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileData = ({text,num}) => {

    const textStyle = (color) => {
        return{
            
            textAlign:'center',
            marginHorizontal: 7,
            color,
            fontWeight:'bold',

            
        }
    }

    return (
        <View style={styles.container}>
            <Text style={textStyle('black')}>{num}</Text>
            <Text style={textStyle('gray')}>{text}</Text>
        </View>
    )
}

export default ProfileData

const styles = StyleSheet.create({
    
    container:{

    }
})
