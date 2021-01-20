import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ValidatedField from './ValidationField'

const Validation = ({name,password,email,confirm,tag}) => {
    return (
        <View>
            <ValidatedField picture={require('../assets/Account.png')}/>
        </View>
    )
}

export default Validation

const styles = StyleSheet.create({})
