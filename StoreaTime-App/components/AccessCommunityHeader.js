import { Text, View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import { useFonts } from 'expo-font';
import BackArrow from '../assets/icons/back_arrow2.svg'
import Themes from '../assets/Themes/themes';


export default function AccessCommunityHeader( { image, communityName, navigation }) {
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
        <View style={styles.headerBox}>
            <View style={styles.headerContentsBox}>
                <Pressable onPress={() => navigation.goBack()}>
                    <View style={styles.backArrow}>
                        <BackArrow></BackArrow>
                    </View>
                </Pressable>
                <Image style={styles.communityImage} source={(image)}></Image>
                <Text style={styles.communityNameStyle}>{communityName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        width: 422,
        height: 119,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    headerContentsBox: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 51
    },
    backArrow: {
        marginLeft: 21.67  
    },
    communityImage: {
        width: 48,
        height: 48,
        marginLeft: 19.45
    },
    communityNameStyle: {
        fontFamily: "JakartaSansBold",
        fontSize: 22,
        color: Themes.colors.white,
        marginLeft: 12
    }
    
})