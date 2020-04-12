import React,{ PureComponent } from 'react';
import {View, TextInput,Text, StyleSheet, NativeModules, Image, ScrollView, TouchableNativeFeedback, TouchableWithoutFeedback, Dimensions} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon, Card } from 'react-native-elements';
import SearchAccounts from './SearchAccounts';
import SearchPlaces from './SearchPlaces';
import SearchTags from './SearchTags';
import SearchTop from './SearchTop';
import AddPostPage from './AddPostPage';
import { NavigationContainer } from '@react-navigation/native';

import { TabViewAnimated, TabView,TabBar, SceneMap } from 'react-native-tab-view';


const FirstRoute = () => (
    <SearchTags />
);
   
const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const initialLayout = { width: Dimensions.get('window').width };

const SearchPage = (props) =>{
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
        <View style={{flex: 1}}>
            <View style={styles.flexRow}>
                <View style={[styles.p10,styles.textCenter]}>
                    <Icon
                    name='arrow-left'
                    type='feather'
                    color='#000000' />
                </View>
                <View style={[styles.p10,styles.textCenter]}>
                    <TextInput placeholder="Search"/>
                </View>
            </View>
            <NavigationContainer independent={true}>
            <Tab.Navigator tabBarOptions={{activeTintColor: '#000'},{labelStyle:[styles.fs12]}}>
                <Tab.Screen name="TOP" component={SearchTop} />
                <Tab.Screen name="ACCOUNTS" component={SearchAccounts} />
                <Tab.Screen name="TAGS" component={SearchTags} />
                <Tab.Screen name="PLACES" component={SearchPlaces} />
            </Tab.Navigator>
            </NavigationContainer>
        </View>
    )

}

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },    
    flex1:{
        flex: 1
    },
    textCenter:{
        textAlign: "center"
    },
    flexRow:{
        flexDirection: "row",
        backgroundColor: '#FAFAFA'
    },
    mlAuto:{
        // textAlign: "right"
        marginLeft: "auto"
    },
    m10:{
        margin:5
    },
    p10:{
        padding:10
    },
    mb10:{
        marginBottom:10
    },
    p15:{
        padding:15
    },
    p5:{
        padding:5
    },
    border1:{
        borderWidth: 1,
        borderColor: '#A9A9A9',
        borderRadius: 5
    },
    displayParent:{
        flexWrap: "wrap",
        // alignItems:"stretch"
    },
    displayChild:{
        margin: 2,
        height: 100,
        width: 115,
        backgroundColor: '#000000',
        alignSelf:'stretch'
    },
    displayChild2:{
        margin: 2,
        height: 200,
        width: 230,
        backgroundColor: '#000000',
    },
    fs12:{
        fontSize: 12
    }
})

export default SearchPage;