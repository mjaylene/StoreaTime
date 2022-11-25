import { Text, View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import AccessCommunityHeader from '../../components/AccessCommunityHeader';
import loadBackgroundImageAsync from '../../components/LoadBackgroundImageAsync';
import Message from '../../components/Message';


export default function RiveraFamilyMessages({ navigation }) {
    loadBackgroundImageAsync();
    return (
        <ImageBackground source={require('../../assets/background.png')} resizeMode="cover" style={styles.image}>
            <AccessCommunityHeader image={require('../../assets/community/rivera_family_pfp.png')} communityName={"Rivera Family"} navigation={navigation}></AccessCommunityHeader>
            <Message name={"Melissa Rivera"} text1={"Was thinking of making"} text2={"Guac tonight but idk how"} pfp={require('../../assets/profile/MelissaRivera.png')}></Message>
            <Message name={"Alvaro Rivera"} text1={"You should ask dad he"} text2={"knows"} pfp={require('../../assets/profile/MelissaRivera.png')}></Message>
            <Message name={"Dad Rivera"} text1={"I can record and share"} text2={"in a few min"} pfp={require('../../assets/profile/MelissaRivera.png')}></Message>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1
    },
})