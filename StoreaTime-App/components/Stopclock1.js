import {useState,useEffect} from 'react'
import {View,StyleSheet} from 'react-native';
import Controls1 from './Controls1.js';
import Time1 from './Time1';
export default function StopClock1(){
    const [time,setTime]=useState(0);
    const [status,setStatus]=useState(-1)
    const reset=()=>{
    }
    const handleStart=()=>{
    }
    const handlePause=()=>{
    }
    const handleStop=()=>{
    }
    return(
        <View style={styles.container}>
            <Time1 time={time} />
            <Controls1
                status={status}
                handleStart={handleStart}
                handlePause={handlePause}
                handleStop={handleStop}
            />
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        width: '100%'
    },
})