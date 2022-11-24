import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import RightArrow from '../assets/icons/keyboard_arrow_right.svg'
import LeftArrow from '../assets/icons/keyboard_arrow_left.svg'


export default function prompt({ text, edit, index }) {
    const promptArray = ['Tell us about your first memory of eating/making ' + text + '?', 'Who are you reminded of when making ' + text + '?',
        'If you could only eat one meal or food item for the rest of your life, what would you eat and why?',
        'What’s the first dish that you cooked on your own? How did it taste?',
    'What is the cultural significance of ' + text + '?']

    const [promptIndex, onChangeIndex] = React.useState(0);

    useEffect(() => {
        console.log('side effect function 3');
        console.log(promptIndex)
    }, [promptIndex]);
    return (
        <View style={styles.promptBox}>
            {!edit ? <Pressable onPress={() => promptIndex - 1 >= 0 ? onChangeIndex(promptIndex - 1) : onChangeIndex(promptIndex + 0)}>
                <LeftArrow style={styles.backArrow}></LeftArrow>
            </Pressable> : <View></View>}

            <View style={styles.promptContainer}>
                <Text style={styles.prompt}>{promptArray[index]}</Text>
            </View>
            {!edit ?             <Pressable onPress={() => promptIndex + 1 < promptArray.length ? onChangeIndex(promptIndex + 1) : onChangeIndex(promptIndex - 0)}>
                <RightArrow style={styles.nextArrow}></RightArrow>
            </Pressable> 
            :
            <View></View>}

        </View>
    );
}


const styles = StyleSheet.create({
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
        top: 204
        //left: 190
    },
    promptContainer: {
        //backgroundColor: 'blue',
        width: '60%'
    },
    backArrow: {
        width: 9.88,
        height: 16,
        right: 10,
        //backgroundColor: 'blue'
    },
    nextArrow: {
        width: 9.88,
        height: 16,
        left: 10,
        //backgroundColor: 'blue'
    },
});