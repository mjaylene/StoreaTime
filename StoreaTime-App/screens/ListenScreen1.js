import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';
import ListenPlayer from '../components/listenPlayer';
import DownArrow from '../assets/icons/down_arrow.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ListenScreen1() {
    const [index, setIndex] = useState(1);

    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
    });

    if (!loaded) {
        return null;
    }


    const images = {
        image1: require('../assets/food/ramen_image1.png'),
        image2: require('../assets/food/ramen_image2.png'),
        image3: require('../assets/food/ramen_image3.png'),
        image4: require('../assets/food/ramen_image4.png')
    }

    function setImage() {
        if (index === 1) {
            setIndex(2)
        } else if (index == 2) {
            setIndex(3)
        } else if (index == 3) {
            setIndex(4)
        } else {
            setIndex(1)
        }
    }
    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.headerBox}>
                <View style={styles.arrowStyle}>
                    <DownArrow></DownArrow>
                </View>
                <View style={styles.headerStyle}>
                    <Text style={styles.textStyle}>Listen</Text>
                </View>
            </View>
            <Pressable onPress={() => setImage()}>
                {index === 1 ? <Image source={images.image1} style={styles.imageStyle} />
                    : index === 2 ? <Image source={images.image2} style={styles.imageStyle} />
                        : index === 3 ? <Image source={images.image3} style={styles.imageStyle} />
                            : <Image source={images.image4} style={styles.imageStyle} />
                }
            </Pressable>
            <ListenPlayer textLine1={"How did you learn to make "} textLine2={"Kanagawa Ramen?"} endDuration={"1:20"}></ListenPlayer>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerStyle: {
        alignItems: 'center' 
    },
    arrowStyle: {
        bottom: 40,
        left: 24,
        flex: 1
    },
    textStyle: {
        color: Themes.colors.white,
        fontFamily: 'JakartaSans',
        fontWeight: 'bold',
        fontSize: 17,
        bottom: 40,
        marginRight: windowWidth / 2 - 24
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: 358,
        height: 353,
        borderRadius: 24,
        marginBottom: 24,
    }
})