import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import BackArrow from '../assets/icons/back_arrow2.svg'
import Themes from '../assets/Themes/themes';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import UploadPhoto from '../assets/icons/upload_photo.svg'
import DimmedNextArrow from '../assets/icons/dimmed_next_arrow.svg';
import NextArrow from '../assets/icons/next_arrow.svg';
import * as ImagePicker from 'expo-image-picker';
import { NavigationHelpersContext } from '@react-navigation/native';
import AutocompleteTags from 'react-native-autocomplete-tags';
import MultipleSelection from '../Multiselect1'
import { m } from 'framer-motion';
import CheckMark from '../assets/icons/checkmark';

const DimmedNext = () => {
    return (
        <Pressable>
            <DimmedNextArrow style={styles.nextButton}></DimmedNextArrow>
        </Pressable>
    );
}

export default function AddMembersScreen({ navigation, route }) {
    const suggestions = ['Angel', 'Daryl', 'Lisette', 'Jaylene'];
    const [tags, setTags] = useState([]);
    const labelExtractor = (tag) => tag;

    const [memberCount, setCount] = useState(0);
    const [memberCount2, setCount2] = useState(0);
    const [memberCount3, setCount3] = useState(0);
    const [memberCount4, setCount4] = useState(0);
    const [memberCount5, setCount5] = useState(0);
    const [memberCount6, setCount6] = useState(0);
    const [memberCount7, setCount7] = useState(0);
    const [memberCount8, setCount8] = useState(0);


    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [text, onChangeText] = useState(" ");
    let allMemberCounts = false;
    const [totalCount, changeTotal] = useState(0);

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
    function handleProfileClick(member) {
        if (member === 1) {
            setCount(memberCount + 1);
            changeTotal(totalCount + 1);
        }
        else if (member === 2) {
            setCount2(memberCount2 + 1);
            changeTotal(totalCount + 1);
        }
        else if (member === 3) {
            setCount3(memberCount3 + 1);
            changeTotal(totalCount + 1);
        }
        else if (member === 4) {
            setCount4(memberCount4 + 1);
            changeTotal(totalCount + 1);
        }
        else if (member === 5) {
            setCount5(memberCount5 + 1);
            changeTotal(totalCount + 1);
        }
        else if (member === 6) {
            setCount6(memberCount6 + 1);
            changeTotal(totalCount + 1);
        }
        else if (member === 7) {
            setCount7(memberCount7 + 1);
            changeTotal(totalCount + 1);
        }
        else if (member === 8) {
            setCount8(memberCount8 + 1);
            changeTotal(totalCount + 1);
        }
    }
    if (memberCount > 0 || memberCount2 > 0 || memberCount3 > 0 || memberCount4 > 0 ||
        memberCount5 > 0 || memberCount6 > 0 || memberCount7 > 0 || memberCount8 > 0) {
        allMemberCounts = true;
    }
    let newCommunityName = route.params.commName;

    console.log(newCommunityName)
    let imageUri = route.params.imagePath;

    console.log(imageUri)

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.header} >
                <Pressable onPress={() => navigation.goBack()}>
                    <BackArrow style={styles.backArrow}></BackArrow>
                </Pressable>
                <Text style={styles.headerText}>Add Members</Text>
            </View>

            <View style={styles.body}>

                <View style={styles.members}>
                    <Text style={styles.boxTitle2}>Members</Text>
                    <View style={styles.scrollView}>
                        {!allMemberCounts ?
                            <Text style={styles.text}>
                                e.g. “Ho Sae Young”
                            </Text>
                            :
                            <ScrollView horizontal={true} style={styles.scrollView}>
                                {memberCount === 0 ? <View></View> : <Image style={styles.lisetteTag} source={require('../assets/profile/jayleneTag.png')}></Image>
                                }
                                {memberCount2 === 0 ? <View></View> : <Image style={styles.lisetteTag} source={require('../assets/profile/lisetteTag.png')}></Image>
                                }
                                {memberCount3 === 0 ? <View></View> : <Image style={styles.lisetteTag} source={require('../assets/profile/darylTag.png')}></Image>
                                }
                                {memberCount4 === 0 ? <View></View> : <Image style={styles.lisetteTag} source={require('../assets/profile/angelTag.png')}></Image>
                                }
                                {memberCount5 === 0 ? <View></View> : <Image style={styles.lisetteTag} source={require('../assets/profile/jiannaTag.png')}></Image>
                                }
                                {memberCount6 === 0 ? <View></View> : <Image style={styles.lisetteTag} source={require('../assets/profile/kaitlynTag.png')}></Image>
                                }
                                {memberCount7 === 0 ? <View></View> : <Image style={styles.lisetteTag} source={require('../assets/profile/jamesTag.png')}></Image>
                                }
                                {memberCount8 === 0 ? <View></View> : <Image style={styles.lisetteTag} source={require('../assets/profile/gatitoTag.png')}></Image>
                                }
                            </ScrollView>
                        }

                    </View>
                </View>

                <View style={styles.recent}>
                    <Text style={styles.boxTitle}>Recent</Text>
                    <View style={styles.profileBox}>
                        {memberCount === 0 ?
                            <Pressable onPress={() => handleProfileClick(1)}>
                                <Image style={styles.profile} source={require('../assets/profile/jayleneProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile} source={require('../assets/profile/jayleneProfile.png')}></Image>
                                <CheckMark style={styles.jayleneCheck}></CheckMark>
                            </View>}
                        {memberCount2 === 0 ?
                            <Pressable onPress={() => handleProfileClick(2)}>
                                <Image style={styles.profile} source={require('../assets/profile/lisetteProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile} source={require('../assets/profile/lisetteProfile.png')}></Image>
                                <CheckMark style={styles.lisetteCheck}></CheckMark>
                            </View>
                        }
                        {memberCount3 === 0 ?
                            <Pressable onPress={() => handleProfileClick(3)}>
                                <Image style={styles.profile} source={require('../assets/profile/darylProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile} source={require('../assets/profile/darylProfile.png')}></Image>
                                <CheckMark style={styles.darylCheck}></CheckMark>
                            </View>
                        }
                        {memberCount4 === 0 ?
                            <Pressable onPress={() => handleProfileClick(4)}>
                                <Image style={styles.profile2} source={require('../assets/profile/AngelProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile2} source={require('../assets/profile/AngelProfile.png')}></Image>
                                <CheckMark style={styles.angelCheck}></CheckMark>
                            </View>
                        }
                    </View>
                </View>


                <View style={styles.friends}>
                    <View style={styles.friendsText}>
                        <Text style={styles.boxTitle}>Community Members </Text>
                        <Text style={{ fontFamily: 'JakartaSans', fontSize: 13, color: 'white', marginTop: 2 }}> 8</Text>
                    </View>
                    <View style={styles.profileBox}>
                        {memberCount === 0 ?
                            <Pressable onPress={() => handleProfileClick(1)}>
                                <Image style={styles.profile} source={require('../assets/profile/jayleneProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile} source={require('../assets/profile/jayleneProfile.png')}></Image>
                                <CheckMark style={styles.jayleneCheck}></CheckMark>
                            </View>}
                        {memberCount2 === 0 ?
                            <Pressable onPress={() => handleProfileClick(2)}>
                                <Image style={styles.profile} source={require('../assets/profile/lisetteProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile} source={require('../assets/profile/lisetteProfile.png')}></Image>
                                <CheckMark style={styles.lisetteCheck}></CheckMark>
                            </View>
                        }
                        {memberCount3 === 0 ?
                            <Pressable onPress={() => handleProfileClick(3)}>
                                <Image style={styles.profile} source={require('../assets/profile/darylProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile} source={require('../assets/profile/darylProfile.png')}></Image>
                                <CheckMark style={styles.darylCheck}></CheckMark>
                            </View>
                        }
                        {memberCount4 === 0 ?
                            <Pressable onPress={() => handleProfileClick(4)}>
                                <Image style={styles.profile2} source={require('../assets/profile/AngelProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile2} source={require('../assets/profile/AngelProfile.png')}></Image>
                                <CheckMark style={styles.angelCheck}></CheckMark>
                            </View>
                        }
                    </View>
                    <View style={styles.profileBox2}>
                        {memberCount5 === 0 ?
                            <Pressable onPress={() => handleProfileClick(5)}>
                                <Image style={styles.profile} source={require('../assets/profile/jiannaProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile} source={require('../assets/profile/jiannaProfile.png')}></Image>
                                <CheckMark style={styles.jiannaCheck}></CheckMark>
                            </View>
                        }
                        {memberCount6 === 0 ?
                            <Pressable onPress={() => handleProfileClick(6)}>
                                <Image style={styles.profile} source={require('../assets/profile/kaitlynProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile} source={require('../assets/profile/kaitlynProfile.png')}></Image>
                                <CheckMark style={styles.kaitlynCheck}></CheckMark>
                            </View>
                        }
                        {memberCount7 === 0 ?
                            <Pressable onPress={() => handleProfileClick(7)}>
                                <Image style={styles.profile} source={require('../assets/profile/jamesProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile} source={require('../assets/profile/jamesProfile.png')}></Image>
                                <CheckMark style={styles.jamesCheck}></CheckMark>
                            </View>
                        }
                        {memberCount8 === 0 ?
                            <Pressable onPress={() => handleProfileClick(8)}>
                                <Image style={styles.profile} source={require('../assets/profile/gatitoProfile.png')}></Image>
                            </Pressable>
                            :
                            <View>
                                <Image style={styles.profile} source={require('../assets/profile/gatitoProfile.png')}></Image>
                                <CheckMark style={styles.gatitoCheck}></CheckMark>
                            </View>
                        }
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                {(totalCount > 0) ?
                    <Pressable onPress={() => navigation.navigate("CommunitySettingsScreen", { commName: newCommunityName }, {imageUri: imageUri})}>
                        <NextArrow style={styles.nextButton}></NextArrow>
                    </Pressable> : <DimmedNext></DimmedNext>}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        top: 64,
    },
    headerText: {
        fontFamily: "JakartaSansBold",
        color: Themes.colors.white,
        fontSize: 17,
        left: 91.45
    },
    backArrow: {
        marginLeft: 26.67,
    },
    uploadPhotoBox: {
        alignItems: 'center',
    },
    nameSection: {
        top: 175,
        marginLeft: 16
    },
    communityName: {
        fontFamily: 'JakartaSansBold',
        fontSize: 22,
        color: Themes.colors.white
    },
    inputBox: {
        flexDirection: 'row',
        width: 358,
        height: 48,
        borderRadius: 24,
        backgroundColor: Themes.colors.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    input: {
        fontFamily: 'JakartaSans',
        fontSize: 15,
        color: "#000000",
        marginLeft: 16,
    },
    nextButton: {
        //position: 'absolute',
        //top: 190,
        //left: 310
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        right: 20

    },
    selectedImage: {
        width: 110,
        height: 110,
        borderRadius: '100%',
        top: 144

    },
    members: {
        //backgroundColor: 'blue',
        flex: 1,
        margin: 16,
        marginBottom: 5,
    },
    recent: {
        //backgroundColor: 'red',
        flex: 1,
        margin: 16,
        marginBottom: 25,
        marginTop: 0,

    },
    friends: {
        //backgroundColor: 'green',
        flex: 1,
        margin: 16,
    },
    body: {
        flex: 0.5,
        top: 110,
    },
    boxTitle: {
        fontFamily: "JakartaSansBold",
        fontSize: 17,
        color: 'white'
    },
    boxTitle2: {
        fontFamily: "JakartaSansBold",
        fontSize: 17,
        color: 'white',
        marginBottom: 10
    },
    friendsText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile: {
        width: 65,
        height: 86,
    },
    profile2: {
        width: 64,
        height: 86,
    },
    profileBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        right: 20,
        marginTop: 10
    },
    profileBox2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        right: 20,
        marginTop: 10
    },
    scrollView: {
        backgroundColor: '#FFFFFF',
        width: 358,
        height: 48,
        borderRadius: 24,
    },
    text: {
        fontSize: 15,
        margin: 10,
        color: '#CCCCCC'
    },
    jayleneCheck: {
        width: 90,
        height: 90,
        position: 'absolute',
        left: 40,
        bottom: 62.5
    },
    darylCheck: {
        width: 90,
        height: 90,
        position: 'absolute',
        left: 41,
        bottom: 61
    },
    lisetteCheck: {
        width: 90,
        height: 90,
        position: 'absolute',
        left: 41,
        bottom: 61
    },
    angelCheck: {
        width: 90,
        height: 90,
        position: 'absolute',
        left: 40,
        bottom: 62.5
    },
    jiannaCheck: {
        width: 90,
        height: 90,
        position: 'absolute',
        left: 40,
        bottom: 62.5
    },
    kaitlynCheck: {
        width: 90,
        height: 90,
        position: 'absolute',
        left: 40,
        bottom: 62.5
    },
    jamesCheck: {
        width: 90,
        height: 90,
        position: 'absolute',
        left: 41,
        bottom: 61
    },
    gatitoCheck: {
        width: 90,
        height: 90,
        position: 'absolute',
        left: 40,
        bottom: 62.5
    },
    jayleneTag: {
        width: 122,
        height: 32,
        margin: 7
    },
    lisetteTag: {
        width: 122,
        height: 32,
        margin: 7,
    }
})