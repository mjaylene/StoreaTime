import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, SafeAreaView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Signup3 from './Signup3';
import Login from './Login';
import Welcome1 from './Welcome1';
import Welcome2 from './Welcome2';
import Welcome3 from './Welcome3';

const token = false
//const Stack = createStackNavigator();

//function HomeScreen({ navigation }) {

//}
const Stack = createStackNavigator();

/*
const SignupFunction = ( {navigation} ) => {
    return (

    );
}
*/
function HomeScreen({ navigation }) {
    if (token) {
        console.log('returning user -> login')
        // render flatlist
        //contentDisplayed = <List trackList ={tracks} navigation={navigation}/>;
    } else {
        console.log('new user -> signup')
        //contentDisplayed = <SignupFunction></SignupFunction>;
    }

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
                    <Pressable>
                        <Text style={styles.loginText}>Log in here</Text>
                    </Pressable>
                </View>
            </Pressable>
        </ImageBackground>
    );
}

// options={{ headerShown: false }}
export default function OnboardingScreens() {
    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
    });
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Back " component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="Signup1" component={Signup1} options={{headerShown: false}} /> 
                <Stack.Screen name="Signup2" component={Signup2} options={{headerShown: false}} />
                <Stack.Screen name="Signup3" component={Signup3} options={{headerShown: false}} />
                <Stack.Screen name="Welcome1" component={Welcome1}  options={{headerShown: false}} />
                <Stack.Screen name="Welcome2" component={Welcome2}  options={{headerShown: false}} />
                <Stack.Screen name="Welcome3" component={Welcome3}  options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
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
        fontWeight: 'bold',
    }
});
