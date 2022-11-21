import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../assets/icons/back_arrow.svg';
import DimmedNextArrow from '../assets/icons/dimmed_next_arrow.svg';
import NextArrow from '../assets/icons/next_arrow.svg';


const DimmedNext = () => {
    return (
        <Pressable>
            <DimmedNextArrow style={styles.nextButton}></DimmedNextArrow>
        </Pressable>
    );
}

export default function Signup1({ navigation }) {
    let contentDisplayed = null
    const [isEmpty, empty] = React.useState(true);
    const [user, onChangeUser] = React.useState("");
    const [password, onChangePass] = React.useState("");


    useEffect(() => {
        console.log('side effect function 2');
        console.log(user)
    }, [user, password]);
    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <Pressable onPress={() => navigation.navigate('Back ')}>
                <BackArrow style={styles.backButton}></BackArrow>
            </Pressable>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputBox}>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUser}
                    value={user}
                    placeholder="Email"
                    placeholderTextColor={'#ebdedd'}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangePass}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={'#ebdedd'}
                    secureTextEntry
                />
                {(user != "" && password != "") ?
                    <Pressable onPress={() => navigation.navigate('Home')}>
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
        bottom: 200,
        marginLeft: '8%'
    },
    nextButton: {
        top: 230,
        marginLeft: 280,
    },
});