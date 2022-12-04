import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import CommunityBoxArrow from '../components/CommunityBoxArrow'
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';
import DiscoverIcon from '../assets/icons/discover_icon.svg'
import PlusIcon from '../assets/icons/plus.svg'
import InfoIcon from '../assets/icons/info.svg'
import CreateNewCommunity1 from './CreateNewCommunity1';
import { createStackNavigator } from '@react-navigation/stack';
import AddMembersScreen from './AddMembersScreen.js';
import CommunitySettingsScreen from './CommunitySettingsScreen';
import RiveraFamilyScreen from './RiveraFamilyScreen';
import RiveraFamilyMessages from './message_screens/RiveraFamilyMessageScreen';
import ChurroListenScreen from '../screens/listen_screens/ChurroListenScreen'
import ElotesReadScreen from '../screens/ElotesReadScreen';
import EnchiladasListenScreen from './EnchiladasListenScreen';
import RamenListenScreen from '../screens/RamenListenScreen';
import PadThaiListenScreen from './listen_screens/PadThaiListenScreen';
import DimsumTextScreen from '../screens/DimsumTextScreen';
import VerticalAnimation from '../components/animations/VerticalAnimation';
import CommunitiesInfoModal from './CommunitiesInfo';
import AsianFoodCollectiveScreen from './AsianFoodCollective';
import AsianFoodCollectiveMessages from './message_screens/AsianFoodCollectiveMessageScreen';
import CommunityPublished from './CommunityPublished'
import CommunityBox from '../components/CommunityBox.js';


export default function AddedCommunityScreen({ navigation }) {
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
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.headerText}>Communities</Text>
                <CommunitiesInfoModal></CommunitiesInfoModal>
            </View>
            <Text style={styles.myCommunities}>My Communities</Text>
            <Pressable onPress={() => navigation.navigate("AsianFoodCollectiveScreen")}>
                <CommunityBoxArrow name={"Asian Food Collective"} memberCount={"581"} privacy={"Public"} picture={require('../assets/community/asian_food_collective_pfp.png')}></CommunityBoxArrow>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("RiveraFamilyScreen")}>
                <CommunityBoxArrow name={"Rivera Family"} memberCount={"5"} privacy={"Private"} picture={require('../assets/community/community2.png')}></CommunityBoxArrow>
            </Pressable>
            <CommunityBoxArrow name={'Birthday Bashes'} memberCount={"8"} privacy={"Private"} picture={require('../assets/community/community4.png')}></CommunityBoxArrow>
            <Text style={styles.suggested}>Suggested</Text>
            <CommunityBoxArrow name={"Los Tacos Taqueria"} memberCount={"834"} privacy={"Public"} picture={require('../assets/community/tacos_community.png')}></CommunityBoxArrow>
            <CommunityBoxArrow name={"La Casa Italiana"} memberCount={"582"} privacy={"Public"} picture={require('../assets/community/italiana_community.png')}></CommunityBoxArrow>
            <View style={styles.buttonsBox}>
                <View style={styles.discoverButton}>
                    <DiscoverIcon style={styles.discoverIcon}></DiscoverIcon>
                    <Text style={styles.discoverText}>Discover</Text>
                </View>
                <Pressable onPress={() => navigation.navigate("CreateNewCommunity1")}>
                    <View style={styles.newButton}>
                        <PlusIcon style={styles.newIcon}></PlusIcon>
                        <Text style={styles.newText}>New</Text>
                    </View>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
    },
    headerText: {
        fontFamily: "Romana-Bold",
        fontSize: 32,
        color: Themes.colors.white,
        marginTop: 58,
        marginLeft: 17,
        marginBottom: 35
    },
    info: {
        top: 13.5,
        left: 145.67
    },
    myCommunities: {
        fontFamily: "JakartaSansBold",
        fontSize: 17,
        color: Themes.colors.white,
        marginLeft: 17,
        marginBottom: 4
    },
    suggested: {
        fontFamily: "JakartaSansBold",
        fontSize: 17,
        color: Themes.colors.white,
        marginLeft: 17,
        marginBottom: 4,
        marginTop: 16
    },
    buttonsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    discoverButton: {
        flexDirection: 'row',
        width: 173,
        height: 48,
        borderRadius: 12,
        backgroundColor: Themes.colors.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 113,
        marginLeft: 16,
        // How to add shadow???
    },
    discoverIcon: {
        left: 41
    },
    discoverText: {
        fontFamily: "JakartaSansBold",
        fontSize: 16,
        color: Themes.colors.purple,
        right: 41
    },
    newIcon: {
       //left: 56.1
    },
    newText: {
        fontFamily: "JakartaSansBold",
        fontSize: 16,
        color: Themes.colors.orange,
        marginLeft: 12
        //right: 52
    },
    newButton: {
        flexDirection: 'row',
        width: 173,
        height: 48,
        borderRadius: 12,
        backgroundColor: Themes.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        top: 113,
        marginRight: 16
    }
})