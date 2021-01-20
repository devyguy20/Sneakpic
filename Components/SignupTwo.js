import React, { useState } from 'react';
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert,
	Dimensions,
} from 'react-native';
import { Switch, TextInput } from 'react-native-gesture-handler';
import Textfield from '../Components/Textfield';
import SwitchOrCheckbox from '../Components/SwitchOrCheckbox';
const Signup = ({ navigation }) => {
	const [isAbleToSubmit, setSubmit] = useState(false);
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');

	const submit = () => {
		const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
		const numberChecker = /[0-9]/;
		const letters = /[^a-zA-Z]/;
		const userNameIsValid =
			!userName.match(letters) && userName.length >= 6 && userName.length <= 14;
		const passwordIsValid =
			password.match(letters) && password.length >= 6 && password.length <= 14;
		const confirmPasswordIsValid = password === confirmPass;
		navigation.navigate('Login');
		// if(userNameIsValid && passwordIsValid && confirmPasswordIsValid && email != ''){
		//     setUserName(userName.toLowerCase())
		//     const NewUser ={
		//         userName,
		//         email,
		//         password,
		//         confirmPass
		//     }
		//     Alert.alert("SUBMITED")
		// }
		// else{
		//     console.log("ERR")
		//     console.log(userNameIsValid)
		//     console.log(passwordIsValid)
		//     console.log(confirmPasswordIsValid)
		// }
	};
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Sign up for Sneakpic</Text>
			<Textfield
				placeholder="Password"
				type="password"
				setMethod={setPassword}
			/>
						<Textfield
				placeholder="Confirm password"
				type="password"
				setMethod={setConfirmPass}
			/>
			<TouchableOpacity onPress={submit}>
				<View style={styles.submit} onPress={() => submit()}>
					<Text style={styles.textStyle}>Next</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Signup;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		alignContent: 'center',
		backgroundColor: 'white',
		height: height,
	},
	input: {
		textAlign: 'center',
		width: 220,
		backgroundColor: 'red',
		borderBottomColor: '#FF009D',
		padding: 10,
	},
	submit: {
		backgroundColor: '#FF009D',
		width: 340,
		marginTop: 20,
		borderRadius: 18,
		height: 70,
		justifyContent: 'center',
	},
	textStyle: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	agreement: {
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		marginTop: 20,
	},
	agreementText: {
		width: '60%',
		marginHorizontal: 20,
		textAlign: 'center',
	},
	text: {
		fontSize: 17,
		color: '#FF009D',
		fontWeight: '600',
		marginTop: 50,
		marginBottom: 20,
		borderBottomColor: '#FF009D',
		padding: 100 / height,
		paddingHorizontal: 30,
		borderBottomWidth: 2,
	},
	smallText: {
		fontSize: 14,
		textAlign: 'center',
		color: '#AAAAAA',
		margin: 4000 / height,
		fontWeight: '500',
	},
});
