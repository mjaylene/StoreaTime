import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Pressable, Image, Dimensions, ScrollView, TextInput, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';
import ListenPlayer from '../components/listenPlayer';
import DownArrow from '../assets/icons/down_arrow.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Comment from '../components/Comment';
import SendUnfilled from '../assets/icons/send_unfilled.svg'
import SendFilled from '../assets/icons/send_filled.svg'
import Swiper from 'react-native-swiper'

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get('window').width;

export default function RamenListenScreen({ navigation }) {
    const [index, setIndex] = useState(1);
    const [text, onChangeText] = useState("");
    const [hasSent, setHasSent] = useState(false);
    const [comment, setComment] = useState("");

    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
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

    function postComment() {
        if (text) {
            onChangeText("");
            setHasSent(true)
            setComment(text)
        }
    }

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            
            <KeyboardAvoidingView style={{flex: 1}}behavior="position" enabled>
            <View style={styles.header} >
                    <Pressable onPress={() => navigation.goBack()}>
                        <DownArrow style={styles.downArrow}></DownArrow>
                    </Pressable>
                    <Text style={styles.headerText}>Listen</Text>
                </View>
                    <ScrollView centerContent={true}>
                    <View style={{width: 358, height: 406}}>
                        <Swiper
                            removeClippedSubviews={false}
                            loadMinimal={true}
                            style={styles.wrapper}
                            dot={
                                <View
                                  style={{
                                    backgroundColor: 'rgba(0,0,0,.2)',
                                    width: 12,
                                    height: 12,
                                    borderRadius: 12,
                                    marginLeft: 3,
                                    marginRight: 3,
                                    marginTop: 3,
                                    marginBottom: 16
                                  }}
                                />
                            }
                            activeDot={
                                <View
                                  style={{
                                    backgroundColor: '#FFF',
                                    width: 15,
                                    height: 15,
                                    borderRadius: 12,
                                    marginLeft: 3,
                                    marginRight: 3,
                                    marginTop: 3,
                                    marginBottom: 16
                                  }}
                                />
                              }
                        >
                            <View style={{alignItems: 'center'}}>
                                <Image source={images.image1} style={styles.imageStyle}></Image>
                            </View>
                            <View>
                                <Image source={images.image2} style={styles.imageStyle}></Image>
                            </View>
                            <View>
                                <Image source={images.image3} style={styles.imageStyle}></Image>
                            </View>
                            <View>
                                <Image source={images.image4} style={styles.imageStyle}></Image>
                            </View>
                        </Swiper>
                    </View>
                    <ListenPlayer textLine1={"How did you learn to make "} textLine2={"Kanagawa Ramen?"} endDuration={"1:40"}></ListenPlayer>
                    <View style={styles.commentSectionBox}>
                        <View style={styles.commentTitleBox}>
                            <Text style={styles.commentTitle}>Comments</Text>
                        </View>
                        <View>
                        <Comment profileImage={require('../assets/icons/jianna.png')}
                            commentUser={"Jianna"}
                            commentText={"OMG! Same thing happened to me!"}>
                        </Comment>
                        <Comment profileImage={require('../assets/icons/kaitlyn.png')}
                            commentUser={"Kaitlyn"}
                            commentText={"WTF!! Crazy..."}>
                        </Comment>
                        <Comment profileImage={require('../assets/icons/james.png')}
                            commentUser={"James Landay"}
                            commentText={"Can't wait to try it myself :))"}>
                        </Comment>
                        {hasSent ?
                            <Comment profileImage={require('../assets/icons/my_pfp.png')}
                                commentUser={"Jordan Nakamura"}
                                commentText={comment}>
                            </Comment>
                            :
                            <View></View>
                        }
                        </View>
                         <View style={styles.addCommentBox}>
                            <Image style={styles.pfp} source={require('../assets/icons/my_pfp.png')}></Image>
                            <View style={styles.inputBox}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder='Add a comment...'
                                    placeholderTextColor={'#D4D4D4'}
                                />
                                <Pressable onPress={postComment}>
                                    {text !="" ? <SendFilled style={styles.sendIcon}></SendFilled> :
                                        <SendUnfilled style={styles.sendIcon}></SendUnfilled>}
                                </Pressable>
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 61,
        //backgroundColor: 'green',
        
    },
    headerText: {
        fontFamily: "JakartaSansBold",
        color: Themes.colors.white,
        fontSize: 17,
        right: 6
    },
    downArrow: {
        right: 133
    },
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 61,
    },
    headerStyle: {
        alignItems: 'center'
    },
    arrowStyle: {
        // bottom: 40,
        left: 24,
        flex: 1
    },
    textStyle: {
        color: Themes.colors.white,
        fontFamily: 'JakartaSansBold',
        fontWeight: 'bold',
        fontSize: 17,
        //bottom: 40,
        marginRight: windowWidth / 2 - 36
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        marginTop: 32,
        width: 358,
        height: 353,
        borderRadius: 24,
        marginBottom: 24,
    },
    commentSectionBox: {
        backgroundColor: Themes.colors.white,
        width: 358,
        height: 370,  // tentative to change
        borderRadius: 12,
        marginTop: 26,
    },
    commentTitleBox: {
        alignItems: 'center',
        marginBottom: 12
    },
    commentTitle: {
        fontSize: 16,
        fontFamily: 'JakartaSansBold',
        marginTop: 18,
        fontWeight: 'bold',
    },
    addCommentBox: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 320
    },
    inputBox: {
        flexDirection: 'row',
        width: 295,
        height: 32,
        borderRadius: 12,
        borderColor: "#D4D4D4",
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pfp: {
        width: 35.7,
        height: 35.7,
        marginLeft: 12,
        marginRight: 6
    },
    input: {
        fontFamily: 'JakartaSans',
        fontSize: 14,
        color: "#1E1E1E",
        marginLeft: 12,
    },
    sendIcon: {
        marginRight: 9
    },
    wrapper: {}
})