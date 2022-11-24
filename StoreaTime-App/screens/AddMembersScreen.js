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
import MultipleSelection from '../Multiselect1'
import { m } from 'framer-motion';

const DimmedNext = () => {
    return (
        <Pressable>
            <DimmedNextArrow style={styles.nextButton}></DimmedNextArrow>
        </Pressable>
    );
}

export default function AddMembersScreen({ navigation, route }) {
    const suggestions = ['Angel', 'Daryl', 'Lisette', 'Jaylene'];
    const [tags, setTags] = useState([]);
    const labelExtractor = (tag) => tag;

    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [text, onChangeText] = useState(" ");
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

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header} >
                <Pressable onPress={() => navigation.goBack()}>
                    <BackArrow style={styles.backArrow}></BackArrow>
                </Pressable>
                <Text style={styles.headerText}>Add Members</Text>
            </View>

            <View style={styles.body}>

                <View style={styles.members}>
                    <MultipleSelection></MultipleSelection>
                </View>

                <View style={styles.recent}>
                    <Text style={styles.boxTitle}>Recent</Text>
                </View>


                <View style={styles.friends}>
                    <View style={styles.friendsText}>
                        <Text style={styles.boxTitle}>All Friends </Text>
                        <Text style={{fontFamily: 'JakartaSans', fontSize: 13, color: 'white', marginTop: 2}}> 8</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                {(text != "") ?
                        <Pressable onPress={() => navigation.navigate("CommunitySettingsScreen", {commName: text})}>
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
        left: 91.45
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
        //position: 'absolute',
        //top: 190,
        //left: 310
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        right: 20

    },
    selectedImage: {
        width: 110,
        height: 110,
        borderRadius: '100%',
        top: 144

    },
    members: {
        //backgroundColor: 'blue',
        //flex: 1,
        margin: 16,
        marginBottom: 25,
        bottom: 100
    },
    recent: {
        //backgroundColor: 'red',
        //flex: 1,
        margin: 16,
        marginBottom: 25,
        bottom: 100

    },
    friends: {
        //backgroundColor: 'green',
        //flex: 1,
        margin: 16,
        bottom: 100

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
    friendsText: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})