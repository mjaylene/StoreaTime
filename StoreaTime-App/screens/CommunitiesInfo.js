import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import {useState} from 'react';
import X from '../assets/icons/filter_x.svg'
import InfoIcon from '../assets/icons/info.svg'
import Themes from '../assets/Themes/themes';

async function loadBackgroundImageAsync() {
    await Promise.all([
      Asset.loadAsync([
        require('../assets/community_info.png')
      ]),
    ]);
  }

export default function CommunitiesInfoModal() {
    //loadBackgroundImageAsync();
    const [modalVisible, setModalVisible] = useState(false);

    const [loaded] = useFonts({
        Romana: require('../assets/fonts/RomanaRoman-Normal.otf'),
        'Romana-Bold': require('../assets/fonts/RomanaRoman-Bold.otf'),
        JakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
        JakartaSansBold: require('../assets/fonts/PlusJakartaText-Bold.otf'),
    });

    if (!loaded) {
        return null;
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
                    <View style={styles.modalView}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles.xBox}>
                            <X></X>
                        </View>
                    </Pressable>
                    <Image style={styles.imageStyle} source={require('../assets/community_info.png')}></Image>  
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles.backButton}>
                            <Text style={styles.buttonText}>Back</Text>
                        </View>
                    </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <View style={styles.info}>
                    <InfoIcon></InfoIcon>
                </View>
            </Pressable>  
        </View>
            
        
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //backgroundColor: Themes.colors.white,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        //marginTop: 22
      },
    modalView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        width: 391,
        height: 844,
        borderRadius: 16,
        
    },
    imageStyle: {
        top: 68,
        width: 302,
        height: 490
    },
    info: {
        top: 13.5,
        left: 143
    },
    xBox: {
        top: -86,
        right: 161
    },
    backButton: {
        width: 358,
        height: 48,
        borderRadius: 12,
        backgroundColor: Themes.colors.purple,
        justifyContent: 'center',
        alignItems: 'center',
        top: 115
    },
    buttonText: {
        fontFamily: "JakartaSansBold",
        fontSize: 16,
        color: Themes.colors.white
    }
})