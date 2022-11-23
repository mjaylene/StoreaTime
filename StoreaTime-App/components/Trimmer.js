import React, { Component } from 'react'
import { View, Button, ImageBackground, StyleSheet, Pressable } from 'react-native'
import Trimmer from 'react-native-trimmer'
import PlayButton from '../assets/icons/playButton.svg';
import PauseButton from '../assets/icons/pauseButton.svg';
import BackArrow from '../assets/icons/back_arrow.svg';
import { useState, useRef, useEffect } from 'react';
import Time1 from './Time1.js';


// Credit for Trimmer: https://github.com/repodio/react-native-trimmer
const maxTrimDuration = 60000;
const minimumTrimDuration = 1000;
const totalDuration = 180000;

const initialLeftHandlePosition = 6000;
const initialRightHandlePosition = 36000;

const scrubInterval = 50;

class AudioTrimmer extends Component {
    state = {
        playing: false,
        trimmerLeftHandlePosition: initialLeftHandlePosition,
        trimmerRightHandlePosition: initialRightHandlePosition,
        scrubberPosition: 6000
    }


    playScrubber = () => {
        this.setState({ playing: true });

        this.scrubberInterval = setInterval(() => {
            this.setState({ scrubberPosition: this.state.scrubberPosition + scrubInterval })
        }, scrubInterval)
    }

    pauseScrubber = () => {
        clearInterval(this.scrubberInterval)

        this.setState({ playing: false, scrubberPosition: this.state.trimmerLeftHandlePosition });
    }

    onHandleChange = ({ leftPosition, rightPosition }) => {
        this.setState({
            trimmerRightHandlePosition: rightPosition,
            trimmerLeftHandlePosition: leftPosition
        })
    }

    onScrubbingComplete = (newValue) => {
        this.setState({ playing: false, scrubberPosition: newValue })
    }

    render() {
        const {
            trimmerLeftHandlePosition,
            trimmerRightHandlePosition,
            scrubberPosition,
            playing,
        } = this.state;

        return (
            <View style={styles.container}>

                <View style={styles.trimBox}>
                <Trimmer
                    onHandleChange={this.onHandleChange}
                    totalDuration={totalDuration}
                    trimmerLeftHandlePosition={trimmerLeftHandlePosition}
                    trimmerRightHandlePosition={trimmerRightHandlePosition}
                    minimumTrimDuration={minimumTrimDuration}
                    maxTrimDuration={maxTrimDuration}
                    maximumZoomLevel={200}
                    zoomMultiplier={20}
                    initialZoomValue={2}
                    scaleInOnInit={true}
                    tintColor="#FEA858"
                    markerColor="white"
                    trackBackgroundColor='rgba(255, 255, 255, 0.29)'
                    trackBorderColor="rgba(255, 255, 255, 0.29)"
                    scrubberColor="white"
                    scrubberPosition={scrubberPosition}
                    onScrubbingComplete={this.onScrubbingComplete}
                    onLeftHandlePressIn={() => console.log('onLeftHandlePressIn')}
                    onRightHandlePressIn={() => console.log('onRightHandlePressIn')}
                    onScrubberPressIn={() => console.log('onScrubberPressIn')}
                />
                </View>
                {
                    playing
                        ? <Pressable onPress={this.pauseScrubber}><View style={styles.play}><PauseButton></PauseButton></View></Pressable>
                        : <Pressable onPress={this.playScrubber}>
                            <View style={styles.play}>
                            <PlayButton style={styles.playIcon}></PlayButton>
                            </View>
                            </Pressable>
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        //alignItems: 'center'
        //backgroundColor: 'cyan'
    },
    play: {
        width: 80,
        height: 100,
        backgroundColor: "rgba(255, 255, 255, 0.29)",
        right: 370,
        top: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, 0.30)",
        borderWidth: 1
    },
    playIcon: {
        position: 'absolute',
    },
    trimBox: {
        //backgroundColor: 'blue',
        left: 20
    }

});
export default AudioTrimmer;