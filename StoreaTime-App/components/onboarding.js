import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useFonts } from 'expo-font';


export default function OnboardingScreens() {
    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        //JakartaSans: require('./assets/fonts/PlusJakartaSans-VariableFont_wght'),
      });
    return (
        <View style={styles.onboarding}>
            <Text style={styles.title}>StoreaTime</Text>
            <StatusBar style="auto" />
            <Pressable>
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
        </View>
    );
}

const styles = StyleSheet.create({
    onboarding: {
        //backgroundColor: 'green',
        alignItems: 'center',
        width: '100%',
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
      shadowOffset: {width: 3, height: 6},
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
  