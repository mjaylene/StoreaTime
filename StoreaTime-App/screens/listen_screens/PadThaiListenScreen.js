import { ImageBackground, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useFonts } from 'expo-font';
import ListenPlayer from '../../components/listenPlayer'
import CommentSection from '../../components/CommentSection';
import ImageSwiper from '../../components/ImageSwiper';
import ListenHeader from '../../components/ListenHeader';
import loadBackgroundImageAsync from '../../components/LoadBackgroundImageAsync';

export default function PadThaiListenScreen({ navigation }) {
    loadBackgroundImageAsync();

    const [loaded] = useFonts({
        Romana: require('../../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <ImageBackground source={require('../../assets/background.png')} resizeMode="cover" style={styles.image}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position" enabled>
                <ListenHeader navigation={navigation}></ListenHeader>
                <ScrollView centerContent={true}>
                    <ImageSwiper image1={require('../../assets/food/padthai1.png')}
                        image2={require('../../assets/food/padthai2.png')}
                        image3={require('../../assets/food/padthai3.png')}
                        image4={""}
                    ></ImageSwiper>
                    <ListenPlayer textLine1={"How Pad Thai reminds me  "} textLine2={"of home"} endDuration={"1:38"} audio={require('../../assets/sounds/padthai_audio.mp3')}></ListenPlayer>
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