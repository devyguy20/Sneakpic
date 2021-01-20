import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image, Dimensions } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import ChatMenu from '../Components/ChatMenu'
import Msg from '../Components/Msg'

const InsideChat = ({route}) => {
    const {name} = route.params

    const [history,setHistory] = useState([
        {key:1,content:'Ofek you are fired',sender:'Me'},
        {key:2,content:'no no please noo',sender:name},
        {key:3,content:'byeeeee byeeeee',sender:'Me'},
        {key:4,content:'NOOOOO',sender:name},
    ])


    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <FlatList 
            data={history}
            renderItem={({item}) => <Msg sender={item.sender} content={item.content}/>}
            
            />
            <ChatMenu name={name} />
        </View>
    )
}

export default InsideChat
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    container:{
        height:'100%',
        borderWidth:2,
        borderColor:'black'
    },
    name:{
        fontSize:30,
        textAlign:'center',
        marginTop:20
    }
})