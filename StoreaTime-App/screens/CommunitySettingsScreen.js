import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import BackArrow from '../assets/icons/back_arrow2.svg'
import Themes from '../assets/Themes/themes';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import UploadPhoto from '../assets/icons/upload_photo.svg'
import DimmedNextArrow from '../assets/icons/dimmed_next_arrow.svg';
import NextArrow from '../assets/icons/next_arrow.svg';
import * as ImagePicker from 'expo-image-picker';
import { NavigationHelpersContext } from '@react-navigation/native';
import AutocompleteTags from 'react-native-autocomplete-tags';
import DimmedPrivate from '../assets/icons/privateButton.svg';
import DimmedPublic from '../assets/icons/publicButton.svg';
import LitPrivate from '../assets/icons/litPrivateButton.svg';
import LitPublic from '../assets/icons/litPublicButton.svg';
import { m } from 'framer-motion';

const DimmedNext = () => {
    return (
        <Pressable>
            <DimmedNextArrow style={styles.nextButton}></DimmedNextArrow>
        </Pressable>
    );
}




export default function CommunitySettingsScreen({ navigation, route }) {
    const [text, onChangeText] = useState("");
    const [selected, settingSelected] = useState(false);
    const [privateSelected, privateSelection] = useState(false);
    const [publicSelected, publicSelection] = useState(false);

    const handlePrivate = () => {
        settingSelected(true);
        privateSelection(true);
        publicSelection(false);
    }

    const handlePublic = () => {
        settingSelected(true);
        privateSelection(false);
        publicSelection(true);
    }

    loadBackgroundImageAsync();
    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }
    let privacyContent = null;
    if (!selected) {
        privacyContent =
            <View style={styles.settingBox}>
                <Pressable onPress={handlePrivate}>
                    <DimmedPrivate style={styles.privateStyle}></DimmedPrivate>
                </Pressable>
                <Pressable onPress={handlePublic}>
                    <DimmedPublic></DimmedPublic>
                </Pressable>
            </View>
    } else if (selected && privateSelected) {
        privacyContent =
            <View style={styles.settingBox}>
                <LitPrivate style={styles.privateStyle}></LitPrivate>
                <Pressable onPress={handlePublic}>
                    <DimmedPublic></DimmedPublic>
                </Pressable>
            </View>
    } else {
        privacyContent =
        <View style={styles.settingBox}>
            <Pressable onPress={handlePrivate}>
                <DimmedPrivate style={styles.privateStyle}></DimmedPrivate>
            </Pressable>
            <LitPublic></LitPublic>
        </View>
    }

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header} >
                <Pressable onPress={() => navigation.goBack()}>
                    <BackArrow style={styles.backArrow}></BackArrow>
                </Pressable>
                <Text style={styles.headerText}>Settings</Text>
            </View>

            <View style={styles.body}>

                <View style={styles.members}>
                    <Text style={styles.boxTitle}>Sharing Options</Text>
                    {privacyContent}
                </View>

                <View style={styles.tags}>
                    <Text style={styles.boxTitle}>Tags</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder='e.g. “Bulgogi”, “Korean”'
                            placeholderTextColor={'#CCCCCC'}
                        />
                    </View>
                </View>
                {(text != "") ?
                    <Pressable onPress={() => navigation.navigate("AddMembersScreen", { commName: text })}>
                        <NextArrow style={styles.nextButton}></NextArrow>
                    </Pressable> : <DimmedNext></DimmedNext>}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        top: 64,
    },
    headerText: {
        fontFamily: "JakartaSansBold",
        color: Themes.colors.white,
        fontSize: 17,
        left: 125
    },
    backArrow: {
        marginLeft: 26.67,
    },
    uploadPhotoBox: {
        alignItems: 'center',
    },
    nameSection: {
        top: 175,
        marginLeft: 16
    },
    communityName: {
        fontFamily: 'JakartaSansBold',
        fontSize: 22,
        color: Themes.colors.white
    },
    inputBox: {
        flexDirection: 'row',
        width: 358,
        height: 48,
        borderRadius: 24,
        backgroundColor: Themes.colors.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    input: {
        fontFamily: 'JakartaSans',
        fontSize: 15,
        color: "#000000",
        marginLeft: 16,
    },
    nextButton: {
        top: 235,
        left: 310
    },
    selectedImage: {
        width: 110,
        height: 110,
        borderRadius: '100%',
        top: 144

    },
    members: {
        //backgroundColor: 'blue',
        flex: 1,
        margin: 16,
        marginBottom: 25
    },
    tags: {
        //backgroundColor: 'red',
        flex: 1,
        margin: 16,
        marginBottom: 25,
        bottom: 10
    },
    body: {
        flex: 0.5,
        top: 110,
    },
    boxTitle: {
        fontFamily: "JakartaSansBold",
        fontSize: 17,
        color: 'white'
    },
    settingBox: {
        flexDirection: 'row',
        marginTop: 14
    },
    privateStyle: {
        marginRight: 8,
    }
})