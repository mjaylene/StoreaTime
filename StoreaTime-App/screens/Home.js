import { ImageBackground, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import OnboardingScreens from './components/onboarding';
import RecordScreen from './screens/RecordScreen';
import ListenScreen1 from './screens/ListenScreen1';
import ExploreIconGray from './assets/icons/explore_icon_gray.svg'
import ExploreIconOrange from './assets/icons/explore_icon_orange.svg'
import RecordTabIcon from './assets/icons/record_tab_icon.svg'
import CommunityIconGray from './assets/icons/community_icon.svg';
import CommunityIconOrange from './assets/icons/community_icon_orange.svg';



/*
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
        <OnboardingScreens></OnboardingScreens>
      </ImageBackground>
*/ 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Explore") {
              iconName = focused ? <ExploreIconOrange style={{marginTop: 15}}/> : <ExploreIconGray style={{marginTop: 15}}/>
            }
            else if (route.name === "Record") {
              iconName = focused ? <RecordTabIcon/> : <RecordTabIcon/>
            } else if (route.name == "Community") {
              iconName = focused ? <CommunityIconOrange style={{marginTop: 15}}/> : <CommunityIconGray style={{marginTop: 15}}/>
            }
            

            return iconName;
          }
        })}>
        <Tab.Screen name="Explore" component={ListenScreen1} options={{headerShown: false}}/>
        <Tab.Screen name="Record" component={RecordScreen}/>
        <Tab.Screen name="Community" component={OnboardingScreens} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}