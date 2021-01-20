import React, { useState } from 'react';
import { useIsFocused, NavigationContainer } from '@react-navigation/native';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Alert,
	TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Likes from './Likes';
import Chats from './Chats';
import Discovery from './Discovery';
import Profile from './Profile';
import RealHome from './RealHome';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Camera } from 'expo-camera';
import { set } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

/*const Icons = ({icon}) =>{ 
const Icons = ({icon}) =>{ 
    
    return(

        <Image
            style={styles.icon}
            source={icon} 
            
        />
    );
}
}*/
const Home = ({ navigation }) => {
	const [myCss, setCss] = useState({ marginTop: 0, width: 28, height: 28 });
	const [myNav, setNav] = useState(styles.tabsRegularStyle);
	const [Icon, SetIcon] = useState([
		require('../assets/Notifications.png'),
		require('../assets/Chat.png'),
		require('../assets/Explore.png'),
		require('../assets/Discovery.png'),
		require('../assets/Account.png'),
	]);
	const [navStyle, setNavStyle] = useState(styles.tabsRegularStyle);
	const [i, seti] = useState(0);
	const Icons = ({ icon }) => {
		return <Image style={myCss} source={icon} />;
	};
	const changeIcon = (IconPrev, Iconi, focused) => {
		if (focused) {
			return <Icons icon={Iconi} />;
		} else {
			return <Icons icon={IconPrev} />;
		}
	};

	//Added changes in the tab here!! (BY OFEK THE KING)
	const Tabs = createMaterialTopTabNavigator();
	const [tabBarBackground, setTabBackground] = useState('transparent');

	return (
		<SafeAreaProvider>
			<SafeAreaView flex={1} backgroundColor={'white'}>
				<Tabs.Navigator
					initialRouteName="   "
					tabBarPosition="bottom"
					tabBarOptions={{
						showIcon: true,
						indicatorStyle: { opacity: 0 },
						style: navStyle,
					}}
				>
					<Tabs.Screen
						initialParams={{ nav: navigation }}
						name=" "
						component={Likes}
						options={{
							tabBarIcon: ({ focused }) => {
								return changeIcon(
									require('../assets/Notifications.png'),
									require('../assets/Notifications1.png'),
									focused
								);
							},
						}}
					/>
					<Tabs.Screen
						name="  "
						component={Chats}
						options={{
							tabBarIcon: ({ focused }) => {
								return changeIcon(
									require('../assets/Chat.png'),
									require('../assets/Cha1.png'),
									focused
								);
							},
						}}
					/>
					<Tabs.Screen
						initialParams={{
							gg: [
								{ setg: seti },
								{ setCsss: setCss },
								{ mStyles: [styles.tabsRegularStyle, styles.tabsHomeStyle] },
								{ setNavi: setNav },
								{ setNavStyler: setNavStyle },
							],
						}}
						name="   "
						component={RealHome}
						options={{
							tabBarIcon: ({ focused }) => {
								return changeIcon(
									require('../assets/Explore.png'),
									require('../assets/Camera.png'),
									focused
								);
							},
						}}
						listeners={() => ({
							tabPress: (e) => {
								if (i == 1) {
									navigation.navigate('Camera');
								}
							},
						})}
					/>
					<Tabs.Screen
						name="     "
						component={Discovery}
						options={{
							tabBarIcon: ({ focused }) => {
								return changeIcon(
									require('../assets/Discovery.png'),
									require('../assets/Discovery23.png'),
									focused
								);
							},
						}}
					/>
					<Tabs.Screen
						name="      "
						component={Profile}
						options={{
							tabBarIcon: ({ focused }) => {
								return changeIcon(
									require('../assets/Account.png'),
									require('../assets/Account1.png'),
									focused
								);
							},
						}}
					/>
				</Tabs.Navigator>
			</SafeAreaView>
		</SafeAreaProvider>
	);

	{
		/*

            <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/dummy.jpg')} />
            </View>
        */
	}
};

export default Home;

const styles = StyleSheet.create({
	icon: {
		marginTop: 10,
		width: 30,
		height: 30,
		tintColor: '#fff',
	},
	homeIcon: {
		marginTop: 10,
		width: 30,
		height: 30,
		tintColor: 'white',
	},
	tabsHomeStyle: {
		backgroundColor: 'transparent',
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		elevation: 0,
	},
	tabsRegularStyle: {
		backgroundColor: 'white',
		position: 'relative',
		elevation: 0,
	},
});
