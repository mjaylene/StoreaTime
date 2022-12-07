import { Text, View, StyleSheet, ImageBackground, Pressable, Image, FlatList, Modal } from 'react-native';
import {useState} from 'react';
import { useFonts } from 'expo-font';
import Filter from '../assets/icons/filter.svg'
import FilterX from '../assets/icons/filter_x.svg'
import RadioUnfilled from '../assets/icons/radio_unfilled.svg'
import RadioFilled from '../assets/icons/radio_filled.svg'
import Themes from '../assets/Themes/themes';

export default function FilterModal( {handleAll, handleAudio, handleText, cardsToDisplay } ) {
    const [modalVisible, setModalVisible] = useState(false);
    const [radioAll, setRadioAll] = useState(true);
    const [radioAudio, setRadioAudio] = useState(false);
    const [radioText, setRadioText] = useState(false);
    const [currAll, setCurrAll] = useState(radioAll)
    const [currAudio, setCurrAudio] = useState(radioAudio)
    const [currText, setCurrText] = useState(radioText)

    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }
    

    function AllButton() {
        setCurrAll(radioAll)
        setCurrAudio(radioAudio)
        setCurrText(radioText)
        
        setRadioAudio(false)
        setRadioText(false)
        setRadioAll(true)
        handleAll();
    }
    function AudioButton() {
        setCurrAll(radioAll)
        setCurrAudio(radioAudio)
        setCurrText(radioText)

        setRadioAll(false)
        setRadioText(false)
        setRadioAudio(true)
        handleAudio();
    }
    function TextButton() {
        setCurrAll(radioAll)
        setCurrAudio(radioAudio)
        setCurrText(radioText)

        setRadioAudio(false)
        setRadioAll(false)
        setRadioText(true)
        handleText()
    }

    function ClearSelection() {
        setRadioAll(currAll)
        setRadioAudio(currAudio)
        setRadioText(currText)
        setModalVisible(!modalVisible)
    }

    function ApplySelection() {
        setModalVisible(!modalVisible)
        cardsToDisplay()
    }

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                    <View style={styles.topView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Pressable onPress={ClearSelection}>
                                    <FilterX style={{marginLeft: 19.67}}></FilterX>
                                </Pressable>
                                <Text style={styles.filterTitle}>Filter</Text>
                            </View>
                            <View style={styles.line}></View>
                            <View style={{marginLeft: 24, marginTop: 36, marginBottom: 12}}>
                                <View style={styles.optionBox}>
                                    <Pressable onPress={() => AllButton()}>
                                        {radioAll ? <RadioFilled></RadioFilled> : <RadioUnfilled></RadioUnfilled>}
                                    </Pressable>
                                    <Text style={styles.optionText}>All</Text>
                                </View>
                                <View style={styles.optionBox}>
                                    <Pressable onPress={() => AudioButton()}>
                                        {radioAudio ? <RadioFilled></RadioFilled> : <RadioUnfilled></RadioUnfilled>}
                                    </Pressable>
                                    <Text style={styles.optionText}>Audio</Text>
                                </View>
                                <View style={styles.optionBox}>
                                    <Pressable onPress={() => TextButton()}>
                                        {radioText ? <RadioFilled></RadioFilled> : <RadioUnfilled></RadioUnfilled>}
                                    </Pressable>
                                    <Text style={styles.optionText}>Text</Text>
                                </View>
                            </View>
                            <Pressable onPress={ApplySelection}>
                                <View style={styles.applyButton}>
                                        <Text style={styles.applyText}>Apply</Text>
                                </View>
                                </Pressable> 
                        </View>
                    </View>
                </View>
            </Modal>
            
            <Pressable onPress={() => setModalVisible(true)}>
                <Filter></Filter>
            </Pressable>
       
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        right: 28,
        //backgroundColor: 'black'
    },
    topView: {
        backgroundColor: 'rgba(0, 0, 0, 0.58)',
        width: 391,
        height: 845,
        justifyContent: "flex-end",
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        //marginTop: 22
      },
    modalView: {
        backgroundColor: "white",
        width: 391,
        height: 317,
        borderRadius: 16,
        
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 0,
        marginBottom: 21,
        marginTop: 21
    },
    line: {
        backgroundColor: 'grey',
        height: 1,
        width: 391,
    },
    filterTitle: {
        fontFamily: "JakartaSansBold",
        fontSize: 17,
        left: 137.67,
    },
    optionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24
    },
    optionText: {
        fontFamily: "JakartaSansBold",
        fontSize: 17,
        marginLeft: 12
    },
    applyButton: {
        width: 358,
        height: 48,
        borderRadius: 12,
        marginLeft: 16,
        backgroundColor: Themes.colors.purple,
        justifyContent: 'center',
        alignItems: 'center'
    },
    applyText: {
        color: Themes.colors.white,
        fontFamily: "JakartaSansBold",
        fontSize: 16
    }
})