import React from 'react';
import {View, Text, StyleSheet, NativeModules, Image, ScrollView} from 'react-native';
import { Icon, Card } from 'react-native-elements';
import imageUrl from '../assets/images';

const ProfilePage = (props) =>{

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
            
            {/* <View style={styles.p10}>
                <View>
                    <Text>Daniel</Text>
                </View>
            </View> */}
        </View>
    )

}

const styles = StyleSheet.create({
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
        flexDirection: "row",
        backgroundColor: '#FAFAFA'
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
    pltb15:{
        paddingVertical: 15,
        paddingLeft: 15
    },
    pv15:{
        paddingVertical:15
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

export default ProfilePage;