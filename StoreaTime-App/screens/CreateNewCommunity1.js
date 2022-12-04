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

const DimmedNext = () => {
    return (
        <Pressable>
            <DimmedNextArrow style={styles.nextButton}></DimmedNextArrow>
        </Pressable>
    );
}

export default function CreateNewCommunity1({ navigation }) {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        console.log(result);
        console.log('------------------------------------------------')
        //console.log('URI', result.assets[0].uri)

        if (result) {
            setImage(result.assets[0].uri);
        }
    };

    const [text, onChangeText] = useState("");
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
    let commImageUri = image;
    console.log('image', commImageUri)

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header} >
                <Pressable onPress={() => navigation.goBack()}>
                    <View style={styles.backArrow}>
                        <BackArrow></BackArrow>
                    </View>
                </Pressable>
                <Text style={styles.headerText}>New Community</Text>
            </View>
            <View style={styles.uploadPhotoBox}>
                {!image ? <Pressable onPress={() => pickImage()}>
                    <UploadPhoto style={{ top: 145 }}></UploadPhoto>
                </Pressable> :
                    <View>
                        <Image source={{ uri: image }} style={styles.selectedImage} />
                    </View>
                }

            </View>
            <View style={styles.nameSection}>
                <Text style={styles.communityName}>Community Name</Text>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='e.g. "Asian Food Collective"'
                        placeholderTextColor={'#CCCCCC'}
                    />
                    {(text != "") ?
                        <Pressable onPress={() => navigation.navigate("AddMembersScreen", {commName: text}, {imagePath: commImageUri})}>
                            <NextArrow style={styles.nextButton}></NextArrow>
                        </Pressable> : <DimmedNext></DimmedNext>}
                </View>
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
        left: 91.45,
    },
    backArrow: {
        marginLeft: 26.67,
        //backgroundColor: 'cyan',
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
        top: 332
    },
    selectedImage: {
        width: 110,
        height: 110,
        borderRadius: '100%',
        top: 144

    }
})