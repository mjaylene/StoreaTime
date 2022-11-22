import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { useFonts } from 'expo-font';
import React from "react";
import Public from '../assets/icons/public.svg';
import Private from '../assets/icons/private.svg';
import Person from '../assets/icons/person_icon.svg';
import Unchecked from '../assets/icons/unchecked.svg';
import Checked from '../assets/icons/checked.svg';


export default function community({name, memberCount, privacy, clicked, picture}) {
    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });
    return (
        <View style={styles.communityContainer}>
            {picture === '1' ? <Image style={styles.profile} source={require('../assets/community/community1.png')} resizeMode="contain"></Image> :
            <Image style={styles.profile} source={require('../assets/community/community2.png')} resizeMode="contain"></Image>}
            
            <View style={styles.communityText}>
                <Text style={styles.communityName}>{name}</Text>
                <View style={styles.info}>
                    <Person></Person>
                    <Text style={styles.count}>{memberCount}</Text>

                    {privacy === 'Public' ? <Public></Public> : <Private style={styles.priv}></Private>}
                    <Text style={styles.count}>{privacy}</Text>
                </View>
            </View>
            {!clicked ? <Unchecked style={styles.circle}></Unchecked> : <Checked style={styles.circle}></Checked>}
        </View>
  );
}


const styles = StyleSheet.create({
    communityContainer: {
        width: 355,
        height: 84,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        top: 130,
        margin: 5,
        //left: 190
    },
    profile: {
        width: 64,
        height: 64,
        right: 275,
        position: 'absolute'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        //position: 'absolute'
        //justifyContent: 'space-between'
    },
    communityName: {
        fontFamily: 'JakartaSansBold',
        color: 'white',
        fontSize: 17,
        marginBottom: 7,
    },
    count: {
        fontFamily: 'JakartaSans',
        fontSize: 13,
        color: 'white',
        marginLeft: 5,
        marginRight: 15
    },
    circle: {
        right: 15,
        position: 'absolute'
    },
    communityText: {
        left: 30,
        //backgroundColor: 'blue',
        width: '60%'
    },
    priv: {
        marginLeft: 13
    }
});