import { Text, View, StyleSheet, ImageBackground, Pressable, Image, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';

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
            <Pressable onPress={() => item.id === "Churros" ? navigation.navigate("ChurroListenScreen") 
            : item.id === "Elotes" ? navigation.navigate("ElotesReadScreen")
            : navigation.navigate("EnchiladasListenScreen")}>
                <Image style={styles.cardImage} source={item.card} />
            </Pressable>
        </View>
    )
}

export default function AccessRecentStories({ STORIES, navigation }) {
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
            <Text style={styles.title}>Recent Stories</Text>
            <View style={styles.listContainer}>
                <FlatList
                    horizontal
                    data={STORIES}
                    renderItem={(params) => renderStoryCard(params, navigation)}
                    keyExtractor={(item) => item.id}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        //top: 150
    },
    title: {
        fontFamily: "JakartaSansBold",
        fontSize: 22,
        color: Themes.colors.white,
        top: 50
    },
    listContainer: {
        top: 78,
        height: 360.09
        
    },
    cardImage: {
        width: 283.35,
        height: 360.09
    },
})