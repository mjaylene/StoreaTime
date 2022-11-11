import { ImageBackground, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import OnboardingScreens from './components/onboarding';

/*
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
        <OnboardingScreens></OnboardingScreens>
      </ImageBackground>
*/ 
export default function App() {
  return (
      <OnboardingScreens></OnboardingScreens>
  );
}