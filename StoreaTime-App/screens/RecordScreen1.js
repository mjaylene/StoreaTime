import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image, Animated } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Themes from '../assets/Themes/themes';
import RecordScreen from './RecordScreen'
import BackArrow from '../assets/icons/back_arrow.svg';
import DimmedNextArrow from '../assets/icons/dimmed_next_arrow.svg';
import NextArrow from '../assets/icons/next_arrow.svg';
import TextScreen1 from './TextScreen1';
import ShareScreen1 from './ShareScreen1';
import ShareScreen2 from './ShareScreen2';
import PhotoScreen1 from './PhotoScreen1';

let dish = ''

const DimmedNext = () => {
    return (
        <Pressable>
            <DimmedNextArrow style={styles.nextButton}></DimmedNextArrow>
        </Pressable>
    );
}
const Stack = createStackNavigator();

function RecordScreen1Content({ navigation, displayTabBar, setDisplayTabBar }) {
    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
    });

    const [text, onChangeText] = React.useState("");


    useEffect(() => {
        console.log('side effect function 2');
        console.log(text)
    }, [text]);

    dish = text
    console.log("dish", dish)
    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header}>
            <Pressable onPress={() => navigation.navigate("Back ")}>
                <BackArrow style={styles.backButton}></BackArrow>
            </Pressable>
                <Text style={styles.screenTitle}>Record</Text>
            </View>
            <Text style={styles.questionStyle}>What are you {'\n'} cooking today?</Text>
            <Pressable onPress={() => navigation.navigate('RecordScreen', {
                displayTabBar: displayTabBar,
                setDisplayTabBar: setDisplayTabBar,
            })}>

            </Pressable>
            <View style={styles.inputBox}>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='e.g. "Samosas"'
                    placeholderTextColor={'#ebdedd'}
                />
            </View>
            <View style={styles.footer}>
            {(text != "") ?
                    <Pressable onPress={() => navigation.navigate('RecordScreen', {paramDish:dish})}>
                        <NextArrow style={styles.nextButton}></NextArrow>
                    </Pressable> : <DimmedNext></DimmedNext>}
            </View>
        </ImageBackground>
    )
}

export default function RecordScreen2({ navigation, displayTabBar, setDisplayTabBar }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RecordScreen1" component={RecordScreen1Content} options={{ headerShown: false }} />
            <Stack.Screen name="RecordScreen" component={RecordScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TextScreen1" component={TextScreen1} options={{ headerShown: false }} />
            <Stack.Screen name="ShareScreen1" component={ShareScreen1} options={{ headerShown: false }} />
            <Stack.Screen name="ShareScreen2" component={ShareScreen2} options={{ headerShown: false }} />
            <Stack.Screen name="PhotoScreen1" component={PhotoScreen1} options={{ headerShown: false }} />
            {/* ADD THE REST OF THE RECORD SCREENS */}
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        top: 61,
        //backgroundColor: 'cyan',
        flex: 1
    },
    image: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    screenTitle: {
        //backgroundColor: 'cyan',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        //   marginRight: 190,
        // left: 140
    },
    body: {
        flex: 1,
        alignItems: 'left',
        backgroundColor: 'orange'
    },
    questionStyle: {
        fontSize: 32,
        fontFamily: 'Romana-Bold',
        color: Themes.colors.white,
        textAlign: 'left',
        right: 60,
        marginBottom: '10%',
        bottom: 30,
        top: 70
    },
    backButton: {
        width: 32,
        height: 32,
        bottom: 240,
    },
    nextButton: {
        width: 64,
        height: 64,
        //top: 80,
        marginLeft: 280,
    },
    inputBox: {
        alignItems: 'left',
        flex: 1,
        top: 100
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
        bottom: 44,
        width: 315,
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
        right: 135 
    },
    nextButton: {
        width: 64,
        height: 64,
        top: 130,
        marginLeft: 280,
    },
    footer: {
        height: '10%',
        flex: 1,
        //backgroundColor: 'blue'
    }
})