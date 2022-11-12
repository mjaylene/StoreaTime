import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';
import { Audio } from 'expo-av';
import PlayButton from '../assets/icons/play_button.svg'
import ClappingHands from '../assets/icons/clapping_hands.svg'

export default function ListenPlayback() {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/sounds/test_sound1.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const [loaded] = useFonts({
    Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
    'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
    JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.listenBox}>
          <View style={styles.textAndLikeButton}>
            <View style={styles.textLines}>
              <Text style={styles.textStyle}>How did you learn to make </Text>
              <Text style={styles.textStyle}>Kanagawa Ramen?</Text>
            </View>
            <ClappingHands style={styles.clappingHands}/>
          </View>
          <Pressable onPress={playSound}>
           <PlayButton style={styles.playButton}/>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listenBox: {
    width: 358,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 26.85,
    //justifyContent: 'center',
    alignItems: 'center'
  },
  textLines: {
    flexDirection: 'column',
    marginTop: 22
  },
  textAndLikeButton: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textStyle: {
    color: Themes.colors.white,
    fontFamily: 'JakartaSans',
    fontSize: 20,
    fontWeight: 'bold'
  },
  clappingHands: {
    marginLeft: 20,
    marginTop: 23
  },
  playButton: {
    marginTop: 50
  }

})