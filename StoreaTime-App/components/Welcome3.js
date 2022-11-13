import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import GradientText from './GradientText';

export default function Welcome3({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.shareIMG}>
        <Image style={styles.listen}
            source={require('../assets/onboarding/onboarding_3.png')}></Image>
        </View>
        <View style={styles.title}>
            <GradientText style={styles.textStyle}>Engage</GradientText>
            <Text style={styles.about}>Find communities of shared {'\n'} 
            interests</Text>
        </View>
        <View style={styles.toggleBox}>
            <Image style={styles.toggle1}
                source={require('../assets/icons/toggle_3.png')}></Image>
        </View>
        <View style={styles.footer}>
            <Pressable>
                <Text style={styles.skip}>Skip</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ListenPlayback')}>
                <Text style={styles.next}>Next</Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  shareIMG: {
      width: '95%',
      height: '45%',
      marginBottom: 50,
      //backgroundColor: 'cyan'
  },
  listen: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain',
      //width: '95%',
      //height: '75%',
  },
  textStyle: {
      fontSize: 48,
      fontFamily: 'Romana-Bold',
  },
  title: {
      //backgroundColor: 'yellow',
      bottom: 10,
      alignItems: 'center',
  },
  about: {
      textAlign: 'center',
      fontSize: 15,
      marginTop: 25
  },
  toggleBox: {
      top: 40,
  },
  footer: {
      top: 100,
      flexDirection: 'row',
  },
  skip: {
      color: '#C1C1C1',
      //fontWeight: 'bold',
      fontSize: 16,
  },
  next: {
      color: '#ED765E',
      fontWeight: 'bold',
      fontSize: 16,
      marginLeft: 270
  }
});