import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import React from "react";
import Prompt from '../components/Prompt';
import BackArrow from '../assets/icons/back_arrow.svg';
import MicCircle from '../assets/icons/mic_circle.svg';
import TypeInstead from '../assets/icons/type.svg';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import Time from '../components/Time';


export default function RecordScreen({ navigation, route }) {
    loadBackgroundImageAsync();

    //const dishName = route.params.paramDish;
    const [time,setTime]=useState(0);
    /* -1 => stopped, 0 => paused, 1 => playing */
    const [status,setStatus]=useState(-1)
    const reset=()=>{
        setTime(0);
    }
    useEffect(()=>{
        let timerID;
        if(status===1){
            timerID = setInterval(()=>{
                setTime((time) => time + 10);
            },10)
        }else{
            clearInterval(timerID)
            if(status===-1)
            reset();
        }
        return ()=>{clearInterval(timerID)}
    },[status])
    const handleStart=()=>{
        setStatus(1);
    }
    const handlePause=()=>{
        setStatus(status===0?1:0);
    }

    const handleClick = () => {
        console.log('record clicked')
        console.log(count)
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
    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header}>

                <Pressable onPress={() => navigation.navigate('RecordScreen1')}>
                    <BackArrow style={styles.backButton}></BackArrow>
                </Pressable>
                <Text style={styles.screenTitle}>Record</Text>
                {count % 2 !== 1 && count !== 0 ?
                    <Pressable onPress={() => navigation.navigate("PhotoScreen1", { paramDish: dishName })}>
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
            <Time style={styles.timer} time={time} />
            {count === 0 ? <Pressable onPress={() => navigation.navigate('TextScreen1', { paramDish: dishName })}>
                <TypeInstead style={styles.type}></TypeInstead>
            </Pressable> : <View style={styles.blankBox}></View>}

            <Prompt 
                text={dishName}
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
        left: 40,
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
    }
});