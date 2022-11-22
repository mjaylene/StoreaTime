import { Text, View, StyleSheet, ImageBackground, Pressable, Image, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { Asset } from "expo-asset";
import Themes from '../assets/Themes/themes';
import DownArrow from '../assets/icons/down_arrow.svg'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import RecordScreen1 from './RecordScreen1';
import CommunityScreen1 from './CommunityScreen1';
import CommunityFinds from './CommunityFindsScreen';
import ExploreIconGray from '../assets/icons/explore_icon_gray.svg'
import ExploreIconOrange from '../assets/icons/explore_icon_orange.svg'
import RecordTabIcon from '../assets/icons/record_tab_icon.svg'
import CommunityIconGray from '../assets/icons/community_icon.svg';
import CommunityIconOrange from '../assets/icons/community_icon_orange.svg';
import RamenListenScreen from './RamenListenScreen';
import VerticalAnimation from '../components/animations/VerticalAnimation'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const STORIES = [
    {
        id: 1,
        card: require('../assets/explore_photocards/ramen_audio_card.png'),
        community: 'Asian Food Collective'
    },
    {
        id: 2,
        card: require('../assets/explore_photocards/churros_audio_card.png'), 
        community: 'Rivera Family'
    },
    {
        id: 3,
        card: require('../assets/explore_photocards/dimsum_audio_card.png'),
        community: "Asian Food Collective"
    }
]

async function loadStoryCardImages() {
    const x = await Promise.all([
        Asset.loadAsync([
            require('../assets/explore_photocards/ramen_audio_card.png'),
            require('../assets/explore_photocards/churros_audio_card.png'),
            require('../assets/explore_photocards/dimsum_audio_card.png'),
        ]),
    ]);
    return x
}

const renderStoryCard = ({ item, index }, navigation) => {
    let cardStyle;
    if (index == 0) {
        cardStyle = {
            alignItems: 'center',
            marginLeft: 53.325,
        }
    } else if (index == 1) {
        cardStyle = {
            alignItems: 'center',
            marginLeft: 18,
        } 
    } else {
        cardStyle = {
            alignItems: 'center',
            marginLeft: 18,
            marginRight: 53.325
        }
     }
    return (
    <View style={cardStyle}>
        <Pressable onPress={() => navigation.navigate('RamenListenScreen')}>
        <Image style={styles.cardImage} source={item.card}/>
        </Pressable>
        <View>
            <Text style={styles.communityName}>{item.community}</Text>
        </View>
    </View>
    )
}

function ListenStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TodaysListens" component={TodaysListensScreenContent} options={{ headerShown: false }} />
            <Stack.Screen name="RamenListenScreen" component={RamenListenScreen}
                options={VerticalAnimation} 
            />
            <Stack.Screen name="CommunityFinds" component={CommunityFinds}
                options={VerticalAnimation}
            />
            {/* ADD THE REST OF THE LISTEN SCREENS */}
        </Stack.Navigator>
    )
}

function TodaysListensScreenContent( { navigation }) {
    loadStoryCardImages();
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
                <Text style={styles.title}>Today's Listens</Text>
                <View style={styles.listContainer}>
                    <FlatList
                        horizontal
                        data={STORIES}
                        renderItem={(params) => renderStoryCard(params, navigation)}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={styles.viewMoreBox}>
                    <Pressable style={{alignItems: 'center'}} onPress={() => navigation.navigate("CommunityFinds")}>
                        <Text style={styles.viewMore}>VIEW MORE</Text>
                        <DownArrow style={{ opacity: 0.7, top: 108.33}}></DownArrow>
                    </Pressable>
                </View>
             </ImageBackground>
        </View>
    )
}

export default function TodaysListensScreen({ navigation, route }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle:
                {
                    display: "flex"
                },
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === "Explore") {
                        iconName = focused ? <ExploreIconOrange style={{ marginTop: 15 }} /> : <ExploreIconGray style={{ marginTop: 15 }} />
                    }
                    else if (route.name === "Record") {
                        iconName = focused ? <RecordTabIcon /> : <RecordTabIcon />
                    } else if (route.name === "Community") {
                        iconName = focused ? <CommunityIconOrange style={{ marginTop: 15 }} /> : <CommunityIconGray style={{ marginTop: 15 }} />
                    }
                    return iconName;
                }
            })}>
            <Tab.Screen name="Explore" component={ListenStack} options={{ headerShown: false }} />
            <Tab.Screen name="Record" component={RecordScreen1} options={{ headerShown: false }} />
            <Tab.Screen name="Community" component={CommunityScreen1} options={{ headerShown: false }} />

        </Tab.Navigator>
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
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontFamily: 'Romana-Bold',
        color: Themes.colors.white,
        top: 134,
    },
    cardImage: {
        width: 283.35,
        height: 360.09
    },
    communityName: {
        fontFamily: 'JakartaSansBold',
        fontSize: 22,
        color: Themes.colors.white,
        top: 34
    },
    viewMore: {
        fontFamily: 'JakartaSansBold',
        color: Themes.colors.white,
        opacity: 0.7,
        fontSize: 11,
        top: 94,
    },
    listContainer: {
        flex: 1,
        top: 177,
        //marginLeft: 59,
       //left: 19,
       // backgroundColor: 'green',
    },
    firstCardContainer: {
        alignItems: 'center',
        marginLeft: 59,
        //marginRight: 59
        //margin: 20,
    },
    viewMoreBox: {
        top: 80,
        flex: 0.5,
        alignItems: 'center'
    }
})