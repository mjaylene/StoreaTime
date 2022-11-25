import { Text, View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import AccessCommunityHeader from '../components/AccessCommunityHeader';
import AccessRecentStories from '../components/AccessRecentStories';
import AccessCommunityButtons from '../components/AccessCommunityButtons';
import loadBackgroundImageAsync from '../components/LoadBackgroundImageAsync';

const STORIES = [
    {
        id: 1,
        card: require('../assets/explore_photocards/community_finds_card5.png'),
    },
    {
        id: 2,
        card: require('../assets/explore_photocards/community_finds_card4.png'),
    },
    {
        id: 3,
        card: require('../assets/explore_photocards/community_finds_card6.png'),
    }
]

export default function RiveraFamilyScreen({ navigation }) {
    loadBackgroundImageAsync();
    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <AccessCommunityHeader image={require('../assets/community/rivera_family_pfp.png')} communityName={"Rivera Family"} navigation={navigation}></AccessCommunityHeader>
            <AccessRecentStories STORIES={STORIES}></AccessRecentStories>
            <AccessCommunityButtons></AccessCommunityButtons>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1
    },
})