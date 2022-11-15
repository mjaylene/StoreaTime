import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';
import { Audio } from 'expo-av';
import PlayButton from '../assets/icons/play_button.svg'
import ClappingHands from '../assets/icons/clapping_hands.svg'
import Rewind15 from '../assets/icons/rewind_15.svg'
import Forward15 from '../assets/icons/forward_15.svg'
import PlaybarZero from '../assets/icons/playbar_zero.svg'
import PlaybarAdvance from '../assets/icons/playbar_advanced.svg'
import ClappingHandsFilled from '../assets/icons/clapping_hands_filled.svg'
import PauseButton from '../assets/icons/pause_button.svg'


export default function ListenPlayer({ textLine1, textLine2, endDuration }) {
  const [loaded] = useFonts({
    Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
    'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
    JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
    JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    JarkartaDisplayBold: require('../assets/fonts/PlusJakartaDisplay-Bold.otf'),
  });

  const [sound, setSound] = useState();
  const [played, setPlayed] = useState(false);

  async function playSound() {
    if (!played) {
      const { sound } = await Audio.Sound.createAsync(require('../assets/sounds/ramen_story.mp3')
      );
      setSound(sound);

      await sound.playAsync();
    } else {
      await sound.pauseAsync();
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const [liked, setLiked] = useState(false)


  function playFunction() {
    setPlayed(!played)

    playSound()

  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.listenBox}>
        <View style={styles.textAndLikeButton}>
          <View style={styles.textLines}>
            <Text style={styles.textStyle}>{textLine1}</Text>
            <Text style={styles.textStyle}>{textLine2}</Text>
          </View>
          <Pressable onPress={() => setLiked(!liked)}>
            {liked ? <ClappingHandsFilled style={styles.clappingHands} /> : <ClappingHands style={styles.clappingHands} />}
          </Pressable>
        </View>
        {played ? <PlaybarAdvance style={styles.playbar} /> : <PlaybarZero style={styles.playbar} />}
        <View style={styles.timeStampsBox}>
          {played ? <Text style={styles.timeStampBegin}>0:59</Text> : <Text style={styles.timeStampBegin}>0:00</Text>}
          <Text style={styles.timeStampEnd}>{endDuration}</Text>
        </View>
        <View style={styles.playButtonAndRewindBox}>
          <Rewind15 />
          <View style={styles.playButtonBox}>
            <Pressable onPress={playFunction}>
              {played ? <PauseButton style={styles.playButton} /> : <PlayButton style={styles.playButton} />}
            </Pressable>
          </View>
          <Forward15 />
        </View>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  listenBox: {
    width: 358,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 26.85,
    alignItems: 'center'
  },
  textLines: {
    flexDirection: 'column',
    top: 22
  },
  textAndLikeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: Themes.colors.white,
    fontFamily: 'JakartaSansBold',
    fontSize: 19,
  },
  clappingHands: {
    top: 22
  },
  playbar: {
    top: 32,
  },
  playButtonAndRewindBox: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 55,
  },
  playButton: {
  },
  playButtonBox: {
    paddingLeft: 42,
    paddingRight: 42
  },
  timeStampsBox: {
    flexDirection: 'row',
    top: 35,
  },
  timeStampBegin: {
    fontFamily: 'JakartaSans',
    color: Themes.colors.white,
    right: 132,
    position: 'absolute',
  },
  timeStampEnd: {
    fontFamily: 'JakartaSans',
    color: Themes.colors.white,
    left: 135,
    position: 'absolute'
  }
})