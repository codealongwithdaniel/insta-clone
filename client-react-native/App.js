import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FooterNav from './components/FooterNav';
import HomePage from './components/HomePage';
import { Icon, Card, Header } from 'react-native-elements';
export default function App() {
  return (
    <View style={styles.flex1}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" headerMode="none" options={{headerShown: false}} component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
      <FooterNav />
    </View>
  );
}

const Stack = createStackNavigator();

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
