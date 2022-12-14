import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import React from "react";
//import Prompt from '../components/Prompt';
import BackArrow from '../assets/icons/back_arrow.svg';
import MicCircle from '../assets/icons/mic_circle.svg';
import TypeInstead from '../assets/icons/type.svg';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import Time from '../components/Time';
import RightArrow from '../assets/icons/keyboard_arrow_right.svg'
import LeftArrow from '../assets/icons/keyboard_arrow_left.svg'
import ExitButton from '../assets/icons/exitRecord.svg'
import RestartButton from '../assets/icons/restart'
import Carousel from 'react-native-reanimated-carousel';




let selectedPrompt = 0

function Prompt({ text, edit, record }) {
    const promptArray = ['Tell us about your first memory of eating/making ' + text + '?', 'Who are you reminded of when making ' + text + '?',
        'If you could only eat one meal or food item for the rest of your life, what would you eat and why?',
        'What’s the first dish that you cooked on your own? How did it taste?',
    'What is the cultural significance of ' + text + '?']

    const [promptIndex, onChangeIndex] = React.useState(0);
    //console.log('record', record)
    selectedPrompt = promptIndex
    //console.log("PROMPT i", selectedPrompt)
    // console.log("PROMPT itself", promptArray[selectedPrompt])
    const arrLen = 4;
    useEffect(() => {
        console.log('side effect function 3');
        console.log(promptIndex)
    }, [promptIndex]);
    return (
        <View style={styles.promptBox}>
        <LeftArrow style={styles.backArrow}></LeftArrow>
            <Carousel
                width={304}
                height={120}
                data={promptArray}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View style={styles.innerPromptBox}>
                        <View style={styles.promptContainer}>
                            <Text style={styles.prompt}>{promptArray[index]}</Text>
                        </View>
                    </View>
                )}
            />
            <RightArrow style={styles.nextArrow}></RightArrow>
        </View>

    );

}

// Credit for Stopclock Feature: https://www.waldo.com/blog/learn-react-native-timer
export default function RecordScreen({ navigation, route }) {
    loadBackgroundImageAsync();
    //const dishName = route.params.paramDish;
    const [time, setTime] = useState(0);
    /* -1 => stopped, 0 => paused, 1 => playing */
    const [status, setStatus] = useState(-1)
    const reset = () => {
        setTime(0);
    }
    useEffect(() => {
        let timerID;
        if (status === 1) {
            timerID = setInterval(() => {
                setTime((time) => time + 10);
            }, 10)
        } else {
            clearInterval(timerID)
            if (status === -1)
                reset();
        }
        return () => { clearInterval(timerID) }
    }, [status])
    const handleStart = () => {
        setStatus(1);
    }
    const handlePause = () => {
        setStatus(status === 0 ? 1 : 0);
    }

    const handleClick = () => {
        //console.log('record clicked')
        //console.log(count)
        isClicked(count + 1)
        setIsActive(current => !current);
        if (count % 2 == 0) {
            handleStart();
        } else {
            handlePause();
        }
        // setIsActive(true);
    };
    const Pulse = require('react-native-pulse').default;
    const dishName = route.params.paramDish;
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
    function resetEverything() {
        setTime(0);
        isClicked(0);
        setIsActive(false);
        handlePause()

    }
    let isRecord = false;

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <BackArrow style={styles.backButton}></BackArrow>
                </Pressable>

                <Text style={styles.screenTitle}>Record</Text>
                {count % 2 !== 1 && count !== 0 ?
                    <Pressable onPress={() => navigation.navigate("EditScreen1", { paramDish: dishName, promptNum: selectedPrompt, recordTime: time })}>
                        <View style={styles.reviewFilledButton}>
                            <Text style={styles.reviewFilledText}>Review</Text></View>
                    </Pressable>
                    : <View style={styles.reviewButton}>
                        <Text style={styles.reviewText}>Review</Text>
                    </View>}
            </View>
            <Pressable onPress={handleClick}>
                {!isActive ? <MicCircle style={styles.micIcon}></MicCircle> :
                    <View style={styles.inProgress}>
                        <View style={styles.pulse}>
                            <Pulse color='white' numPulses={3} diameter={400} speed={10} duration={1000} initialDiameter={200} />
                        </View>
                        <MicCircle style={styles.micIcon}></MicCircle>
                    </View>
                }
            </Pressable>
            {count % 2 === 0 && count !== 0 ? <Time style={styles.timer} time={time} status={0} /> :
                <Time style={styles.timer} time={time} status={1} />}
            {count === 0 ? <Pressable onPress={() => navigation.navigate('TextScreen1', { paramDish: dishName })}>
                <TypeInstead style={styles.type}></TypeInstead>
            </Pressable> :
                <Pressable onPress={() => resetEverything()}>
                    <RestartButton style={styles.type}></RestartButton>
                </Pressable>
            }

            {count > 0 ? isRecord = true : isRecord = false}
            <View style={styles.outerPromptBox}>
                <Prompt
                    text={dishName}
                    edit={false}
                    record={isRecord}
                />
            </View>

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
        left: 40,
        top: 7
        //backgroundColor: 'cyan'
    },
    exitButton: {
        width: 32,
        height: 32,
        //bottom: 240,
        left: 27,
        top: 7
        //backgroundColor: 'cyan'
    },
    screenTitle: {
        //backgroundColor: 'cyan',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 190,
        left: 145,
        top: 7
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
    pulse: {
        top: 150
    },
    review: {
        width: 102,
        height: 35,
        backgroundColor: 'red',
    },
    type: {
        width: 220,
        height: 76,
        top: 70
    },
    blankBox: {
        height: 76
    },
    prompt: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center'
    },
    promptBox: {
        width: 304,
        height: 120,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        //left: 190
    },
    innerPromptBox: {
        width: 304,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    outerPromptBox: {
        alignItems: 'center',
        top: 100

    },
    promptContainer: {
        //backgroundColor: 'blue',
        width: '60%'
    },
    backArrow: {
        width: 9.88,
        height: 16,
        left: 45,
        //backgroundColor: 'blue'
    },
    nextArrow: {
        width: 9.88,
        height: 16,
        right: 45,
        //backgroundColor: 'blue'
    },
    space: {
        width: 32,
        height: 32
    },
    restart: {
        //width: 220,
        //height: 76,
        top: 40,
    },
    inProgress: {
        alignItems: 'center'
    }
});