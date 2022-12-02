import { Text, View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import AccessCommunityHeader from '../components/AccessCommunityHeader';
import AccessRecentStories from '../components/AccessRecentStories';
import AccessCommunityButtons from '../components/AccessCommunityButtons';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';
import RiveraFamilyMessages from './message_screens/RiveraFamilyMessageScreen';

const STORIES = [
    {
        id: "Dimsum",
        card: require('../assets/explore_photocards/community_finds_card2.png'),
    },
    {
        id: "Ramen",
        card: require('../assets/explore_photocards/community_finds_card1.png'),
    },
    {
        id: "PadThai",
        card: require('../assets/explore_photocards/community_finds_card3.png'),
    }
]

export default function AsianFoodCollectiveScreen({ navigation }) {
    loadBackgroundImageAsync();
    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <AccessCommunityHeader image={require('../assets/community/asian_food_collective_header.png')} communityName={"Asian Food Collective"} navigation={navigation}></AccessCommunityHeader>
            <AccessRecentStories STORIES={STORIES} navigation={navigation}></AccessRecentStories>
            <AccessCommunityButtons navigation={navigation} messageScreen={"AsianFoodCollectiveMessages"}></AccessCommunityButtons>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1
    },
})