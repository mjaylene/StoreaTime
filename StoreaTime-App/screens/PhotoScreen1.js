import { Text, View, StyleSheet, Button, ImageBackground, SafeAreaView, Pressable, Image, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import BackArrow from '../assets/icons/back_arrow.svg';
import Next from '../assets/icons/next_text.svg';
import BlankImage from '../assets/icons/blank_image.svg';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import * as ImagePicker from 'expo-image-picker';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';


const PhotoBox = () => {
    return (
        <Pressable onPress={() => pickImage()} style={{ marginTop: 30 }}>
            <BlankImage style={styles.blank}></BlankImage>
        </Pressable>
    )
}

export default function PhotoScreen1({ navigation, route }) {
    loadBackgroundImageAsync();
    // Image Picker source: Bug Ninza 
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);
    const [image6, setImage6] = useState(null);

    const dishName = route.params.paramDish;


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

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const pickImage2 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        console.log(result);
        console.log('------------------------------------------------')
        //console.log('URI', result.assets[0].uri)

        if (!result.canceled) {
            setImage2(result.assets[0].uri);
        }
    };

    const pickImage3 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        console.log(result);
        console.log('------------------------------------------------')
        //console.log('URI', result.assets[0].uri)

        if (!result.canceled) {
            setImage3(result.assets[0].uri);
        }
    };
    const pickImage4 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        console.log(result);
        console.log('------------------------------------------------')
        //console.log('URI', result.assets[0].uri)

        if (!result.canceled) {
            setImage4(result.assets[0].uri);
        }
    };

    const pickImage5 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        console.log(result);
        console.log('------------------------------------------------')
        //console.log('URI', result.assets[0].uri)

        if (!result.canceled) {
            setImage5(result.assets[0].uri);
        }
    };

    const pickImage6 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        console.log(result);
        console.log('------------------------------------------------')
        //console.log('URI', result.assets[0].uri)

        if (!result.canceled) {
            setImage6(result.assets[0].uri);
        }
    };

    if (hasGalleryPermission === false) {
        return <Text>No access to Internal Storage</Text>
    }

    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

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
    return (
            <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.header}>
                    <Pressable onPress={() => navigation.navigate('RecordScreen', { paramDish: dishName })}>
                        <BackArrow style={styles.backButton}></BackArrow>
                    </Pressable>
                    <Text style={styles.screenTitle}>Photos</Text>
                    <Pressable onPress={() => navigation.navigate("ShareScreen1")}>
                        <Next style={styles.nextButton}></Next>
                    </Pressable>
                </View>
                <View style={styles.body}>
                    <Text style={styles.optional}>Add photos (Optional)</Text>
                    <View style={styles.topRow}>
                        {!image ? <Pressable onPress={() => pickImage()}>
                            <BlankImage style={styles.blank}></BlankImage>
                        </Pressable> :
                            <Image source={{ uri: image }} style={styles.selectedImage} />}

                        {!image2 ? <Pressable onPress={() => pickImage2()}>
                            <BlankImage style={styles.blank}></BlankImage>
                        </Pressable> :
                            <Image source={{ uri: image2 }} style={styles.selectedImage} />}

                        {!image3 ? <Pressable onPress={() => pickImage3()}>
                            <BlankImage style={styles.blank}></BlankImage>
                        </Pressable> :
                            <Image source={{ uri: image3 }} style={styles.selectedImage} />}
                    </View>
                    <View style={styles.bottomRow}>
                        {!image4 ? <Pressable onPress={() => pickImage4()}>
                            <BlankImage style={styles.blank}></BlankImage>
                        </Pressable> :
                            <Image source={{ uri: image4 }} style={styles.selectedImage} />}
                        {!image5 ? <Pressable onPress={() => pickImage()}>
                            <BlankImage style={styles.blank}></BlankImage>
                        </Pressable> :
                            <Image source={{ uri: image5 }} style={styles.selectedImage} />}
                        {!image6 ? <Pressable onPress={() => pickImage()}>
                            <BlankImage style={styles.blank}></BlankImage>
                        </Pressable> :
                            <Image source={{ uri: image6 }} style={styles.selectedImage} />}
                    </View>
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
        right: 80,
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
        bottom: 150,
        justifyContent: 'center'
    },
    selectedImage: {
        width: 112,
        height: 112,
        borderRadius: 24,
        margin: 5
    }
});