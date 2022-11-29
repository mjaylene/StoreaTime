import { ImageBackground, StyleSheet, ScrollView, KeyboardAvoidingView, View, Text, Pressable } from 'react-native';
import {useState} from 'react';
import { useFonts } from 'expo-font';
import CommentSection from '../components/CommentSectionText';
import ImageSwiperText from '../components/ImageSwiperText';
import ReadHeader from '../components/ReadHeader';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import Themes from '../assets/Themes/themes';
import ClappingHands from '../assets/icons/clapping_hands.svg'
import ClappingHandsFilled from '../assets/icons/clapping_hands_filled.svg'

export default function ElotesReadScreen({ navigation }) {
    loadBackgroundImageAsync();
    const [liked, setLiked] = useState(false)

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
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position" enabled>
                <ReadHeader navigation={navigation}></ReadHeader>
                <ScrollView centerContent={true}>
                    <View style={styles.promptBox}>
                        <View style={styles.textBox}>
                            <Text style={styles.promptText}>What is your favorite</Text>
                            <Text style={styles.promptText}>memory of Elotes?</Text>
                        </View>
                        <Pressable onPress={() => setLiked(!liked)}>
                            {liked ? <ClappingHandsFilled style={styles.clappingHands} /> : <ClappingHands style={styles.clappingHands} />}
                        </Pressable>
                    </View>
                    <ImageSwiperText 
                        image1={require('../assets/food/elotes_text1.png')}
                        image2={require('../assets/food/elotes_text2.png')}
                        image3={""}
                    >
                    </ImageSwiperText>
                    <CommentSection></CommentSection>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promptBox: {
        width: 358,
        height: 96,
        marginTop: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 26.85,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    promptText: {
        fontFamily: 'JakartaSansBold',
        fontSize: 20,
        color: Themes.colors.white
    },
    textBox: {
        right: 24
    },
    clappingHands: {
        //top: 22,
        left: 18
      },
})