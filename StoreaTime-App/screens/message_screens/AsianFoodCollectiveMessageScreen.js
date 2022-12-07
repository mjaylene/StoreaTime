import { Text, View, StyleSheet, ImageBackground, Pressable, Image, KeyboardAvoidingView } from 'react-native';
import { useEffect, useState } from 'react';
import AccessCommunityHeader from '../../components/AccessCommunityHeader';
import loadBackgroundImageAsync from '../../components/LoadBackgroundImageAsync';
import Message from '../../components/Message';
import MessageInput from '../../components/MessageInput';
import SentMessage from '../../components/SentMessage';


export default function AsianFoodCollectiveMessages({ navigation }) {
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
                <AccessCommunityHeader image={require('../../assets/community/asian_food_collective_header.png')} communityName={"Asian Food Collective"} navigation={navigation}></AccessCommunityHeader>
                <View style={styles.sentMessagesBox}>
                    <Message name={"Melissa L"} text1={"Anyone want to have"} text2={"a story off on Sunday?"} pfp={require('../../assets/profile/MelissaRivera.png')}></Message>
                    <Message name={"James Landay"} text1={"Oooooooooo you're on  "} text2={"Melissa!"} pfp={require('../../assets/profile/DadRivera.png')}></Message>
                    <Message name={"Ric"} text1={"Down! Y'all are not ready"} text2={"for what I'm making"} pfp={require('../../assets/profile/AlvaroRiveraReal.png')}></Message>
                    <Message name={"Melissa L"} text1={":OO can we have"} text2={"a hint on what it is Ric?"} pfp={require('../../assets/profile/MelissaRivera.png')}></Message>
                    <Message name={"Ric"} text1={"Let's just say that it's"} text2={"veryyyy delicious"} pfp={require('../../assets/profile/AlvaroRiveraReal.png')}></Message>
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