import { Text, StyleSheet, View } from 'react-native';

// Credit for Stopclock Feature: https://www.waldo.com/blog/learn-react-native-timer
export default function Time({ time, status }) {
    const transformMinutes = () => {
        const convertedValue = Math.floor((time / 60000) % 60);
        const formattedValue = ("0" + convertedValue).slice(-2)
        return formattedValue
    }
    const transformSeconds = () => {
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
                {transformMinutes()} : <Text></Text>{transformSeconds()}/{transformMinutes()} : <Text></Text>{transformSeconds()}
            </Text> :

                <Text style={styles.time}>
                    {transformMinutes()} :
                    <Text> </Text>{transformSeconds()}
                </Text>
            }

        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        display: 'flex',
    },
    time: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'JakartaSansBold',
        top: 40
    }
})