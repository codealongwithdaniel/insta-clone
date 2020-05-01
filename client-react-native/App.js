import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import AddPostPage from './components/AddPostPage';
import SearchPage from './components/SearchPage';
import ProfilePage from './components/ProfilePage';
import NotifiactionPage from './components/NotificationPage';
import DiscoverPage from './components/DiscoverPage';
import DiscoverNav from './navigation/DiscoverNav';
import ImageUpload from './components/ImageUpload';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.flex1}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'md-home'
            } else if (route.name === 'Discover') {
              iconName = 'md-search';
            } else if (route.name === 'Add') {
              iconName = 'md-add';
            } else if (route.name === 'Notifications') {
              iconName = 'md-heart';
            } else if (route.name === 'Profile') {
              iconName = 'md-person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
          showIcon:true
        }}
      >
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Discover" component={DiscoverNav} />
          <Tab.Screen name="Add" component={AddPostPage} />
          <Tab.Screen name="Notifications" component={NotifiactionPage} />
          <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1:{
        flex: 1
  },
});
