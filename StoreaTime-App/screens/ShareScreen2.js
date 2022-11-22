import { Text, View, StyleSheet, Button, ImageBackground, SafeAreaView, Pressable, Image, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';



export default function ShareScreen2({ navigation }) {
    loadBackgroundImageAsync();
    const Pulse = require('react-native-pulse').default;

    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    const [click, checkCircle] = React.useState(false);
    const [click1, checkCircle1] = React.useState(false);


    // These lines of code
    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
        });
    }, [navigation]);
    // 

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header}>
                <Text style={styles.screenTitle}>Share</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    backButton: {
        width: 32,
        height: 32,
        //bottom: 240,
        right: 35,
        //backgroundColor: 'cyan'
    },
    screenTitle: {
        //backgroundColor: 'cyan',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 55,
        //backgroundColor: 'cyan',
        position: 'absolute'
    },
    title: {
        top: 130,
        right: 100,
        textAlign: 'left',
        fontSize: 17,
        color: 'white',
        fontFamily: 'JakartaSansBold'
    },
    body: {
        //backgroundColor: 'blue',
        width: 340,
        height: 203,
        bottom: 320,
        alignItems: 'center',
    },
    share: {
        bottom: 60,
        position: 'absolute'
    },
    commOne: {
        //backgroundColor: 'green',
        width: 355,
        height: 84,
        top: 140,
        borderRadius: 12,
        right: 0
    },
    commTwo: {
        //backgroundColor: 'red',
        width: 355,
        height: 84,
        bottom: 38,
        borderRadius: 12,
        right: 0
    },
    box: {
        position: 'absolute'
    },
    commBox: {
        bottom: 79
    }
});