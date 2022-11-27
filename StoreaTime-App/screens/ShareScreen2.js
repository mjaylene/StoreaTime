import { Text, View, StyleSheet, Button, ImageBackground, SafeAreaView, Pressable, Image, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import Close from '../assets/icons/close.svg';
import GoTo from '../assets/icons/goToCommunities.svg';



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
        <ImageBackground source={require('../assets/community/sharedConfirmation.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('RecordScreen1')}>
                    <Close style={styles.exit}></Close>
                </Pressable>
            </View>
            <Pressable>
                <GoTo style={styles.goToScreen}></GoTo>
            </Pressable>
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
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center',
        top: 55,
        //backgroundColor: 'cyan',
        position: 'absolute'
    },
    exit: {
        right: 150
    },
    goToScreen: {
        top: 380
    }
});