import { StyleSheet, View, Image, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';
import ImageIcon from '../assets/icons/image.svg'
import Camera from '../assets/icons/camera_purple.svg'
import SendUnfilled from '../assets/icons/send_unfilled.svg'
import SendFilled from '../assets/icons/send_filled_purple.svg'


export default function MessageInput({setMessage1, setMessage2, setMessage3, setHasSent1, setHasSent2, setHasSent3 }) {
    const [text, onChangeText] = useState("");
    const [numSent, setNumSet] = useState(0);
    const [loaded] = useFonts({
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }


    function sendMessage() {
        if (text && numSent===0) {
            onChangeText("");
            setHasSent1(true)
            setMessage1(text)
            setNumSet(1)
        }
        else if (text && numSent===1) {
            onChangeText("");
            setHasSent2(true)
            setMessage2(text)
            setNumSet(2)
        } else {
            onChangeText("");
            setHasSent3(true)
            setMessage3(text)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <ImageIcon style={styles.image}></ImageIcon>
                <Camera style={styles.camera}></Camera>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='Message'
                        placeholderTextColor={'#C4C4C4'}
                    />
                    <Pressable onPress={sendMessage}>
                        {text != "" ? <SendFilled style={styles.sendIcon}></SendFilled> :
                            <SendUnfilled style={styles.sendIcon}></SendUnfilled>}
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 390,
        height: 78,
        backgroundColor: Themes.colors.white,
        position: 'absolute',
        top: 766
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18
    },
    inputBox: {
        flexDirection: 'row',
        width: 288,
        height: 32,
        borderRadius: 12,
        borderColor: "#F4F4F4",
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 14
    },
    image: {
        marginLeft: 20
    },
    camera: {
        marginLeft: 12
    },
    input: {
        fontSize: 14,
        color: "blackCa",
        marginLeft: 12,
    },
    sendIcon: {
        marginRight: 9
    },
})