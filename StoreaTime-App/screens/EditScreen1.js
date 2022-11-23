import { Text, View, StyleSheet, ImageBackground, Pressable, Image, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import React, { Component } from 'react'
import { useFonts } from 'expo-font';
import BackArrow from '../assets/icons/back_arrow.svg';
import Next from '../assets/icons/next_text.svg';
import BlankImage from '../assets/icons/blank_image.svg';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import * as ImagePicker from 'expo-image-picker';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Delete from '../assets/icons/delete_image.svg';
import { set } from 'react-native-reanimated';
import Trimmer from 'react-native-trimmer'
import AudioTrimmer from '../components/Trimmer';
import Prompt from '../components/Prompt';


// Credit for Trimmer: https://github.com/repodio/react-native-trimmer

export default function EditScreen1({ navigation, route }) {
    loadBackgroundImageAsync();
    
    const dishName = route.params.paramDish;
    const selected = route.params.promptNum;
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
                <Pressable onPress={() => navigation.navigate('RecordScreen', { paramDish: dishName })}>
                    <BackArrow style={styles.backButton}></BackArrow>
                </Pressable>
                <Text style={styles.screenTitle}>Edit</Text>
                <Pressable onPress={() => navigation.navigate("PhotoScreen1", { paramDish: dishName })}>
                    <Next style={styles.nextButton}></Next>
                </Pressable>
            </View>
            <AudioTrimmer></AudioTrimmer>
            <Prompt 
                text={dishName}
                edit={true}
                index={selected}
            />
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
        right: 95,
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
        bottom: 155,
        justifyContent: 'center'
    },
    selectedImage: {
        width: 112,
        height: 112,
        borderRadius: 24,
        margin: 5,
    },
    deleteButton: {
        position: 'absolute',
        right: 13,
        top: 13
    },
});