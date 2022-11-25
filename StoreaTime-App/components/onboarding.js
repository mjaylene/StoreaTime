import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, SafeAreaView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Signup3 from './Signup3';
import Login from './Login';
import Welcome1 from './Welcome1';
import Welcome2 from './Welcome2';
import Welcome3 from './Welcome3';
import TodaysListensScreen from '../screens/TodaysListensScreen'
import loadBackgroundImageAsync from './LoadBackgroundImageAsync';

const token = false
const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
    if (token) {
        console.log('returning user -> login')

    } else {
        console.log('new user -> signup')

    }
    loadBackgroundImageAsync();

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
            <Text style={styles.title}>StoreaTime</Text>
            <StatusBar style="auto" />
            <Pressable onPress={() => navigation.navigate('Signup1')}>
                <View style={styles.signUpButton}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </View>
                <View style={styles.loginArea}>
                    <Text style={{ color: 'white' }}>Already have an account? </Text>
                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}>Log in here</Text>
                    </Pressable>
                </View>
            </Pressable>
        </ImageBackground>
    );
}

export default function OnboardingScreens() {
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
        <Stack.Navigator>
            <Stack.Screen name="Back " component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup1" component={Signup1} options={{ headerShown: false }} />
            <Stack.Screen name="Signup2" component={Signup2} options={{ headerShown: false }} />
            <Stack.Screen name="Signup3" component={Signup3} options={{ headerShown: false }} />
            <Stack.Screen name="Welcome1" component={Welcome1} options={{ headerShown: false }} />
            <Stack.Screen name="Welcome2" component={Welcome2} options={{ headerShown: false }} />
            <Stack.Screen name="Welcome3" component={Welcome3} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={TodaysListensScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}

const styles = StyleSheet.create({
    image: {
        //flex: 1,
        //aspectRatio: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    onboarding: {
        //backgroundColor: 'green',
        alignItems: 'center',
        width: '100%',
        position: 'relative'
    },
    title: {
        bottom: '5%',
        color: 'white',
        fontSize: 65,
        fontFamily: 'Romana-Bold',
    },
    signUpButton: {
        width: 350,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        top: 280,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    signUpText: {
        color: '#FF6F52',
        fontSize: 16,
        fontWeight: 'bold'
    },
    loginArea: {
        top: 300,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginText: {
        color: 'white',
        textDecorationLine: 'underline',
        //fontWeight: 'bold',
    }
});
