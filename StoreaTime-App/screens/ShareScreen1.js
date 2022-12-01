import { Text, View, StyleSheet, Button, ImageBackground, SafeAreaView, Pressable, Image, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import { useFonts } from 'expo-font';
import BackArrow from '../assets/icons/back_arrow.svg';
import CommunityBox from '../components/CommunityBox.js';
import DimmedSend from '../assets/icons/dimmed_send.svg';
import Send from '../assets/icons/send.svg';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import SelectAll from '../assets/icons/select_all.svg';


export default function RecordScreen({ navigation, route }) {
    loadBackgroundImageAsync();
    const dishName = route.params.paramDish;

    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    const [click, checkCircle] = React.useState(false);
    const [click1, checkCircle1] = React.useState(false);
    const [click2, checkCircle2] = React.useState(false);
    const [click3, checkCircle3] = React.useState(false);


    // These lines of code
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

    function checkAll(click1, click2, click3) {
        checkCircle1(!click1);
        checkCircle2(!click2);
        checkCircle3(!click3);
    }

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header}>
                <Text style={styles.screenTitle}>Share</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.publicCom}>
                    <View style={styles.comHeader}>
                        <Text style={styles.title}>My Public Communities</Text>
                        <SelectAll style={styles.selectAllButton}></SelectAll>

                    </View>
                    <Pressable onPress={() => checkCircle(!click)}>
                        <View>
                            <CommunityBox
                                style={styles.box}
                                name={'Asian Food Collective'}
                                memberCount={'581'}
                                privacy={'Public'}
                                clicked={click}
                                picture={'1'}
                            />
                        </View>
                    </Pressable>
                </View>

                <Pressable onPress={() => checkCircle(!click)}>
                    <View style={styles.select1}></View>
                </Pressable>

                <View style={styles.privateCom}>
                    <View style={styles.comHeader}>
                        <Text style={styles.title}>My Private Communities</Text>
                        <SelectAll style={styles.selectAllButton}></SelectAll>

                    </View>
                    <CommunityBox
                        style={styles.box}
                        name={'Rivera Family'}
                        memberCount={'5'}
                        privacy={'Private'}
                        clicked={click1}
                        picture={'2'}
                    />
                    <CommunityBox
                        style={styles.box}
                        name={'Yummy Deserts'}
                        memberCount={'12'}
                        privacy={'Private'}
                        clicked={click2}
                        picture={'3'}
                    />
                    <CommunityBox
                        style={styles.box}
                        name={'Birthday Bashes'}
                        memberCount={'10'}
                        privacy={'Private'}
                        clicked={click3}
                        picture={'4'}
                    />

                    <View>

                    </View>
                </View>


                <View style={styles.commBox}>

                </View>
                <Pressable onPress={() => checkCircle(!click)}>
                    <View style={styles.commOne}></View>
                </Pressable>

                <Pressable onPress={() => checkCircle1(!click1)}>
                    <View style={styles.commTwo}></View>
                </Pressable>

                <Pressable onPress={() => checkCircle2(!click2)}>
                    <View style={styles.commThree}></View>
                </Pressable>

                <Pressable onPress={() => checkCircle3(!click3)}>
                    <View style={styles.commFour}></View>
                </Pressable>
            </View>

            <Pressable onPress={() => checkAll(click1, click2, click3)}>
                <View style={styles.select2}></View>
            </Pressable>

            {click || click1 || click2 || click3 ?
                <Pressable onPress={() => navigation.navigate("ShareScreen2")} style={styles.share}>
                    <Send></Send>
                </Pressable> : <DimmedSend style={styles.share}></DimmedSend>}
            <Pressable onPress={() => navigation.goBack()}>
                <BackArrow style={styles.backButton}></BackArrow>
            </Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    backButton: {
        width: 32,
        height: 32,
        bottom: 455,
        right: 150,
        //backgroundColor: 'cyan'
    },
    screenTitle: {
        //backgroundColor: 'cyan',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'center',
        top: 55,
        //backgroundColor: 'cyan',
        position: 'absolute'
    },
    title: {
        top: 130,
        right: 35,
        textAlign: 'left',
        fontSize: 17,
        color: 'white',
        fontFamily: 'JakartaSansBold'
    },
    selectAllButton: {
        top: 131,
        left: 32
    },
    body: {
        //backgroundColor: 'blue',
        width: 340,
        height: 203,
        bottom: 330,
        alignItems: 'center',
    },
    share: {
        bottom: 60,
        position: 'absolute'
    },
    commOne: {
        //backgroundColor: 'green',
        width: 355,
        height: 84,
        bottom: 290,
        borderRadius: 12,
        right: 0
    },
    commTwo: {
        //backgroundColor: 'red',
        width: 355,
        height: 84,
        bottom: 230,
        borderRadius: 12,
        right: 0
    },
    commThree: {
        //backgroundColor: 'yellow',
        width: 355,
        height: 84,
        bottom: 220,
        borderRadius: 12,
        right: 0
    },
    commFour: {
        //backgroundColor: 'blue',
        width: 355,
        height: 84,
        bottom: 210,
        borderRadius: 12,
        right: 0
    },
    box: {
        position: 'absolute'
    },
    commBox: {
        bottom: 79
    },
    send: {
        borderRadius: '50%',
        //backgroundColor: 'cyan',
        //position: 'absolute',
        width: 77,
        height: 77,
        top: 221
    },
    comHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    select1: {
        //backgroundColor: 'red',
        width: 84,
        height: 24,
        top: 13,
        left: 132,
        borderRadius: 8
    },
    select2: {
        //backgroundColor: 'green',
        width: 84,
        height: 24,
        bottom: 240,
        borderRadius: 8,
        left: 135
    },
    publicCom: {
        marginTop: 20
    }
});