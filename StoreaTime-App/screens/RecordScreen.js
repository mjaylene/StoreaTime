import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import React from "react";
import Prompt from '../components/Prompt';
import BackArrow from '../assets/icons/back_arrow.svg';
import MicCircle from '../assets/icons/mic_circle.svg';
import TypeInstead from '../assets/icons/type.svg';
import RecordAnimation from '../assets/icons/circle_animation.svg'



const animationFunction = () => {
    console.log('hi')
    const Pulse = require('react-native-pulse').default;
    return (
        <Pulse color='white' numPulses={3} diameter={400} speed={20} duration={2000} />
    );
}

export default function RecordScreen({ navigation }) {
    const Pulse = require('react-native-pulse').default;

    let contentDisplayed = null;
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
    const [isActive, setIsActive] = useState(false);
    const [count, isClicked] = useState(0);
    const handleClick = () => {
        console.log('record clicked')
        console.log(count)
        isClicked(count + 1)
        setIsActive(current => !current);

        // setIsActive(true);
    };
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
                {count % 2 !== 1 && count !== 0 ?
                    <Pressable onPress={() => navigation.navigate("PhotoScreen1")}>
                        <View style={styles.reviewFilledButton}>
                            <Text style={styles.reviewFilledText}>Review</Text></View>
                    </Pressable>
                    : <View style={styles.reviewButton}>
                        <Text style={styles.reviewText}>Review</Text>
                    </View>}
            </View>
            <Pressable onPress={handleClick}>
                {!isActive ? <MicCircle style={styles.micIcon}></MicCircle> :
                    <View>
                        <View style={styles.pulse}>
                            <Pulse color='white' numPulses={3} diameter={400} speed={10} duration={1000} initialDiameter={200} />
                        </View>
                        <MicCircle style={styles.micIcon}></MicCircle>
                    </View>
                }
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
    reviewFilledText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#43009B'
    },
    reviewFilledButton: {
        width: 102,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        marginRight: 20
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
    pulse: {
        top: 150
    },
    review: {
        width: 102,
        height: 35,
        backgroundColor: 'red',
    }
});