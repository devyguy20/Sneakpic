import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'

const ChatMenu = ({route}) => {
    return (
        <View style={styles.absolute}>
            <View style={styles.message}>
                <TouchableOpacity>
                    <View>
                        <Image style={styles.img} source={require('../assets/Camera.png')}/>
                    </View>
                </TouchableOpacity>
                <TextInput placeholder="Send a message..." style={styles.input} />
                <TouchableOpacity>
                    <View style={styles.right}>
                        <Image style={styles.send} source={require('../assets/msgSend.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatMenu
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const imgSize = width / 10
const styles = StyleSheet.create({

    input:{
        width:width/2,
        fontSize:17,
        height:'100%',
        borderRadius:15,
        padding:10,
        width:'75%',
        marginLeft:5
        
    },
    message:{
        

        bottom:0,
        height:50,
        alignItems:'center',
        flexDirection:'row',
        width:'100%'

    },
    send:{
        width:width/7,
        height:width/10,
        marginLeft:-30,
    },
    absolute:{
        position:'absolute',
        bottom:0,
        padding:4,
        backgroundColor:'#ffff',
        width:'100%'
    },
    img:{
        width:imgSize,
        height:imgSize,
        margin:10
    },
    right:{
        alignSelf:'flex-start'
    }
    
})
