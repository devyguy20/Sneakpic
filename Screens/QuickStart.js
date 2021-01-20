import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions,
	SafeAreaView,
} from 'react-native';
import { useNunito, Nunito } from '../Util/Nunito';
import BouncyView from 'react-native-bouncy-touchable';
import QuickStartTut from '../Components/QuickStartTut';
import heart from '../assets/GuideHeart.png';
import guide from '../assets/GuideMove.png';
import moves from '../assets/GuidePause.png';
import swipes from '../assets/GuideSwipe.png';
const QuickStart = ({ navigation }) => {
	const goToHome = () => {
		navigation.navigate('HOMe');
	};
	return (
		<SafeAreaView backgroundColor={'black'}>
			<View style={styles.container}>
				<Text style={styles.title}>Quick Start</Text>
				<TouchableOpacity>
					<Image style={styles.logo} source={require('../assets/Logo.png')} />
				</TouchableOpacity>
				<QuickStartTut imgName={heart} text="Long hold to fave and skip" />
				<QuickStartTut
					imgName={guide}
					text="Tap left and right to skip or go back"
				/>
				<QuickStartTut imgName={moves} text="Tap middle to pause and resume" />
				<QuickStartTut imgName={swipes} text="Swipe to move between screens" />
				<BouncyView
					scale={1.1} delay={10}
					style={{ padding: 10 }}
					onPress={() => {
						navigation.navigate('HOMe');
					}}
				>
					<View style={styles.forYouBtn}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 16,
								color: 'white',
								fontFamily: Nunito.NunitoSans_800ExtraBold,
							}}
						>
							Got It
						</Text>
					</View>
				</BouncyView>
			</View>
		</SafeAreaView>
	);
};
export default QuickStart;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const imgSize = height / 7;
const showcaseSize = 40;
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: 'black',
		height: '100%',
	},
	title: {
		marginTop: height / 60,
		fontSize: 21,
		color: 'white',
		fontFamily: Nunito.NunitoSans_700Bold,
	},
	logo: {
		width: imgSize, //line 15
		height: imgSize,
		marginTop: 10,
	},
	showcase: {
		tintColor: 'white',
		width: showcaseSize,
		height: showcaseSize,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},

	forYouBtn: {
		justifyContent: 'center',
		height: 75,
		width: 330,
		backgroundColor: '#ff009d',
		padding: 8,
		marginBottom: 30,
		borderRadius: 8,
		borderColor: '#ff009d',
		borderWidth: 20,
		fontFamily: Nunito.NunitoSans_700Bold,
	},
});
