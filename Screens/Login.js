import React, { useReducer, useState } from 'react';
import {
	Alert,
	Keyboard,
	StyleSheet,
	Text,
	Dimensions,
	TouchableOpacity,
	View,
} from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';
import { TextInput } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';
import BouncyView from 'react-native-bouncy-touchable';
import { set } from 'react-native-reanimated';
import firebase from 'firebase';

const Login = ({ navigation }) => {
	const [email, setMail] = useState('');
	const [showState, setShowState] = useState(false);
	const [message, setShowMessage] = useState('');
	const [password, setPassword] = useState('');
	const submit = () => {
		if (!firebase.auth().currentUser) {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((user) => {
					navigation.navigate('quickstart');
				})
				.catch((error) => {
					var errorCode = error.code;
					var errorMessage = error.message;
					setShowState(true);
					setShowMessage('Please double check your details');
				});
		} else {
			navigation.navigate('quickstart');
		}
	};
	function handleAlertClose() {
		setShowState(false);
	}
	const goToHome = () => {
		const user = {
			email,
			password,
		};
		console.log(user);
		if (userIsValid()) {
			Keyboard.dismiss();
			// navigation.navigate('QuickStart');
		} else {
			Alert.alert('Your  Username or Password are incorrect');
		}
	};
	const userIsValid = () => {
		const postOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};
		//url = firebaseURL
		//fetch(url,postOptins)
		//.then(res => console.log(res))
		return true; // or false
	};
	const handleMail = async (val) => {
		// const ref = database.collection("Users").doc("MenyTest")
		// const doc = await ref.get()
		// console.log(doc.data())

		setMail(val);
	};
	const handlePassword = (val) => {
		setPassword(val);
	};

	return (
		<View style={{ alignItems: 'center', flex: 1, backgroundColor: 'white' }}>
			<AwesomeAlert
				show={showState}
				title="Something ain't right..."
				titleStyle={{ fontFamily: Nunito.NunitoSans_700Bold, color: 'black' }}
				messageStyle={{
					fontFamily: Nunito.NunitoSans_600SemiBold,
					color: '#AAAAAA',
					fontSize: 14,
					textAlign: 'center',
				}}
				message={message}
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={false}
				showConfirmButton={true}
				confirmButtonTextStyle={{ fontFamily: Nunito.NunitoSans_700Bold }}
				confirmButtonStyle={{
					borderWidth: 8,
					borderColor: '#ff009d',
					borderRadius: 8,
				}}
				confirmText="Got it"
				confirmButtonColor="#ff009d"
				onConfirmPressed={handleAlertClose}
				onDismiss={handleAlertClose}
			/>
			<Text style={styles.title}>Log in</Text>
			<TextInput
				onChangeText={handleMail}
				style={styles.input}
				placeholder="Email"
			/>
			<TextInput
				onChangeText={handlePassword}
				style={styles.input}
				placeholder="Password"
				secureTextEntry={true}
			/>
			<Text style={styles.forgotText}>Forgot your password?</Text>
			<BouncyView scale={1.08} delay={20} onPress={submit}>
				<TouchableOpacity style={styles.loginBtn} onPress={submit}>
					<Text style={styles.doneText}>Log in</Text>
				</TouchableOpacity>
			</BouncyView>
			<TouchableOpacity style={{ alignItems: 'center' }}></TouchableOpacity>
		</View>
	);
};

export default Login;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
	loginBtn: {
		backgroundColor: '#FF009D',
		height: 70,
		width: width / 1.1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		margin: 40,
		fontFamily: Nunito.NunitoSans_700Bold,
	},
	input: {
		borderWidth: 20,
		alignContent: 'flex-start',
		fontSize: 16,
		marginTop: 14,
		backgroundColor: '#EFEFEF',
		fontWeight: '600',
		borderColor: '#EFEFEF',
		marginBottom: 10,
		padding: 2,
		borderRadius: 8,
		width: width / 1.1,
		fontFamily: Nunito.NunitoSans_700Bold,
	},
	title: {
		fontSize: 17,
		color: 'black',
		fontWeight: '600',
		marginTop: 50,
		marginBottom: 20,
		borderBottomColor: '#FF009D',
		padding: 100 / height,
		paddingHorizontal: 30,
		borderBottomWidth: 2,
		fontFamily: Nunito.NunitoSans_700Bold,
	},
	forgotText: {
		marginTop: 16,
		marginBottom: -12,
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#AAAAAA',
		margin: 4000 / height,
		fontWeight: '500',
		fontFamily: Nunito.NunitoSans_600SemiBold,
	},
	doneText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		fontFamily: Nunito.NunitoSans_700Bold,
	},
});
