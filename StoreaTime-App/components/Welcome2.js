import { Text, View, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView, Pressable, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import React from "react";
//import GradientText from './GradientText';

export default function Welcome1({ navigation }) {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Welcome3')}>
            
      <Image style={styles.listen}
            source={require('../assets/onboarding/onboarding_2.png')}></Image>
        <View style={styles.title}>
            <Text style={styles.textStyle}>Share</Text>
            <Text style={styles.about}>Record and share your stories {'\n'} 
            with others</Text>
        </View>
        <View style={styles.toggleBox}>
            <Image style={styles.toggle1}
                source={require('../assets/icons/toggle_2.png')}></Image>
        </View>
        <View style={styles.footer}>
            <Pressable onPress={() => navigation.navigate('ListenPlayback')}>
                <Text style={styles.skip}>Skip</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Welcome3')}>
                <Text style={styles.next}>Next</Text>
            </Pressable>
        </View>
    
    </TouchableOpacity>
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
      top: 40,
      aspectRatio: 1,
      marginRight: 100,
      marginLeft: 100,
      width: '65%',
      height: '55%',
  },
  textStyle: {
      fontSize: 48,
      fontFamily: 'Romana-Bold',
      color: '#ED765E',
  },
  title: {
      //backgroundColor: 'yellow',
      top: 95,
      alignItems: 'center',
  },
  about: {
      textAlign: 'center',
      fontSize: 15,
      marginTop: 25
  },
  toggleBox: {
      top: 160,
      marginLeft: 245,
  },
  footer: {
      top: 200,
      flexDirection: 'row',
      marginLeft: 105,
  },
  skip: {
      color: '#C1C1C1',
      //fontWeight: 'bold',
      fontSize: 16,
      left: 10
  },
  next: {
      color: '#ED765E',
      fontWeight: 'bold',
      fontSize: 16,
      left: 260
  },
  toggle1:{
    width: 64,
    height: 12
}
});