import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../assets/icons/back_arrow.svg'
import LitNextArrow from '../assets/icons/lit_next_arrow.svg'
import Themes from '../assets/Themes/themes';
import RecordScreen from './RecordScreen'

const Stack = createStackNavigator();

function RecordScreen1Content({ navigation, displayTabBar, setDisplayTabBar }) {

    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header}>
                <Text style={styles.screenTitle}>Record</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.questionStyle}>What are you </Text>
                <Text style={styles.questionStyle}>cooking today?</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('RecordScreen', {
                displayTabBar: displayTabBar,
                setDisplayTabBar: setDisplayTabBar
            })}>
                <LitNextArrow style={styles.nextArrow}></LitNextArrow>
            </Pressable>

        </ImageBackground>
    )
}

export default function RecordScreen2({ navigation, displayTabBar, setDisplayTabBar }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RecordScreen1" component={RecordScreen1Content} options={{ headerShown: false }} />
            <Stack.Screen name="RecordScreen" component={RecordScreen} options={{ headerShown: false }} />
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
        flex: 1
    },
    questionStyle: {
        fontSize: 32,
        fontFamily: 'Romana-Bold',
        color: Themes.colors.white
    },
    nextArrow: {
        marginBottom: 24,
        left: 133.45

    }
})