import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FooterNav from './components/FooterNav';
import HomePage from './components/HomePage';
import { Icon, Card, Header } from 'react-native-elements';
export default function App() {
  return (
    <SafeAreaView style={{flex : 1}}>
      <HomePage />
      <ScrollView>
      </ScrollView>
      <FooterNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
