import React from 'react';
import {View, Text, StyleSheet, NativeModules, Image, ScrollView, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
import { Icon, Card } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from './SearchPage'

const DiscoverPage = (props) =>{
    // console.log(props.navigation.navigate)
    return(
        <View>
            <View style={styles.flexRow}>
                <View style={[styles.p10,styles.textCenter]}>
                    <Icon
                    name='search'
                    type='feather'
                    color='#000000' />
                </View>
                <View style={[styles.p15,styles.textCenter]}>
                    <TouchableWithoutFeedback onPress={() => {
                        props.navigation.navigate('Discover', {
                        screen: 'Search'
                        }
                    )
                    console.log('clicked')
                        
                    }}>
                        <Text>Search</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={[styles.p10,styles.textCenter, styles.mlAuto]}>
                    <Icon
                    name='minimize'
                    type='feather'
                    color='#000000' />
                </View>
            </View>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.mt15, styles.plr10, styles.mb10, styles.flexRow]}>
                    <View style={[styles.p5, styles.border1, styles.m10]}>
                        <Text>Shop</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10]}>
                        <Text>Adventure</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10]}>
                        <Text>Programming</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10]}>
                        <Text>Food</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10]}>
                        <Text>Art</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10]}>
                        <Text>Nature</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10]}>
                        <Text>Food</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10]}>
                        <Text>Explore</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10]}>
                        <Text>Humor</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10]}>
                        <Text>Memes</Text>
                    </View>
                </ScrollView>
            </View>
            <ScrollView>
                <View style={[styles.flexRow, styles.displayParent]}>
                    <View style={[styles.displayChild]}>

                    </View>
                    <View style={[styles.displayChild2]}>

                    </View>
                    <View style={[styles.displayChild]}>

                    </View>
                    <View style={[styles.displayChild]}>

                    </View>
                    <View style={[styles.displayChild]}>

                    </View>
                    <View style={[styles.displayChild]}>

                    </View>
                </View>
            </ScrollView>
            <Stack.Navigator>
                <Stack.Screen name="Search" component={SearchPage} />
            </Stack.Navigator>
        </View>
        
    )

}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
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
    }
})
export default DiscoverPage;