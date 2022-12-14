import { Text, View, StyleSheet, ImageBackground, Pressable, Image, FlatList } from 'react-native';
import { useState } from 'react' 
import { useFonts } from 'expo-font';
import { Asset } from "expo-asset";
import Themes from '../assets/Themes/themes';
import UpArrow from '../assets/icons/up_arrow.svg'
import RightArrow from '../assets/icons/right_arrow_community_finds.svg'
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import Filter from '../assets/icons/filter.svg'
import FilterModal from '../components/FilterModal';

const TEXT_STORIES1 = [
    {
        id: 2,
        card: require('../assets/explore_photocards/community_finds_card2.png'),
    },
]

const TEXT_STORIES2 = [
    {
        id: 6,
        card: require('../assets/explore_photocards/community_finds_card6.png'),
    },
]

const AUDIO_STORIES1 = [
    {
        id: 1,
        card: require('../assets/explore_photocards/community_finds_card1.png'),

    },
    {
        id: 3,
        card: require('../assets/explore_photocards/community_finds_card3.png'),
    }
]

const AUDIO_STORIES2 = [
    {
        id: 4,
        card: require('../assets/explore_photocards/community_finds_card4.png'),
    },
    {
        id: 5,
        card: require('../assets/explore_photocards/community_finds_card5.png'),
    },
]

const STORIES1 = [
    {
        id: 1,
        card: require('../assets/explore_photocards/community_finds_card1.png'),
    },
    {
        id: 2,
        card: require('../assets/explore_photocards/community_finds_card2.png'),
    },
    {
        id: 3,
        card: require('../assets/explore_photocards/community_finds_card3.png'),
    }
]

const STORIES2 = [
    {
        id: 4,
        card: require('../assets/explore_photocards/community_finds_card4.png'),
    },
    {
        id: 5,
        card: require('../assets/explore_photocards/community_finds_card5.png'),
    },
    {
        id: 6,
        card: require('../assets/explore_photocards/community_finds_card6.png'),
    }
]

async function loadStoryCardImages() {
    await Promise.all([
        Asset.loadAsync([
            require('../assets/explore_photocards/community_finds_card1.png'),
            require('../assets/explore_photocards/community_finds_card2.png'),
            require('../assets/explore_photocards/community_finds_card3.png'),
            require('../assets/explore_photocards/community_finds_card4.png'),
            require('../assets/explore_photocards/community_finds_card5.png'),
            require('../assets/explore_photocards/community_finds_card6.png'),
        ]),
    ]);
}

const renderStoryCard = ({ item, index }, navigation) => {
    let cardStyle;
    if (index == 0) {
        cardStyle = {
            alignItems: 'center',
            marginLeft: 16
        }
    } else if (index == 1) {
        cardStyle = {
            alignItems: 'center',
            marginLeft: 16
        }
    } else {
        cardStyle = {
            alignItems: 'center',
            marginLeft: 16,
            marginRight: 16
        }
    }
    return (
        <View style={cardStyle}>
            <Pressable onPress={() => item.id === 4 ? navigation.navigate('ChurroListenScreen') 
            : item.id === 3 ? navigation.navigate('PadThaiListenScreen')
            : item.id === 2 ? navigation.navigate('DimsumTextScreen')
            : item.id === 6 ? navigation.navigate('ElotesReadScreen')
            : item.id === 5 ? navigation.navigate('EnchiladasListenScreen')
            : navigation.navigate('RamenListenScreen')}>
                <Image style={styles.cardImage} source={item.card} />
            </Pressable>
        </View>
    )
}


export default function CommunityFinds({ navigation }) {
    const [all, setAll] = useState(false);
    const [audio, setAudio] = useState(false)
    const [text, setText] = useState(true)
    const [topLevelStories, setTopLevelStories] = useState(STORIES1)
    const [bottomLevelStories, setBottomLevelStories] = useState(STORIES2)

    loadBackgroundImageAsync();
    //loadStoryCardImages();
    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }

    const handleAll = () => {
        setAll(true)
        setAudio(false)
        setText(false)
    }

    const handleAudio = () => {
        setAudio(true)
        setAll(false)
        setText(false)
    }

    const handleText = () => {
        setText(true)
        setAll(false)
        setAudio(false)
    }

    function cardsToDisplay() {
        if (all) {
            setTopLevelStories(STORIES1)
            setBottomLevelStories(STORIES2)
        } else if (text) {
            setTopLevelStories(TEXT_STORIES1)
            setBottomLevelStories(TEXT_STORIES2)
        } else {
            setTopLevelStories(AUDIO_STORIES1)
            setBottomLevelStories(AUDIO_STORIES2)
        }
    }
    

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.viewTodaysBox}>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigation.navigate("TodaysListens")}>
                        <UpArrow></UpArrow>
                        <Text style={styles.viewMore}>VIEW TODAY'S LISTENS</Text>
                    </Pressable>
                </View>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>Community Finds</Text>
                    <FilterModal handleAll={handleAll} handleAudio={handleAudio} handleText={handleText} cardsToDisplay={cardsToDisplay}></FilterModal>
                </View>
                <View style={styles.communitySectionBox}>
                    <Pressable style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate("AsianFoodCollectiveScreen")}>
                        <Text style={styles.communityName1}>Asian Food Collective</Text>
                        <RightArrow style={{ left: 24, bottom: 364 }}></RightArrow>
                    </Pressable>
                </View>
                <View style={styles.listContainer1}>
                    <FlatList
                        horizontal
                        data={topLevelStories}
                        renderItem={(params) => renderStoryCard(params, navigation)}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', top: 300 }}>
                    <Pressable style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate("RiveraFamilyScreen")}>
                        <Text style={styles.communityName2}>Rivera Family</Text>
                        <RightArrow style={{ left: 24, bottom: 328 }}></RightArrow>
                    </Pressable>
                </View>
                <View style={styles.listContainer2}>
                    <FlatList
                        horizontal
                        data={bottomLevelStories}
                        renderItem={(params) => renderStoryCard(params, navigation)}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 16,
        top: 50, 
        marginBottom: 48
    },
    title: {
        flex: 1,
        fontFamily: 'Romana-Bold',
        color: Themes.colors.white,
        fontSize: 32,
        //left: 16,
        //top: 50
    },
    viewTodaysBox: {
        //flex: 1,
        alignItems: 'center',
        top: 39.67
    },
    viewMore: {
        fontFamily: 'JakartaSansBold',
        color: Themes.colors.white,
        opacity: 0.7,
        fontSize: 11,
        marginTop: 11.45
    },
    communitySectionBox: {
        flex: 1,
        top: 350,
        flexDirection: 'row',
        alignItems: 'center'
    },
    communityName1: {
        //flex: 1,
        fontFamily: 'JakartaSansBold',
        fontSize: 24,
        color: Themes.colors.white,
        left: 16,
        bottom: 366,

    },
    communityName2: {
        fontFamily: 'JakartaSansBold',
        fontSize: 24,
        color: Themes.colors.white,
        left: 16,
        bottom: 330,
    },
    listContainer1: {
        bottom: 46,
        //backgroundColor: 'green'
    },
    cardImage: {
        width: 192,
        height: 244
    },
    listContainer2: {
        bottom: 16
    }
})