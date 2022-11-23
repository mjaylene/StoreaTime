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
import Prompt from '../components/Prompt';
import PlayButton from '../assets/icons/playButton.svg';
import PauseButton from '../assets/icons/pauseButton.svg';
import Time from '../components/Time';
import { m } from 'framer-motion';
import millisToMinutesAndSeconds from '../utils/TimeConversion.js';

let playBool = false
const maxTrimDuration = 60000;
const minimumTrimDuration = 1000;
const totalDuration = 180000;

const initialLeftHandlePosition = 6000;
const initialRightHandlePosition = 36000;

const scrubInterval = 50;



class AudioTrimmer extends Component {
    state = {
        playing: false,
        trimmerLeftHandlePosition: initialLeftHandlePosition,
        trimmerRightHandlePosition: initialRightHandlePosition,
        scrubberPosition: 6000
    }


    playScrubber = () => {
        playBool = false
        this.setState({ playing: true });

        this.scrubberInterval = setInterval(() => {
            this.setState({ scrubberPosition: this.state.scrubberPosition + scrubInterval })
        }, scrubInterval)
    }

    pauseScrubber = () => {
        playBool = true
        clearInterval(this.scrubberInterval)

        this.setState({ playing: false, scrubberPosition: this.state.trimmerLeftHandlePosition });
    }

    onHandleChange = ({ leftPosition, rightPosition }) => {
        this.setState({
            trimmerRightHandlePosition: rightPosition,
            trimmerLeftHandlePosition: leftPosition
        })
    }

    onScrubbingComplete = (newValue) => {
        this.setState({ playing: false, scrubberPosition: newValue })
    }

    render() {
        const {
            trimmerLeftHandlePosition,
            trimmerRightHandlePosition,
            scrubberPosition,
            playing,
        } = this.state;


        return (
            <View style={styles.container}>

                <View style={styles.trimBox}>
                    <Trimmer
                        onHandleChange={this.onHandleChange}
                        totalDuration={totalDuration}
                        trimmerLeftHandlePosition={trimmerLeftHandlePosition}
                        trimmerRightHandlePosition={trimmerRightHandlePosition}
                        minimumTrimDuration={minimumTrimDuration}
                        maxTrimDuration={maxTrimDuration}
                        maximumZoomLevel={200}
                        zoomMultiplier={20}
                        initialZoomValue={2}
                        scaleInOnInit={true}
                        tintColor="#FEA858"
                        markerColor="white"
                        trackBackgroundColor='rgba(255, 255, 255, 0.29)'
                        trackBorderColor="rgba(255, 255, 255, 0.29)"
                        scrubberColor="white"
                        scrubberPosition={scrubberPosition}
                        onScrubbingComplete={this.onScrubbingComplete}
                        onLeftHandlePressIn={() => console.log('onLeftHandlePressIn')}
                        onRightHandlePressIn={() => console.log('onRightHandlePressIn')}
                        onScrubberPressIn={() => console.log('onScrubberPressIn')}
                    />
                </View>
                {
                    playing
                        ? <Pressable onPress={this.pauseScrubber}><View style={styles.play}><PauseButton></PauseButton></View></Pressable>
                        : <Pressable onPress={this.playScrubber}>
                            <View style={styles.play}>
                                <PlayButton style={styles.playIcon}></PlayButton>
                            </View>
                        </Pressable>
                }
            </View>
        );
    }
}
// Credit for Trimmer: https://github.com/repodio/react-native-trimmer

export default function EditScreen1({ navigation, route }) {
    loadBackgroundImageAsync();
    const recordTime = route.params.recordTime; //millisToMinutesAndSeconds(route.params.recordTime);
    console.log('time', recordTime)
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
            <Pressable onPress={handleStart}>
                <View style={styles.play2}></View>
            </Pressable>
            <View style={styles.timestamp}>
                <Time style={styles.time} time={time} status={1} />
                <Text style={styles.time}> / </Text>
                <Time style={styles.time} time={recordTime} status={1}></Time>
            </View>
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
    container: {
        flexDirection: 'row',
        width: '90%',
        //alignItems: 'center'
        //backgroundColor: 'cyan'
    },
    play: {
        width: 80,
        height: 100,
        backgroundColor: "rgba(255, 255, 255, 0.29)",
        right: 370,
        top: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, 0.30)",
        borderWidth: 1
    },
    playIcon: {
        position: 'absolute',
    },
    trimBox: {
        //backgroundColor: 'blue',
        left: 20
    },
    timestamp: {
        flexDirection: 'row'
    },
    time: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'JakartaSansBold',
        top: 40
    },
    play2: {
        width: 70,
        height: 32,
        //backgroundColor: 'red',
        right: 155,
        bottom: 53
    }
});