import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import Themes from '../assets/Themes/themes';
import { Audio } from 'expo-av';
import PlayButton from '../assets/icons/play_button.svg'
import ClappingHands from '../assets/icons/clapping_hands.svg'
import Rewind15 from '../assets/icons/rewind_15.svg'
import Forward15 from '../assets/icons/forward_15.svg'
import ClappingHandsFilled from '../assets/icons/clapping_hands_filled.svg'
import PauseButton from '../assets/icons/pause_button.svg'
import Slider from '@react-native-community/slider';
import Time from '../components/TimeListenScreen';
import { set } from 'react-native-reanimated';

export default function ListenPlayer({ textLine1, textLine2, endDuration, audio }) {
  const [loaded] = useFonts({
    Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
    'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
    JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
    JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    JarkartaDisplayBold: require('../assets/fonts/PlusJakartaDisplay-Bold.otf'),
  });

  const [sound, setSound] = useState();
  const [played, setPlayed] = useState(false);
  const [val, setVal] = useState(0)
  const [play, setPlay] = useState(false)
  const [liked, setLiked] = useState(false)
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  /* -1 => stopped, 0 => paused, 1 => playing */
  const [status, setStatus] = useState(-1)
  const [count, isClicked] = useState(0);

  const reset = () => {
    setTime(0);
  }
  useEffect(() => {
    let timerID;
    if (status === 1) {
      timerID = setInterval(handleTimes, 1000)
    } else {
      clearInterval(timerID)
      if (status === -1)
        reset();
    }
    return () => { clearInterval(timerID) }
  }, [status])

  const handleStart = () => {
    setStatus(1);
  }
  const handlePause = () => {
    setStatus(status === 0 ? 1 : 0);
  }

  async function playSound() {
    if (!played) {
      const { sound } = await Audio.Sound.createAsync(audio
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

  function playFunction() {
    setPlayed(!played)
    setPlay(!play)
    playSound()
    isClicked(count + 1)
    setIsActive(current => !current);
    if (count % 2 == 0) {
      handleStart();
    } else {
      handlePause();
    }


  }

  if (!loaded) {
    return null;
  }

  const thumb = require('../assets/icons/thumb.png')

  function handleTimes() {
    if (time >= 100000) {
      setTime(100000)
      return
    }
    if (val < 0) {
      setVal(0)
    }
    setVal(val => val + 0.01)
    setTime((time) => time + 1000)
    if (time < 0) {
      setTime(0)
    }
  }

  function AudioSlider() {
    if (val < 0) {
      setVal(0)
    }
    if (val > 1) {
      setVal(1)
    }
    return (
      <View style={styles.container2}>
        <Slider
          value={val}
          thumbImage={thumb}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor={"rgba(181, 181, 181, 0.4)"}
        />
      </View>



    )
  }

  function handleRewind() {
    setVal(val => val - 0.15)
    setTime(time => time - 15000)
  }
  function handleForward() {
    setVal(val => val + 0.15)
    setTime(time => time + 15000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.listenBox}>
        <View style={styles.textAndLikeButton}>
          <View style={styles.textLines}>
            <Text style={styles.textStyle}>{textLine1}</Text>
            {textLine2 != "" ? <Text style={styles.textStyle}>{textLine2}</Text> : <View></View>}
          </View>
          <Pressable onPress={() => setLiked(!liked)}>
            {liked ? <ClappingHandsFilled style={styles.clappingHands} /> : <ClappingHands style={styles.clappingHands} />}
          </Pressable>
        </View>
        <AudioSlider></AudioSlider>
        <View style={styles.timeStampsBox}>
          {count % 2 === 0 && count !== 0 ? <Time style={styles.timer} time={time} status={0} /> :
            <Time style={styles.timer} time={time} status={1} />}
          <Text style={styles.timeStampEnd}>{endDuration}</Text>
        </View>
        <View style={styles.playButtonAndRewindBox}>
          <Pressable onPress={handleRewind}>
            <Rewind15 />
          </Pressable>
          <View style={styles.playButtonBox}>
            <Pressable onPress={playFunction}>
              {played ? <PauseButton style={styles.playButton} /> : <PlayButton style={styles.playButton} />}
            </Pressable>
          </View>
          <Pressable onPress={handleForward}>
            <Forward15 />
          </Pressable>
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
    top: 22,
    left: 10
  },
  playbar: {
    top: 32,
  },
  playButtonAndRewindBox: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 19.69,
  },
  playButton: {
  },
  playButtonBox: {
    paddingLeft: 42,
    paddingRight: 42
  },
  timeStampsBox: {
    flexDirection: 'row',
    top: 25,
  },
  timeStampEnd: {
    fontFamily: 'JakartaSans',
    color: Themes.colors.white,
    left: 150,
    position: 'absolute'
  },
  container2: {
    top: 25,
    justifyContent: 'center',
    width: '95%',


  },
  thumb: {
    backgroundColor: 'white',
  },
  track: {
    backgroundColor: 'rgba(181, 181, 181, 0.4)',
    borderRadius: 4.18,
    height: 8.36,
  },
})