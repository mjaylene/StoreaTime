import { ImageBackground, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useFonts } from 'expo-font';
import ListenPlayer from '../components/listenPlayer';
import CommentSection from '../components/CommentSection';
import ImageSwiper from '../components/ImageSwiper';
import ListenHeader from '../components/ListenHeader';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';

export default function RamenListenScreen({ navigation }) {
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
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position" enabled>
                <ListenHeader navigation={navigation}></ListenHeader>
                <ScrollView centerContent={true}>
                    <ImageSwiper image1={require('../assets/food/ramen_image1.png')}
                        image2={require('../assets/food/ramen_image2.png')}
                        image3={require('../assets/food/ramen_image3.png')}
                        image4={require('../assets/food/ramen_image4.png')}
                    ></ImageSwiper>
                    <ListenPlayer textLine1={"How did you learn to make "} textLine2={"Kanagawa Ramen?"} endDuration={"1:40"}></ListenPlayer>
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
})