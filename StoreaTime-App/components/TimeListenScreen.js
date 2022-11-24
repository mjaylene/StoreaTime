import { Text, StyleSheet, View } from 'react-native';

// Credit for Stopclock Feature: https://www.waldo.com/blog/learn-react-native-timer
export default function Time({ time, status }) {
    if (time >= 100000) {
        time = 100000
    }
    
    const transformMinutes = () => {
        if (time < 0) {
            return 0
        }
        const convertedValue = Math.floor((time / 60000) % 60);
        const formattedValue = convertedValue
        return formattedValue
    }
    const transformSeconds = () => {
        const c = Math.floor((0 / 1000) % 60);
        if (time < 0) {
            return ("0" + c).slice(-2)
        }
        
        const convertedValue = Math.floor((time / 1000) % 60);
        const formattedValue = ("0" + convertedValue).slice(-2)
        return formattedValue
    }
    const transformMilliseconds = () => {
        const convertedValue = Math.floor((time / 10) % 100);
        const formattedValue = ("0" + convertedValue).slice(-2)
        return formattedValue
    }
    return (
        <View style={styles.row}>
            {status === 0 ? <Text style={styles.time}>
                {transformMinutes()}:<Text></Text>{transformSeconds()}
            </Text> :
                <Text style={styles.time}>
                    {transformMinutes()}:<Text></Text>{transformSeconds()}
                </Text>
            }

        </View>
    )
}
const styles = StyleSheet.create({
    row: {
       right: 148
    },
    time: {
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'JakartaSans',
    }
})