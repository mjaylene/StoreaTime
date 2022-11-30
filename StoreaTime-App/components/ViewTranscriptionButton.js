import { Text, View, StyleSheet, ImageBackground, Pressable, Image, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';

export default function ViewTranscriptionButton() {
    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.textStyle}>View Transcription</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 117,
        height: 32,
        borderRadius: 24,
        //backgroundColor: Themes.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        //position: 'absolute',
        zIndex: 999,
        top: 43,
        left: 231
    },
    textStyle: {
        fontFamily: "JakartaSansBold",
        fontSize: 11,
        color: Themes.colors.purple
    }
})