import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
import GradientText from './GradientText';

export default function Welcome1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.listen}
            source={require('../assets/onboarding/onboarding_1.png')}></Image>
        <View style={styles.title}>
            <GradientText style={styles.textStyle}>Listen</GradientText>
            <Text style={styles.about}>Hear other people's stories about {'\n'} 
            their favorite dishes</Text>
        </View>
        <View style={styles.toggleBox}>
            <Image style={styles.toggle1}
                source={require('../assets/icons/toggle_1.png')}></Image>
        </View>
        <View style={styles.footer}>
            <Pressable>
                <Text style={styles.skip}>Skip</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Welcome2')}>
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
  listen: {
      bottom: 50,
      aspectRatio: 0.8,
      width: '55%',
      height: '45%',
  },
  textStyle: {
      fontSize: 48,
      fontFamily: 'Romana-Bold',
  },
  title: {
      //backgroundColor: 'yellow',
      bottom: 3,
      alignItems: 'center',
  },
  about: {
      textAlign: 'center',
      fontSize: 15,
      marginTop: 25
  },
  toggleBox: {
      top: 60,
  },
  footer: {
      top: 120,
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