import { View, Text, Pressable, StyleSheet } from 'react-native'
import DownArrow from '../assets/icons/down_arrow.svg'
import Themes from '../assets/Themes/themes'
import { useFonts } from 'expo-font';

export default function ListenHeader({ navigation }) {
    const [loaded] = useFonts({
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
                <DownArrow style={styles.downArrow}></DownArrow>
            </Pressable>
            <Text style={styles.headerText}>Listen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 61,
    },
    headerText: {
        fontFamily: "JakartaSansBold",
        color: Themes.colors.white,
        fontSize: 17,
        right: 6
    },
    downArrow: {
        right: 133
    },
})