import { Text, View, StyleSheet, Button, ImageBackground, SafeAreaView, Pressable, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import Prompt from '../components/Prompt1.js';
import BackArrow from '../assets/icons/back_arrow.svg';
import TryAudio from '../assets/icons/try_audio.svg';
import Next from '../assets/icons/next_text.svg';
import DimmedNext from '../assets/icons/dimmed_text_next.svg'
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';

export default function TextScreen({ navigation, route }) {
    loadBackgroundImageAsync();
    const [text, onChangeText] = React.useState("");
    const dishName = route.params.paramDish;

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
                    <View style={styles.header}>

                        <Pressable onPress={() => navigation.navigate('RecordScreen', { paramDish: dishName })}>
                            <BackArrow style={styles.backButton}></BackArrow>
                        </Pressable>
                        <Text style={styles.screenTitle}>Record</Text>
                    </View>
                    <View style={styles.promptBox}>
                        <Prompt
                            text={dishName}
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
                        <Pressable onPress={() => navigation.navigate('ShareScreen1', { paramDish: dishName })}>
                            <Next style={styles.nextButton}></Next>
                        </Pressable> : <DimmedNext style={styles.nextButton}></DimmedNext>}

                    <Pressable onPress={() => navigation.navigate('RecordScreenCopy', { paramDish: dishName })}>
                        <TryAudio style={styles.audio}></TryAudio>
                    </Pressable>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
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
    promptBox: {
        flex: 1,
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