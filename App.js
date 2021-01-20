import React from 'react';
import ReactNative, {
	Button,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import RealHome from './Screens/RealHome';
import Signup from './Screens/Signup';
import InsideChat from './Screens/InsideChat';
import All from './Screens/All';
import EditScreen from './Screens/EditScreen';
import SneakCamera from './Screens/Camera';
import Login from './Screens/Login';
import QuickStart from './Screens/QuickStart';
import { StatusBar } from 'expo-status-bar';
import AgeVerification from './Screens/AgeVerification';
import AlbumPage from './Screens/AlbumPage';
import * as Font from 'expo-font';
import { useState } from 'react';
import { useEffect } from 'react';
import { Nunito, useNunito } from './Util/Nunito';
import ImgMode from './Screens/ImgMode';
import ChatMode from './Screens/ChatMode';
import SendScreen from './Screens/SendScreen';
import Search from './Screens/Search';
import UserSearch from './Components/UserSearch';
import EditCaption from './Screens/EditCaption';
import EditSketch from './Screens/EditSketch';
import Discovery from './Screens/Discovery';
import UserProfile from './Screens/UserProfile';
import Profile from './Screens/Profile';
import firebase from 'firebase';
ReactNative.I18nManager.allowRTL(false);
console.disableYellowBox = true;
console.error = () => {};
const firebaseConfig = {
	apiKey: "AIzaSyDy9qkEx9vg1A-ilfeD1C_axwUYtPrQQ90",
	authDomain: "sneakpic-77347.firebaseapp.com",
	projectId: "sneakpic-77347",
	storageBucket: "sneakpic-77347.appspot.com",
	messagingSenderId: "104630640739",
	appId: "1:104630640739:web:ade33337f07cc106579856",
	measurementId: "G-4GDXP58E5T"
};

function initApp(config) {
	if (!firebase.apps.length) {
		return firebase.initializeApp(firebaseConfig);
	} else {
		return firebase.app();
	}
}

export default function App() {
	const Stack = createStackNavigator();
	const loaded = useNunito();
	const app = initApp(firebaseConfig);
	if (loaded) {
		return (
			<NavigationContainer independent={true}>
				<Stack.Navigator initialRouteName={Splash}>
					<Stack.Screen
						name="Meny"
						component={Splash}
						options={{ headerShown: false, gestureEnabled: false }}
					/>
					<Stack.Screen
						name="HOMe"
						component={Home}
						options={{ headerShown: false, gestureEnabled: false }}
					/>
					<Stack.Screen
						name="Signup"
						component={Signup}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="InsideChat"
						initialParams={{ name: 'Error' }}
						component={InsideChat}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Camera"
						component={SneakCamera}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="All"
						component={All}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Edit"
						component={EditScreen}
						options={{ headerShown: false }}
					/>
										<Stack.Screen
						name="EditSketch"
						component={EditSketch}
						options={{ headerShown: false }}
					/>
										<Stack.Screen
						name="EditCaption"
						component={EditCaption}
						options={{ headerShown: false }}
					/>

					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="quickstart"
						component={QuickStart}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="RealHome" component={RealHome} />
					<Stack.Screen
						name="ageauth"
						component={AgeVerification}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="album"
						component={AlbumPage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="imgMode"
						component={ImgMode}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="ChatMode"
						component={ChatMode}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="SendScreen"
						component={SendScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Discovery"
						component={Discovery}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="UserProfile"
						component={UserProfile}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
				<StatusBar style="dark" />
			</NavigationContainer>
		);
	} else {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	basicComponent: {
		marginTop: 50,
		textAlign: 'center',
		fontSize: 30,
	},
});
