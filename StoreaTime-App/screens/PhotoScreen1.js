import { Text, View, StyleSheet, Button, ImageBackground, SafeAreaView, Pressable, Image, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import BackArrow from '../assets/icons/back_arrow.svg';
import Next from '../assets/icons/next_text.svg';
import BlankImage from '../assets/icons/blank_image.svg';



export default function PhotoScreen1({ navigation }) {
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
                <Pressable onPress={() => navigation.navigate('RecordScreen')}>
                    <BackArrow style={styles.backButton}></BackArrow>
                </Pressable>
                <Text style={styles.screenTitle}>Photos</Text>
                <Pressable onPress={() => navigation.navigate("ShareScreen1")}>
                    <Next style={styles.nextButton}></Next>
                </Pressable>
            </View>
            <View style={styles.body}>
                <Text style={styles.optional}>Add photos (Optional)</Text>
                <View style={styles.topRow}>
                    <BlankImage style={styles.blank}></BlankImage>
                    <BlankImage style={styles.blank}></BlankImage>
                    <BlankImage style={styles.blank}></BlankImage>
                </View>
                <View style={styles.bottomRow}>
                    <BlankImage style={styles.blank}></BlankImage>
                    <BlankImage style={styles.blank}></BlankImage>
                    <BlankImage style={styles.blank}></BlankImage>
                </View>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center',
        top: 55,
        //backgroundColor: 'cyan',
        position: 'absolute'
    },
    backButton: {
        width: 32,
        height: 32,
        right: 80,
        top: 8
        //bottom: 240,
        //backgroundColor: 'cyan'
    },
    screenTitle: {
        //backgroundColor: 'cyan',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        left: 25
    },
    nextButton: {
        //backgroundColor: 'cyan',
        //width: 100,
        //bottom: 683,
        left: 90,
        alignItems: 'center',
    },
    topRow: {
        flexDirection: 'row'
    },
    bottomRow: {
        flexDirection: 'row'
    },
    optional: {
        color: 'white',
        fontFamily: 'JakartaSansBold',
        fontSize: 17,
        marginBottom: 10,
        marginLeft: 5
    },
    blank: {
        margin: 5
    },
    body: {
        bottom: 150,
        justifyContent: 'center'
    }
});