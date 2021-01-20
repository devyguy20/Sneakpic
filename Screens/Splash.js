import React, { useContext, useState } from 'react';
import {
	Alert,
	Button,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Switch,
	Image,
} from 'react-native';
import {
	TouchableHighlight,
	TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import BouncyView from 'react-native-bouncy-touchable';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import Design from '../Components/Design';
import DesignTwo from '../Components/Design';
import {
	useFonts,
	NunitoSans_200ExtraLight,
	NunitoSans_200ExtraLight_Italic,
	NunitoSans_300Light,
	NunitoSans_300Light_Italic,
} from '@expo-google-fonts/nunito-sans';
import { useNunito, Nunito } from '../Util/Nunito';
import { useEffect } from 'react';

const Splash = ({ navigation }) => {
	//const [user, setUser] = useState(null);
	const goToHomeScreen = () => {
		navigation.navigate('Login');
	};
	const goToSignUpScreen = () => {
		navigation.navigate('ageauth');
	};

	return (
		<View style={styles.container}>
			<View style={styles.icon}>
				{/* CEO boss and Dark Lord Netanel added the splash logo */}
				<Image
					style={styles.photo}
					source={require('../assets/Splashlogo.png')}
				/>
				<View style={styles.container}></View>
			</View>
			<View style={styles.buttonContainer}>
				<Design op="row" />
				<View>
				<BouncyView scale={1.1} delay={10} onPress={() => goToHomeScreen()}>
						<View style={styles.btn}>
							<Text
								style={{
									...styles.text,
									color: '#FF009D',
								}}
							>
								Log in
							</Text>
						</View>
					</BouncyView>

					<BouncyView scale={1.1} delay={10} onPress={() => goToSignUpScreen()}>
						<View style={styles.btn}>
							<Text
								style={{
									...styles.text,
									color: '#850aff',
								}}
							>
								Sign up{' '}
							</Text>
						</View>
					</BouncyView>
				</View>
				<Design op="row-reverse" />
			</View>
		</View>
	);
};

export default Splash;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FF1CFF',
		flex: 1,
	},
	icon: {
		flex: 1,
	},
	buttonContainer: {
		padding: 20,
		marginBottom: 5,
	},
	photo: {
		margin: 120,
		width: 120,
		height: 120,
		alignSelf: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 16.5,
		textAlign: 'center',
		alignContent: 'center',
		fontFamily: Nunito.NunitoSans_700Bold,
	},
	btn: {
		alignItems: 'center',
		textAlign: 'center',
		paddingTop: 22,
		margin: 8,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: '#fff',
		height: 70,
		fontWeight: 'bold',
	},
});
