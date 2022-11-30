import { Text, View, StyleSheet, ImageBackground, Pressable, Image, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';
import Message from '../assets/icons/message.svg'
import Leave from '../assets/icons/leave.svg'

export default function AccessCommunityButtons({navigation, messageScreen}) {
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
        <View style={styles.buttonsBox}>
            <View style={styles.leaveButton}>
                <Leave></Leave>
                <Text style={styles.leaveText}>Leave</Text>
            </View>
            <Pressable onPress={() => navigation.navigate(messageScreen)}>
                <View style={styles.messageButton}>
                    <Message></Message>
                    <Text style={styles.messageText}>Message</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsBox: {
        top: 180,
        flexDirection: 'row'
    },
    leaveButton: {
        flexDirection: 'row',
        width: 173,
        height: 49,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Themes.colors.white,
        marginLeft: 16
    },
    leaveText: {
        color: Themes.colors.purple,
        fontSize: 16,
        fontFamily: "JakartaSansBold",
        marginLeft: 10.67
    },
    messageButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 173,
        height: 49,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Themes.colors.white,
        marginLeft: 14
    },
    messageText: {
        color: Themes.colors.orange,
        fontSize: 16,
        fontFamily: "JakartaSansBold",
        marginLeft: 8
    },
})