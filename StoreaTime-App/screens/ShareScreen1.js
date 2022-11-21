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
import DimmedNext from '../assets/icons/dimmed_text_next.svg';
import CommunityBox from '../components/CommunityBox.js';
import DimmedSend from '../assets/icons/dimmed_send.svg';
import Send from '../assets/icons/send.svg';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';


export default function RecordScreen({ navigation }) {
    loadBackgroundImageAsync();
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
                <Text style={styles.screenTitle}>Share</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>My Communities</Text>
                <View style={styles.communitiesContainer}>
                </View>

                <Pressable onPress={() => checkCircle(!click)}>
                    <View style={styles.commOne}></View>
                </Pressable>

                <View style={styles.commBox}>
                <Pressable onPress={() => checkCircle(!click)}>
                        <CommunityBox
                            style={styles.box}
                            name={'Asian Food Collective'}
                            memberCount={'581'}
                            privacy={'Public'}
                            clicked={click}
                            picture={'1'}
                        />
                </Pressable>
                        <CommunityBox
                            style={styles.box}
                            name={'Rivera Family'}
                            memberCount={'5'}
                            privacy={'Private'}
                            clicked={click1}
                            picture={'2'}
                        />
                </View>
                <Pressable onPress={() => checkCircle1(!click1)}>
                    <View style={styles.commTwo }></View>
                </Pressable>
            </View>
            {click || click1 ? 
            <Pressable onPress={() => navigation.navigate("ShareScreen2")} style={styles.share}>
                <Send></Send>
            </Pressable> : <DimmedSend style={styles.share}></DimmedSend>}
            <Pressable onPress={() => navigation.navigate('RecordScreen')}>
                    <BackArrow style={styles.backButton}></BackArrow>
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
        bottom: 455,
        right: 150,
        //backgroundColor: 'cyan'
    },
    screenTitle: {
        //backgroundColor: 'cyan',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'center',
        top: 55,
        //backgroundColor: 'cyan',
        position: 'absolute'
    },
    title: {
        top: 130,
        right: 100,
        textAlign: 'left',
        fontSize: 17,
        color: 'white',
        fontFamily: 'JakartaSansBold'
    },
    body: {
        //backgroundColor: 'blue',
        width: 340,
        height: 203,
        bottom: 330,
        alignItems: 'center',
    },
    share: {
        bottom: 60,
        position: 'absolute'
    },
    commOne: {
        //backgroundColor: 'green',
        width: 355,
        height: 84,
        top: 140,
        borderRadius: 12,
        right: 0
    },
    commTwo: {
        //backgroundColor: 'red',
        width: 355,
        height: 84,
        bottom: 38,
        borderRadius: 12,
        right: 0
    },
    box: {
        position: 'absolute'
    },
    commBox: {
        bottom: 79
    },
    send: {
        borderRadius: '50%',
        //backgroundColor: 'cyan',
        //position: 'absolute',
        width: 77,
        height: 77,
        top: 221
    }
});