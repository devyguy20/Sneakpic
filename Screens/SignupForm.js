import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Textfield from '../Components/Textfield'

const SignupForm = () => {
    return (
        <View>
            <Textfield placeholder="Username" type='default'/>
            <Textfield placeholder="Email" type='email-address'/>
            <Textfield placeholder="Password"passwordMode={true}/>
            <Textfield placeholder="Confirm" passwordMode={true}/>

        </View>
    )
}

export default SignupForm

const styles = StyleSheet.create({})
