import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
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

const DimmedNext = () => {
    return (
        <Pressable>
            <Image style={styles.nextButton}
                source={require('../assets/icons/dimmed_next.png')}></Image>
        </Pressable>
    );
}

export default function RecordScreen({ navigation }) {
    let contentDisplayed = null
    const [isEmpty, empty] = React.useState(true);
    const [text, onChangeText] = React.useState("");

    // These lines of code hide the tab bar
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
                    
            <Pressable onPress={() => navigation.navigate('RecordScreen1')}>
                <BackArrow style={styles.backButton}></BackArrow>
            </Pressable>
            <Text style={styles.screenTitle}>Record</Text>
            <Pressable>
                <View style={styles.reviewButton}>
                    <Text style={styles.reviewText}>Review</Text>
                </View>
            </Pressable>
            </View>
            <Pressable>
            <MicCircle style={styles.micIcon}></MicCircle>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('TextScreen1')}>
                <TypeInstead style={styles.type}></TypeInstead>
            </Pressable>
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
        left: 30,
        //backgroundColor: 'cyan'
    },
    screenTitle: {
        //backgroundColor: 'cyan',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 190,
        left: 145
    },
    header: {
        flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'center',
        top: 55,
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
        left: 0,
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