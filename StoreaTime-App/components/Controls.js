import { View, StyleSheet, Pressable} from 'react-native';
import { useState } from 'react';
import MicCircle from '../assets/icons/mic_circle.svg';
import TypeInstead from '../assets/icons/type.svg';

// Credit for Stopclock Feature: https://www.waldo.com/blog/learn-react-native-timer
export default function RecordControls({ handleStart, handlePause }) {
    const Pulse = require('react-native-pulse').default;
    const [isActive, setIsActive] = useState(false);
    const [count, isClicked] = useState(0);
    //const dishName = route.params.paramDish;

    const handleClick = () => {
        console.log('record clicked')
        console.log(count)
        isClicked(count + 1)
        setIsActive(current => !current);
        if (count % 2 == 0) {
            handleStart();
        } else {
            handlePause();
        }
        // setIsActive(true);
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handleClick}>
                {!isActive ? <MicCircle style={styles.micIcon}></MicCircle> :
                    <View>
                        <View style={styles.pulse}>
                            <Pulse color='white' numPulses={3} diameter={400} speed={10} duration={1000} initialDiameter={200} />
                        </View>
                        <MicCircle style={styles.micIcon}></MicCircle>
                    </View>
                }
            </Pressable>
            {count === 0 ? <Pressable>
                <TypeInstead style={styles.type}></TypeInstead>
            </Pressable> : <View style={styles.blankBox}></View>}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        //width: '100%',
        //height: '100%',
        alignItems: 'center'
    },
    micIcon: {
        width: 255,
        height: 255,
        top: 35
    },
    pulse: {
        top: 150
    },
    type: {
        width: 220,
        height: 76,
        top: 70
    },
    blankBox: {
        height: 76
    }
})