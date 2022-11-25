import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';
import Comment from './Comment';
import SendUnfilled from '../assets/icons/send_unfilled.svg'
import SendFilled from '../assets/icons/send_filled.svg'

export default function CommentSection() {
    const [text, onChangeText] = useState("");
    const [comment, setComment] = useState("");
    const [hasSent, setHasSent] = useState(false);

    const [loaded] = useFonts({
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }

    function postComment() {
        if (text) {
            onChangeText("");
            setHasSent(true)
            setComment(text)
        }
    }

    return (
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
                        {text != "" ? <SendFilled style={styles.sendIcon}></SendFilled> :
                            <SendUnfilled style={styles.sendIcon}></SendUnfilled>}
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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
})