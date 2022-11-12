import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView } from 'react-native';
import React from "react";
import { useFonts } from 'expo-font';



export default function Signup({ navigation }) {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <Text style={styles.title}>Hello...</Text>
            <View style={styles.inputBox}>
            
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Full Name"
                    placeholderTextColor={'#f1c3bc'}
                    keyboardType="numeric"
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        alignItems: 'center'
    },
    image: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        bottom: '10%',
        marginLeft: '10%',
        color: 'white',
        fontSize: 65,
        fontFamily: 'Romana-Bold',
    },
    input: {
        fontStyle: 'italic',
        fontSize: 25,
        fontFamily: 'Plus Jakarta Sans',
        color: 'white',
        bottom: 40,
        width: "80%",
        height: 60,
        margin: 12,
        borderWidth: 5,
        borderBottomColor: 'white',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        padding: 10,
    },
});