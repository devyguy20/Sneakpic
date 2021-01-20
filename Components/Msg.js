import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MsgMe from './MsgMe'
import MsgOther from './MsgOther'

const Msg = ({content,sender,name}) => {


    const displayMsg = (sender) => {
        if(sender == 'Me'){
            return <MsgMe content={content}/>
        }
        else{
            return <MsgOther content={content} sender={sender}/>
        }
    }

    return (
        <View style={styles.test}>
            {displayMsg(sender)}
        </View>
    )
}

export default Msg

const styles = StyleSheet.create({
    
})
