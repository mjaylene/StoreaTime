import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Prompt from '../components/Prompt';

const DimmedNext = () => {
    return (
        <Pressable>
            <Image style={styles.nextButton}
                source={require('../assets/icons/dimmed_next.png')}></Image>
        </Pressable>
    );
}

export default function Signup1({ navigation }) {
    let contentDisplayed = null
    const [isEmpty, empty] = React.useState(true);
    const [text, onChangeText] = React.useState("");


    useEffect(() => {
        console.log('side effect function 2');
        console.log(text)
    }, [text]);
    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header}>
                    
            <Pressable onPress={() => navigation.navigate('Back ')}>
                <Image style={styles.backButton}
                    source={require('../assets/icons/back.png')}></Image>
            </Pressable>
            <Text style={styles.screenTitle}>Record</Text>
            <Pressable>
                <View style={styles.reviewButton}>
                    <Text style={styles.reviewText}>Review</Text>
                </View>
            </Pressable>
            </View>
            <Image style={styles.micIcon}
                source={require('../assets/icons/mic.png')}></Image>
            <Image style={styles.type}
                source={require('../assets/icons/type.png')}></Image>
            <Prompt 
                text={'Xiao Long Bao'}
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
    backButton: {
        width: 32,
        height: 32,
        //bottom: 240,
        left: 20
    },
    screenTitle: {
        //backgroundColor: 'cyan',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 190,
        left: 140
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 50,
        //backgroundColor: 'cyan',
        position: 'absolute'
    },
    reviewButton: {
        width: 102,
        height: 35,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 8,
        //justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        right: 5,
        marginRight: 20
    },
    reviewText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.49)'
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
});