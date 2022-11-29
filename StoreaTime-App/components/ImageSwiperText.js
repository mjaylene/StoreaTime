import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function ImageSwiperText({image1, image2, image3}) {
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
                {image3 == "" ? console.log("no image4") : <View>
                    <Image source={image3} style={styles.imageStyle}></Image>
                </View>}
                
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    swiperBox: {
        width: 358,
        height: 496,
        marginBottom: 0,
        bottom: 20
        //backgroundColor: 'green'
    },
    dotStyle: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 12,
        height: 12,
        borderRadius: 12,
        marginLeft: 3,
        marginRight: 3,
    },
    activeDotStyle: {
        backgroundColor: '#FFF',
        width: 15,
        height: 15,
        borderRadius: 12,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 0,
        marginBottom: 0
    },
    imageStyle: {
        marginTop: 32,
        width: 358,
        height: 464,
        borderRadius: 24,
        marginBottom: 24,
    },
})