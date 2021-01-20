import React, { useState } from 'react';
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert,
	Dimensions,
	Image
} from 'react-native';
import { Switch, TextInput } from 'react-native-gesture-handler';
import { useNunito, Nunito } from '../Util/Nunito';
import Textfield from '../Components/Textfield';
import SwitchOrCheckbox from '../Components/SwitchOrCheckbox';
import firebase from 'firebase';
import { UserForFirebase } from '../Util/UserForFirebase';
import * as ImagePicker from 'expo-image-picker';
import {downLoadImage} from "../Util/FireBasePictures"
const Signup = ({ navigation }) => {
	const [isAbleToSubmit, setSubmit] = useState(false);
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [image, setImage] = useState('');
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
		});
		setImage(result.uri);
		await uploadImage(image);
		alert(image);

	};
	const uploadImage = async (uri) => {
		const response = await fetch(uri);
		const blob = await response.blob();
		//
		console.log(blob);
		var ref = firebase.storage().ref().child('/images/' + image.slice(image.lastIndexOf('/') + 1, image.length));
		return ref.put(blob);
	};
	const submit = () => {
		//		const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
		//		const numberChecker = /[0-9]/;
		//		const letters = /[^a-zA-Z]/;
		//		const userNameIsValid =
		//			!userName.match(letters) && userName.length >= 6 && userName.length <= 14;
		//		const passwordIsValid =
		//			password.match(letters) && password.length >= 6 && password.length <= 14;
		//		const confirmPasswordIsValid = password === confirmPass;
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
//		alert(image.slice(image.lastIndexOf('/') + 1, image.length));
//		downLoadImage(image.slice(image.lastIndexOf('/') + 1, image.length)).then((val)=>{
//			alert(val);
//		});
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				if (userCredentials.user) {
					userCredentials.user
						.updateProfile({
							displayName: userName,
//							photoURL: "https://firebasestorage.googleapis.com/v0/b/sneakpic-32817.appspot.com/o/images%2F2C9DF177-C2F6-4F8E-81BB-72A375D55E84.jpg?alt=media&token=89181ef0-f474-4a08-bbbe-497d4778976b"
						})
						.then((s) => {
							navigation.navigate('HOMe');
						});
					const id = userCredentials.user.uid;
					firebase
						.firestore()
						.collection('users')
						.doc(id)
						.set({
							userName,
							password,
							email,
							firstName: '',
							lastName: '',
						})
						.catch((err) => alert(err));
				}
			})
			.catch(function (error) {
				alert(error.message);
			});
	};
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Sign up for Sneakpic</Text>
			<Textfield
				placeholder="Username"
				type="default"
				setMethod={setUserName}
			/>
			<Textfield placeholder="Email" type="default" setMethod={setEmail} />
			<Text style={styles.smallText}>
				Your phone number is private,{'\n'}SMS Fees may apply.
			</Text>
			<Textfield
				placeholder="Password"
				passwordMode={true}
				setMethod={setPassword}
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
	submit: {
		backgroundColor: '#FF009D',
		width: width / 1.1,
		marginTop: 20,
		borderRadius: 8,
		height: 70,
		justifyContent: 'center',
		fontFamily: Nunito.NunitoSans_700Bold,
	},
	textStyle: {
		color: 'white',
		fontSize: 17,
		fontWeight: 'bold',
		textAlign: 'center',
		fontFamily: Nunito.NunitoSans_700Bold,
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
		fontFamily: Nunito.NunitoSans_700Bold,
		borderBottomWidth: 2,
	},
	smallText: {
		fontFamily: Nunito.NunitoSans_600SemiBold,
		fontSize: 14,
		textAlign: 'center',
		color: '#AAAAAA',
		margin: 4000 / height,
	},
});
