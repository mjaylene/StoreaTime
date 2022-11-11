import { ImageBackground, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import OnboardingScreens from './components/onboarding';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
        <OnboardingScreens></OnboardingScreens>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
