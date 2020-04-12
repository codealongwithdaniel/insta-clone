import React from 'react';
import {View, Text, StyleSheet, NativeModules, Image, ScrollView, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
  );
   
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  );
   
  const initialLayout = { width: Dimensions.get('window').width };

const AddPostPage = (props) =>{
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ]);
   
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });
    return(
        <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
        />
    )

}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
});

export default AddPostPage;