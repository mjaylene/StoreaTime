import { StyleSheet, View, Image, Text } from 'react-native';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';

export default function Message({ name, text1, text2, pfp}) {
    const [loaded] = useFonts({
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.nameStyle}>{name}</Text>
            <View style={styles.body}>
                <Image style={styles.image} source={pfp}></Image>
                <View style={styles.messageBody}>
                    <Text style={styles.textStyle}>{text1}</Text>
                    <Text style={styles.textStyle}>{text2}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20.68,
    },
    body: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 7
    },
    messageBody: {
        width: 171.77,
        height: 43.73,
        backgroundColor: Themes.colors.white,
        borderRadius: 14.05,
        justifyContent: 'center',
        marginLeft: 4.68,
        //marginBottom: 7
    },
    nameStyle: {
        fontFamily: "JakartaSans",
        color: 'rgba(255, 255, 255, 0.5)',
        left: 26.54,
        marginBottom: 4
    },
    textStyle: {
        fontSize: 13.27,
        marginLeft: 11.71,
    },
    image: {
        width: 21.86,
        height: 21.86
    }
})