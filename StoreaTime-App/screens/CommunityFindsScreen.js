import { Text, View, StyleSheet, ImageBackground, Pressable, Image, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { Asset } from "expo-asset";
import Themes from '../assets/Themes/themes';
import UpArrow from '../assets/icons/up_arrow.svg'
import RightArrow from '../assets/icons/right_arrow_community_finds.svg'
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';

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
        id: 1,
        card: require('../assets/explore_photocards/community_finds_card4.png'),
    },
    {
        id: 2,
        card: require('../assets/explore_photocards/community_finds_card5.png'),
    },
    {
        id: 3,
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
            <Pressable onPress={() => navigation.navigate('RamenListenScreen')}>
                <Image style={styles.cardImage} source={item.card} />
            </Pressable>
        </View>
    )
}


export default function CommunityFinds({ navigation }) {
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

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.viewTodaysBox}>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigation.navigate("TodaysListens")}>
                        <UpArrow></UpArrow>
                        <Text style={styles.viewMore}>VIEW TODAY'S LISTENS</Text>
                    </Pressable>
                </View>
                <Text style={styles.title}>Community Finds</Text>
                <View style={styles.communitySectionBox}>
                    <Text style={styles.communityName1}>Asian Food Collective</Text>
                    <RightArrow style={{ left: 24, bottom: 372 }}></RightArrow>
                </View>
                <View style={styles.listContainer1}>
                    <FlatList
                        horizontal
                        data={STORIES1}
                        renderItem={(params) => renderStoryCard(params, navigation)}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', top: 300 }}>
                    <Text style={styles.communityName2}>Rivera Family</Text>
                    <RightArrow style={{ left: 24, bottom: 328 }}></RightArrow>
                </View>
                <View style={styles.listContainer2}>
                    <FlatList
                        horizontal
                        data={STORIES2}
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
    title: {
        flex: 1,
        fontFamily: 'Romana-Bold',
        color: Themes.colors.white,
        fontSize: 32,
        left: 16,
        top: 50
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
        bottom: 374,

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