import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function ImageSwiperTranscription({image1, image2, image3}) {
    return (
        <View style={styles.swiperBox}>
            <Swiper
                removeClippedSubviews={false}
                loadMinimal={true}
                style={styles.wrapper}
                dot={
                    <View
                        style={styles.dotStyle}
                    />
                }
                activeDot={
                    <View
                        style={styles.activeDotStyle}
                    />
                }
            >
                <View style={{ alignItems: 'center' }}>
                    <Image source={image1} style={styles.imageStyle}></Image>
                </View>
                <View>
                    <Image source={image2} style={styles.imageStyle}></Image>
                </View>
                <View>
                    <Image source={image3} style={styles.imageStyle}></Image>
                </View>
                
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {zIndex: 0},
    swiperBox: {
        width: 358,
        height: 353,
        //marginTop: 32,
        marginBottom: 24,
        zIndex: 0
    },
    dotStyle: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 12,
        height: 12,
        borderRadius: 12,
        marginLeft: 3,
        marginRight: 3,
        //marginTop: 3,
        //marginBottom: 16

    },
    activeDotStyle: {
        backgroundColor: '#FFF',
        width: 15,
        height: 15,
        borderRadius: 12,
        marginLeft: 3,
        marginRight: 3,
        //marginTop: 3,
        //marginBottom: 16
    },
    imageStyle: {
        
        width: 358,
        height: 353,
        borderRadius: 24,
       
    },
})