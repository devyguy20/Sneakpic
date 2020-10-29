import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Likes from './Likes';
import Chats from './Chats';
import Discovery from './Discovery';
import Profile from './Profile';
import RealHome from './RealHome';


const Home = () => {

    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator initialRouteName='Home'>
            <Tabs.Screen name="Likes" component={Likes} />
            <Tabs.Screen name="Chats" component={Chats} />
            <Tabs.Screen name="Home" component={RealHome} />
            <Tabs.Screen name="Discovery" component={Discovery} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
        )




        {/*

            <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/dummy.jpg')} />
            </View>
        */}
    

}

export default Home

const styles = StyleSheet.create({})
