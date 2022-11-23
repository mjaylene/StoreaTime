import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import HeartOutline from '../assets/icons/heart_outline.svg'
import HeartFilled from '../assets/icons/heart_filled.svg'

export default function Comment({ profileImage, commentUser, commentText }) {
    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    const [liked, setLiked] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.profilePic} source={profileImage}></Image>
                <View style={styles.body}>
                    <Text style={styles.name}>{commentUser}</Text>
                    <Text style={styles.commentText}>{commentText}</Text>
                </View>
            </View>
            <Pressable onPress={() => setLiked(!liked)}>
                {liked ? <HeartFilled style={styles.heartIcon} /> : <HeartOutline style={styles.heartIcon} />}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 0,
        marginBottom: 34
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePic: {
        width: 32,
        height: 32,
        marginLeft: 32
    },
    name: {
        fontFamily: 'JakartaSansBold',
        color: "#1E1E1E",
        fontSize: 12
    },
    commentText: {
        fontFamily: 'JakartaSans',
        color: "#1E1E1E",
        fontSize: 12
    },
    body: {
        marginLeft: 12
    },
    heartIcon: {
        marginRight: 37,
        marginTop: 5
    }
})