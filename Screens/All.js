import React,{ useContext, useState }  from 'react'
import { StyleSheet, Text, View,Image, Button,Switch, TouchableWithoutFeedbackComponent, Alert, ImageBackground} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
var i = 0;
const All = ({navigation})=> {
    const posts = [require('../assets/dummy.jpg'), require('../assets/dummy2.jpg'), require('../assets/Chat.png')]
    const [post, setPosts] = useState(posts[0])
    if(posts[0] == post)
    {
        i = 0;
    }
    const Buttons = ()=>{
        return{
            borderColor:'#888888',
            backgroundColor: 'transparent',
            height: 800,
            width: 100,
            //overflow: 'hidden'
           
        }
    }
    const nextImage = () =>{
        if(i < posts.length - 1){
            i++;
            setPosts(posts[i]);
        }
        else{
            i = 0;
            navigation.navigate('HOMe');
        }
    }
    const prevImage = () =>{
        if(i > 0){
            i--;
            setPosts(posts[i]);
        }
        else{
            i = 0;
            navigation.navigate('HOMe');
        }
    }

    
    return(
        <View style={styles.container}>
            <ImageBackground source= {post} style= {{width:'100%', height: '100%', flexDirection:'row'}}>
                <View style= {{position:'absolute', left: 0}}>
                <Text style={Buttons()} onPress={prevImage}/>
                </View>
                <View style= {{position:'absolute', right: 0}}>
                <Text style={Buttons()} onPress={nextImage} />
                </View>
            </ImageBackground>
        </View>
    )
}
export default All
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    
  }
})