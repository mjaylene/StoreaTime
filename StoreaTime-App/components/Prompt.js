import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";

function next(index, list) {
    if (index + 1 < list.length) {
        index += 1
    console.log('next')
    console.log(index) 
    }
}

function previous(index, list) {
    if (index - 1 > 0) {
        index -= 1
    }
    console.log('prev')
    console.log(index)
}

export default function prompt({text}) {
    const promptArray = ['Tell us about your first memory of ' + text + '?', 'Who are you reminded of when making ' + text + '?',
                        'If you could only eat one meal or food item for the rest of your life, what would you eat and why?',
                        'What’s the first dish that you cooked on your own? How did it taste?',
                        'What is the cultural significance of ' + text]
   // console.log(promptArray)
    //var promptIndex = 0
    const [promptIndex, onChangeIndex] = React.useState(0);

    useEffect(() => {
        console.log('side effect function 3');
        console.log(promptIndex)
    }, [promptIndex]);
    return (
        <View style={styles.promptBox}>
        <Pressable onPress={() => promptIndex - 1 >= 0 ? onChangeIndex(promptIndex - 1):  onChangeIndex(promptIndex + 0)}>
        <Image style={styles.backArrow}
                source={require('../assets/icons/back.png')}></Image>
        </Pressable>
            <View style={styles.promptContainer}>
                <Text style={styles.prompt}>{promptArray[promptIndex]}</Text>
            </View>
            <Pressable onPress={() => promptIndex + 1 < promptArray.length ? onChangeIndex(promptIndex + 1) : onChangeIndex(promptIndex - 0)}>
            <Image style={styles.nextArrow}
                source={require('../assets/icons/next_arrow.png')}></Image>
            </Pressable>
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
        top: 130
        //left: 190
    },
    promptContainer: {
        //backgroundColor: 'blue',
        width: '60%'
    },
    backArrow: {
        width: 9.88,
        height: 16,
        right: 35,
       // backgroundColor: 'blue'
    },
    nextArrow: {
        width: 9.88,
        height: 16,
        left: 35,
       // backgroundColor: 'blue'
    }
});