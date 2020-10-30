import React,{useState} from 'react'
import { StyleSheet, Text, View,Image, Button } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import ProfileData from '../Components/ProfileData'

const Profile = () => {
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Header */}
                <View>
                    <Text>Harvey Lockwood</Text>
                    <Text>Menomo</Text>
                </View>
                
                <View style={styles.options}>
                    <Text>(_Options Icon goes here_)</Text>
                </View>
            </View>



            <View style={styles.followers}>
                {/* Profile Image and Followers goes here*/}
                <View>
                    <Image style={styles.roundedImg} source={require('../assets/dummy.jpg')} />
                </View>
                <View>
                    <View style={{flexDirection:'row-reverse',justifyContent:'space-around',padding:10}}>
                        <ProfileData text="Friends" num="69"/>
                        <ProfileData text="Followers" num="1069"/>
                        <ProfileData text="Faves" num="10069"/>
                    </View>
                    <View>
                        <TouchableOpacity>
                        
                            <Text style={styles.shareBtn}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            
            <View style={styles.list}>
                {/* Posts goes here*/}
                <FlatList 
                numColumns={2}
                data={[<Image style={styles.post} source={require('../assets/dummy.jpg')}/>,<Image style={styles.post} source={require('../assets/dummy2.jpg')} />]}
                renderItem={({item}) => {
                    return item
                }}
                
                />
            </View>
        </View>
    )
}

export default Profile
const imageSize = 100;
const postWidth =150
const postHeightRation = postWidth * 1.75
const styles = StyleSheet.create({
    container:{
    alignItems:'flex-end',
    justifyContent:'center',
    marginTop: 20,
    backgroundColor:'#fff',
    },
    header:{
        flexDirection:'row-reverse',
        marginTop: 250,
        padding:10,
    },
    roundedImg:{
        borderRadius: 200,
        width:imageSize,
        height:imageSize

    },
    followers: {
        flexDirection:'row-reverse',
        paddingVertical: 5,
        paddingHorizontal: 10

    },
    post:{
        width:postWidth,
        height:postHeightRation,
        marginVertical: 10,
        borderRadius:10,
        margin:10
    },
    list:{
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    shareBtn:{
        textAlign:'center',
        borderWidth:1,
        borderColor:'gray',
        alignSelf:'center',
        width:200,
        padding:10,
        borderRadius:50
    },
    options:{
        marginLeft:100,
        paddingHorizontal:20
    }
    
    
    


})
