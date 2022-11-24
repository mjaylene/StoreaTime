import { ImageBackground, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import OnboardingScreens from './components/onboarding';
import RecordScreen1 from './screens/RecordScreen1';
import ExploreIconGray from './assets/icons/explore_icon_gray.svg'
import ExploreIconOrange from './assets/icons/explore_icon_orange.svg'
import RecordTabIcon from './assets/icons/record_tab_icon.svg'
import CommunityIconGray from './assets/icons/community_icon.svg';
import CommunityIconOrange from './assets/icons/community_icon_orange.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import CommunitySettingsScreen from './screens/CommunitySettingsScreen';

export default function App() {
  return (
    <NavigationContainer>
      <OnboardingScreens></OnboardingScreens>
    </NavigationContainer>
  );
}
