import {
	NunitoSans_200ExtraLight,
	NunitoSans_200ExtraLight_Italic,
	NunitoSans_300Light,
	NunitoSans_300Light_Italic,
	NunitoSans_400Regular,
	NunitoSans_400Regular_Italic,
	NunitoSans_600SemiBold,
	NunitoSans_600SemiBold_Italic,
	NunitoSans_700Bold,
	NunitoSans_700Bold_Italic,
	NunitoSans_800ExtraBold,
	NunitoSans_800ExtraBold_Italic,
	NunitoSans_900Black,
	NunitoSans_900Black_Italic,
	useFonts,
} from '@expo-google-fonts/nunito-sans';

export const Nunito = {
	NunitoSans_200ExtraLight: 'NunitoSans_200ExtraLight',
	NunitoSans_200ExtraLight_Italic: 'NunitoSans_200ExtraLight_Italic',
	NunitoSans_300Light: 'NunitoSans_300Light',
	NunitoSans_300Light_Italic: 'NunitoSans_300Light_Italic',
	NunitoSans_400Regular: 'NunitoSans_400Regular',
	NunitoSans_400Regular_Italic: 'NunitoSans_400Regular_Italic',
	NunitoSans_600SemiBold: 'NunitoSans_600SemiBold',
	NunitoSans_600SemiBold_Italic: 'NunitoSans_600SemiBold',
	NunitoSans_700Bold: 'NunitoSans_700Bold',
	NunitoSans_700Bold_Italic: 'NunitoSans_700Bold_Italic',
	NunitoSans_800ExtraBold: 'NunitoSans_800ExtraBold',
	NunitoSans_800ExtraBold_Italic: 'NunitoSans_800ExtraBold_Italic',
	NunitoSans_900Black: 'NunitoSans_900Black',
	NunitoSans_900Black_Italic: 'NunitoSans_900Black_Italic',
};
const NunitoValues = {
	NunitoSans_200ExtraLight,
	NunitoSans_200ExtraLight_Italic,
	NunitoSans_300Light,
	NunitoSans_300Light_Italic,
	NunitoSans_400Regular,
	NunitoSans_400Regular_Italic,
	NunitoSans_600SemiBold,
	NunitoSans_600SemiBold_Italic,
	NunitoSans_700Bold,
	NunitoSans_700Bold_Italic,
	NunitoSans_800ExtraBold,
	NunitoSans_800ExtraBold_Italic,
	NunitoSans_900Black,
	NunitoSans_900Black_Italic,
};

export function useNunito() {
	return useFonts(NunitoValues)[0];
}
