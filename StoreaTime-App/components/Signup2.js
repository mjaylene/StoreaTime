import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import BackArrow from '../assets/icons/back_arrow.svg'
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import DimmedNextArrow from '../assets/icons/dimmed_next_arrow.svg';
import NextArrow from '../assets/icons/next_arrow.svg';

const DimmedNext = () => {
    return (
        <Pressable>
            <DimmedNextArrow style={styles.nextButton}></DimmedNextArrow>
        </Pressable>
    );
}

export default function Signup2({ navigation }) {
    let contentDisplayed = null
    const [isEmpty, empty] = React.useState(true);
    const [text, onChangeText] = React.useState("");

    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });


    useEffect(() => {
        console.log('side effect function 2');
        console.log(text)
    }, [text]);
    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <Pressable onPress={() => navigation.navigate('Signup1')}>
                <BackArrow style={styles.backButton}></BackArrow>
            </Pressable>
            <Text style={styles.title}>Email?</Text>
            <View style={styles.inputBox}>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Email address"
                    placeholderTextColor={'#ebdedd'}
                />
                {(text != "") ?
                    <Pressable onPress={() => navigation.navigate('Signup3')}>
                    <NextArrow style={styles.nextButton}></NextArrow>
                </Pressable> : <DimmedNext></DimmedNext>}
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
        bottom: '5%',
        marginLeft: '10%',
        color: 'white',
        fontSize: 65,
        fontFamily: 'Romana-Bold',
    },
    input: {
        fontStyle: 'italic',
        fontSize: 25,
        fontFamily: 'JakartaSans',
        color: 'white',
        bottom: 10,
        width: "80%",
        height: 60,
        margin: 12,
        borderWidth: 4,
        borderBottomColor: 'white',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        padding: 10,
    },
    backButton: {
        width: 32,
        height: 32,
        bottom: 240,
        left: 20
    },
    nextButton: {
        width: 64,
        height: 64,
        top: 260,
        marginLeft: 280,
    },
});