import { Text, View, StyleSheet, Button, ImageBackground, SafeAreaView, Pressable, Image, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Prompt from '../components/Prompt';
import BackArrow from '../assets/icons/back_arrow.svg';
import MicCircle from '../assets/icons/mic_circle.svg';
import TypeInstead from '../assets/icons/type.svg';
import TryAudio from '../assets/icons/try_audio.svg';
import Next from '../assets/icons/next_text.svg';
import DimmedNext from '../assets/icons/dimmed_text_next.svg'


export default function TextScreen({ navigation }) {
    let contentDisplayed = null
    const [isEmpty, empty] = React.useState(true);
    const [text, onChangeText] = React.useState("");

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

    useEffect(() => {
        console.log('side effect function 2');
        console.log(text)
    }, [text]);
    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header}>

                <Pressable onPress={() => navigation.navigate('RecordScreen')}>
                    <BackArrow style={styles.backButton}></BackArrow>
                </Pressable>
                <Text style={styles.screenTitle}>Record</Text>
            </View>
            <View style={styles.promtBox}>
                <Prompt
                    text={'Xiao Long Bao'}
                />
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='"I remember the time I..."'
                placeholderTextColor={'#CCCCCC'}
                multiline={true}
            />
            {(text != "") ?
                <Pressable onPress={() => navigation.navigate('ShareScreen1')}>
                        <Next style={styles.nextButton}></Next>
                </Pressable> : <DimmedNext style={styles.nextButton}></DimmedNext>}
            
            <Pressable onPress={() => navigation.navigate('RecordScreen')}>
                <TryAudio style={styles.audio}></TryAudio>
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
    backButton: {
        width: 32,
        height: 32,
        //bottom: 240,
        right: 25,
        //backgroundColor: 'cyan'
    },
    screenTitle: {
        //backgroundColor: 'cyan',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 190,
        left: 83
    },
    header: {
        flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'center',
        top: 55,
        //backgroundColor: 'cyan',
        position: 'absolute'
    },
    micIcon: {
        width: 255,
        height: 255,
        top: 35
    },
    type: {
        width: 220,
        height: 76,
        top: 70
    },
    input: {
        height: 320,
        width: 358,
        margin: 12,
        padding: 15,
        paddingTop: 15,
        borderRadius: 24,
        backgroundColor: 'white',
        bottom: 120,
        fontSize: 15
        //flex: 1
    },
    promtBox: {
        flex: 1
    },
    audio: {
        bottom: 40
    },
    nextButton: {
        //backgroundColor: 'cyan',
        //width: 100,
        bottom: 683,
        left: 130,
        alignItems: 'center',
    }
});