import React, { useCallback, useEffect, useState } from 'react';
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert,
	Dimensions,
	Button,
	Platform,
} from 'react-native';
import TouchableBounce from 'react-native-bouncy-touchable';
import { Switch, TextInput } from 'react-native-gesture-handler';
import Textfield from '../Components/Textfield';
import SwitchOrCheckbox from '../Components/SwitchOrCheckbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Nunito, useNunito } from '../Util/Nunito';
import AwesomeAlert from 'react-native-awesome-alerts';
import AgeDisplay from '../Components/AgeDisplay';
import CoolDateSlider from '../Components/CoolDateSlider';
import moment from 'moment';
import BouncyView from 'react-native-bouncy-touchable';

const AgeVerification = ({ navigation }) => {
	const { showAlert } = useState(false);
	const [month, setMonth] = useState(12);
	const [year, setYear] = useState(2021);
	const [day, setDay] = useState(31);
	const [showState, setShowState] = useState(false);

	const goToSignup = () => {
		const d = new Date();
		const years = d.getFullYear() - year;
		const months = d.getDate() - month;
		const ageIsValid = verifyAge(years - 13, months);
		if (ageIsValid) {
			navigation.navigate('Signup');
			return;
		}
		setShowState(true);
	};
	function handleAlertClose() {
		setShowState(false);
		navigation.goBack();
	}

	function verifyAge(years, months) {
		if (years > 0) {
			return true;
		}
		if (years == 0 && months >= 0) {
			return true;
		}
		return false;
	}

	//navigation.navigate('Login');
	return (
		<View style={styles.container}>
			<Text style={styles.text}>When's your birthday?</Text>

			<AwesomeAlert
				show={showState}
				showProgress={setShowState}
				title="We're Sorry..."
				titleStyle={{fontFamily: Nunito.NunitoSans_700Bold, color:'black'}}
				messageStyle={{fontFamily: Nunito.NunitoSans_600SemiBold, color:'#AAAAAA', fontSize:14, textAlign:'center'}}
				message="You're too young to create an account... But thanks for checking us out!"
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={false}
				showConfirmButton={true}
				confirmButtonTextStyle={{fontFamily: Nunito.NunitoSans_700Bold}}
				confirmButtonStyle={{borderWidth:8, borderColor:'#ff009d',borderRadius:8}}
				confirmText="Go Back"
				confirmButtonColor="#ff009d"
				onConfirmPressed={handleAlertClose}
				onDismiss={handleAlertClose}
			/>
			<View style={{ marginTop: 15 }}>
				<CoolDateSlider
					maxRange={31}
					minRange={1}
					title="Day"
					setValue={setDay}
				/>
				<CoolDateSlider
					maxRange={12}
					minRange={1}
					title="Month"
					setValue={setMonth}
				/>
				<CoolDateSlider
					maxRange={2021}
					minRange={1920}
					title="Year"
					setValue={setYear}
				/>
			</View>

			<View style={{ flexDirection: 'row', top: 30 }}>
				<AgeDisplay value={day} />
				<AgeDisplay value={month} />
				<AgeDisplay value={year} />
			</View>
			<TouchableOpacity>
				<View
					style={{
						padding: 30,
						width: width,
						backgroundColor: 'transparent',
					}}
				></View>
			</TouchableOpacity>
			<BouncyView scale={1.08} delay={20}  onPress={goToSignup}>
			<TouchableOpacity onPress={goToSignup}>
				<View style={styles.submit}>
					<Text style={styles.textStyle}>Next</Text>
				</View>
			</TouchableOpacity>
			</BouncyView>
			<Text style={styles.smallText}>
				You must be at least 13 years old in most countries{'\n'} to sign up for
				an account, your age is private.
			</Text>
		</View>
	);
};

export default AgeVerification;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		backgroundColor: 'white',
	},
	input: {
		textAlign: 'center',
		width: 200,
		backgroundColor: 'red',
		borderBottomColor: '#FF009D',
		padding: 10,
		fontFamily: Nunito.NunitoSans_600SemiBold,
	},
	submit: {
		backgroundColor: '#FF009D',
		width: 340,
		marginTop: 20,
		borderRadius: 8,
		height: 70,
		justifyContent: 'center',
		fontFamily: Nunito.NunitoSans_600SemiBold,
	},
	textStyle: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		fontFamily: Nunito.NunitoSans_700Bold,
	},
	agreement: {
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		marginTop: 20,
		fontFamily: Nunito.NunitoSans_600SemiBold,
	},
	agreementText: {
		width: '60%',
		marginHorizontal: 20,
		textAlign: 'center',
		fontFamily: Nunito.NunitoSans_600SemiBold,
	},
	text: {
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
	smallText: {
		fontSize: 14,
		padding: 20,
		textAlign: 'center',
		color: '#AAAAAA',
		margin: 4000 / height,
		fontFamily: Nunito.NunitoSans_600SemiBold,
	},
});
