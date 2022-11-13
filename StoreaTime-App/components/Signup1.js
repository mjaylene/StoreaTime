import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

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
            <Pressable onPress={() => navigation.navigate('Back ')}>
                <Image style={styles.backButton}
                    source={require('../assets/icons/back.png')}></Image>
            </Pressable>
            <Text style={styles.title}>Hello...</Text>
            <View style={styles.inputBox}>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Full Name"
                    placeholderTextColor={'#ebdedd'}
                />
                {(text != "") ?
                    <Pressable onPress={() => navigation.navigate('Signup2')}>
                        <Image style={styles.nextButton}
                            source={require('../assets/icons/next.png')}></Image>
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
        //fontFamily: 'Plus Jakarta Sans',
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
        bottom: 240,
        marginLeft: '8%'
    },
    nextButton: {
        top: 275,
        marginLeft: 280,
    },
});