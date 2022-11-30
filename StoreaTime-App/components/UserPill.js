import { Text, View, StyleSheet, ImageBackground, Pressable, Image, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';

export default function UserPill() {
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
            <Image style={styles.imageStyle} source={require('../assets/profile/MelissaRivera.png')}></Image>
            <Text style={styles.textStyle}>Jaylene Martinez</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: 135,
        height: 32,
        borderRadius: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        //justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        zIndex: 999,
        left: 9,
        top: 42
    },
    imageStyle: {
        width: 24,
        height: 24,
        marginLeft: 5
    },
    textStyle: {
        fontSize: 11,
        color: 'black',
        fontFamily: 'JakartaSans',
        marginLeft: 9
    }
})