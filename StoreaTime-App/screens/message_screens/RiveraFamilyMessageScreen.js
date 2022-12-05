import { Text, View, StyleSheet, ImageBackground, Pressable, Image, KeyboardAvoidingView } from 'react-native';
import { useEffect, useState } from 'react';
import AccessCommunityHeader from '../../components/AccessCommunityHeader';
import loadBackgroundImageAsync from '../../components/LoadBackgroundImageAsync';
import Message from '../../components/Message';
import MessageInput from '../../components/MessageInput';
import SentMessage from '../../components/SentMessage';


export default function RiveraFamilyMessages({ navigation }) {
    loadBackgroundImageAsync();

    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [message3, setMessage3] = useState("");
    const [hasSent1, setHasSent1] = useState(false);
    const [hasSent2, setHasSent2] = useState(false);
    const [hasSent3, setHasSent3] = useState(false);



    // These lines of code hide the tab bar
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
        <ImageBackground source={require('../../assets/background.png')} resizeMode="cover" style={styles.image}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position" enabled>
                <AccessCommunityHeader image={require('../../assets/community/rivera_family_pfp.png')} communityName={"Rivera Family"} navigation={navigation}></AccessCommunityHeader>
                <View style={styles.sentMessagesBox}>
                    <Message name={"Melissa Rivera"} text1={"Was thinking of making"} text2={"Guac tonight but idk how"} pfp={require('../../assets/profile/MelissaRivera.png')}></Message>
                    <Message name={"Alvaro Rivera"} text1={"You should ask dad he"} text2={"knows"} pfp={require('../../assets/profile/AlvaroRiveraReal.png')}></Message>
                    <Message name={"Dad Rivera"} text1={"I can record and share"} text2={"in a few min"} pfp={require('../../assets/profile/DadRivera.png')}></Message>
                    {hasSent1 ? <SentMessage name={"Jordan Nakamura"} text1={message1} text2={""} pfp={require('../../assets/profile/AlvaroRivera.png')}></SentMessage> : console.log("nothing")}
                    {hasSent2 ? <SentMessage name={"Jordan Nakamura"} text1={message2} text2={""} pfp={require('../../assets/profile/AlvaroRivera.png')}></SentMessage> : console.log("nothing")}
                    {hasSent3 ? <SentMessage name={"Jordan Nakamura"} text1={message3} text2={""} pfp={require('../../assets/profile/AlvaroRivera.png')}></SentMessage> : console.log("nothing")}
                </View>
                <MessageInput setHasSent1={setHasSent1} setHasSent2={setHasSent2} setHasSent3={setHasSent3} setMessage1={setMessage1} setMessage2={setMessage2} setMessage3={setMessage3}></MessageInput>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1
    },
    sentMessagesBox: {
        marginTop: 24
    }
})