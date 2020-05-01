import React from 'react';
import {View, Text, StyleSheet, NativeModules, Image, ScrollView} from 'react-native';
import { Icon, Card } from 'react-native-elements';
import imageUrl from '../assets/images';
import ReadMore from 'react-native-read-more-text';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
    return (
        <View style={[styles.flexRow, styles.displayParent]}>
            <View style={[styles.displayChild]}>

            </View>
            <View style={[styles.displayChild]}>

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
    );
}

function SettingsScreen() {
    return (
        <View style={[styles.flexRow, styles.displayParent]}>
            <View style={[styles.displayChild]}>

            </View>
            <View style={[styles.displayChild]}>

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
    );
}

const ProfilePage = (props) =>{

    _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={[{marginTop: 5, color: "#039BE5"}, styles.fs12]} onPress={handlePress}>
            more
          </Text>
        );
      }
     
      _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={[{marginTop: 5, color: "#039BE5"}, styles.fs12]} onPress={handlePress}>
            Show less
          </Text>
        );
      }
     
      _handleTextReady = () => {
        // ...
      }

    return(
        <View>
            <View style={styles.flexRow}>
                <View style={[styles.pltb15,styles.textCenter]}>
                    <Text>code_along_with_daniel</Text>
                </View>
                <View style={[styles.p10,styles.textCenter]}>
                    <Icon
                    name='chevron-down'
                    type='feather'
                    color='#000000' />
                </View>
                <View style={[styles.p10,styles.textCenter, styles.mlAuto]}>
                    <Icon
                    name='menu'
                    type='feather'
                    color='#000000' />
                </View>
            </View>
            <ScrollView>
                <View>
                    <View style={[styles.flexRow, styles.p15]}>
                        <View style={[styles.mr30]}>
                            <View>
                                <Image source={imageUrl.sample2} style={[styles.wh70, styles.bRad100]} />
                            </View>
                        </View>
                        <View style={[styles.mtr15, styles.m10, styles.mlAuto]}>
                            <View>
                                <Text style={[styles.textCenter, styles.fwBold]}>18</Text>
                            </View>
                            <View>
                                <Text style={[styles.textCenter]}>Posts</Text>
                            </View>
                        </View>
                        <View style={[styles.mtr15]}>
                            <View>
                                <Text style={[styles.textCenter, styles.fwBold]}>132</Text>
                            </View>
                            <View>
                                <Text style={[styles.textCenter]}>Followers</Text>
                            </View>
                        </View>
                        <View style={[styles.mtr15]}>
                            <View>
                                <Text style={[styles.textCenter, styles.fwBold]}>100</Text>
                            </View>
                            <View>
                                <Text style={[styles.textCenter]}>Following</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ml20}>
                    <View>
                        <Text>Daniel</Text>
                    </View>
                    <View>
                        <Text style={[styles.colorGray]}>Digital Creator</Text>
                    </View>
                    <View>
                        <ReadMore
                            numberOfLines={1}
                            renderTruncatedFooter={_renderTruncatedFooter}
                            renderRevealedFooter={_renderRevealedFooter}
                            onReady={_handleTextReady}>
                                <Text style={[styles.fs12, styles.fontBold]}>John </Text>
                                <Text style={[styles.fs12]}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Text>
                        </ReadMore>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.justifyCenter, styles.mb10]}>
                    <View style={[styles.p5, styles.border1, styles.m10, styles.w33p]}>
                        <Text style={[styles.textCenter]}>Edit Profile</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10, styles.w33p]}>
                        <Text style={[styles.textCenter]} >Promotions</Text>
                    </View>
                    <View style={[styles.p5, styles.border1, styles.m10, styles.w33p]}>
                        <Text style={[styles.textCenter]}>Contact</Text>
                    </View>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.mt15, styles.plr10, styles.mb10]}>
                        <View style={[styles.alignItemsCenter, styles.mr15]}>
                            <Image source={imageUrl.plusIcon} style={[styles.wh55, styles.bRad100]} />
                            <Text style={[styles.fs12, styles.mt5]}>New</Text>
                        </View>
                        <View style={[styles.alignItemsCenter, styles.mr15]}>
                            <Image source={imageUrl.sample2} style={[styles.wh55, styles.bRad100]} />
                            <Text style={[styles.fs12, styles.mt5]}>Code</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.mb50}>
                <NavigationContainer independent={true}>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'grid'
                        } else if (route.name === 'Settings') {
                            iconName = 'tag';
                        }
                        return <Icon name={iconName} type='feather' size={22} color={color} />;
                    },
                    })}
                    tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'black',
                    showLabel: false,
                    showIcon: true
                    }}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
                </NavigationContainer>
            </View>
            </ScrollView>
                    
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    p5:{
        padding:5
    },
    justifyCenter:{
        justifyContent: 'center'
    },
    w33p:{
        width: '27%'
    },
    border1:{
        borderWidth: 1,
        borderColor: '#A9A9A9',
        borderRadius: 5
    },
    ml20:{
        marginLeft: 20
    },
    fwBold:{
        fontWeight: '700'
    },
    bRad100:{
        borderRadius:100
    },
    wh70:{
        width: 70,
        height: 70
    },
    flex1:{
        flex: 1
    },
    textCenter:{
        textAlign: "center"
    },
    flexRow:{
        flexDirection: "row"
    },
    mlAuto:{
        // textAlign: "right"
        marginLeft: "auto"
    },
    mr30:{
        marginRight:30
    },
    mtr15:{
        marginTop: 15,
        marginRight:25
    },
    m10:{
        margin:10
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
    pltb15:{
        paddingVertical: 15,
        paddingLeft: 15
    },
    wh55:{
        width: 55,
        height: 55
    },
    plr10:{
        paddingLeft:10,
        paddingRight: 10
    },
    bRad100:{
        borderRadius:100
    },
    mr15:{
        marginRight: 15
    },
    fs12:{
        fontSize:12
    },
    pv15:{
        paddingVertical:15
    },
    p5:{
        padding:5
    },
    alignItemsCenter:{
        alignItems:"center"
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
    colorGray:{
        color: '#808080'
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
    mb50:{
        marginBottom: 50
    },
})

export default ProfilePage;