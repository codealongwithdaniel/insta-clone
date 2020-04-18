import React from 'react';
import {View, Text, StyleSheet, NativeModules, Image, ScrollView} from 'react-native';
import imageUrl from '../assets/images';
import { Icon, Card, Header } from 'react-native-elements';

const NotifiactionPage = (props) =>{

    return(
        <View>
            <View style={styles.flexRow}>
                <View style={[styles.p15,styles.textCenter]}>
                  <Icon
                    name='activity'
                    type='feather'
                    color='#000000' />
                </View>
                <View style={[styles.p15]}>
                  <Text>Activities</Text>
                </View>
            </View>
            <ScrollView>
                <View style={[styles.p15]}>
                    <View>
                        <Text style={[styles.fwBold, styles.fs20]}>Stories about you</Text>
                    </View>
                    <View style={[styles.flexRow, styles.mvr15]}>
                        <View>
                            <Image source={imageUrl.sample3} style={[styles.wh55, styles.bRad100]} />
                        </View>
                        <View style={[styles.mhr15]}>
                            <View>
                                <Text style={[styles.fwBold, styles.mb10, styles.fs16]}>Mentions</Text>
                            </View>
                            <View>
                                <Text>1 Story mentions you</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.p15]}>
                    <View>
                        <Text style={[styles.fwBold, styles.fs20]}>Yesterday </Text>
                    </View>
                    <View style={[styles.flexRow, styles.mvr15]}>
                        <View>
                            <Image source={imageUrl.sample3} style={[styles.wh55, styles.bRad100]} />
                        </View>
                        <View style={[styles.mhr15]}>
                            {/* <View>
                                <Text style={[styles.fwBold, styles.mb10, styles.fs16]}>Mentions</Text>
                            </View> */}
                            <View style={[styles.mt10, styles.width200]}>
                                <Text>
                                    <Text style={[styles.fwBold]}>John </Text>
                                    <Text>mentioned you in a comment</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.mlAuto}>
                            <Image source={imageUrl.sample5} style={[styles.wh55]} />
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.mvr15]}>
                        <View>
                            <Image source={imageUrl.sample1} style={[styles.wh55, styles.bRad100]} />
                        </View>
                        <View style={[styles.mhr15]}>
                            {/* <View>
                                <Text style={[styles.fwBold, styles.mb10, styles.fs16]}>Mentions</Text>
                            </View> */}
                            <View style={[styles.mt10, styles.width200]}>
                                <Text>
                                    <Text style={[styles.fwBold]}>Jane </Text>
                                    <Text>liked your post</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.mlAuto}>
                            <Image source={imageUrl.sample3} style={[styles.wh55]} />
                        </View>
                    </View>
                    <View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fwBold:{
        fontWeight: '700'
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 20,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#0288D1',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 14,
      color: '#fff',
      textAlign: 'center'
    },
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
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
    pt3:{
      paddingTop: 3
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
    mhr15:{
        marginHorizontal: 15
    },
    mvr15:{
        marginVertical: 15
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
    colorBlue:{
      color: '#0288D1'
    },
    bbGray:{
      borderBottomColor: '#E0E0E0',
      borderBottomWidth: 1
    },
    mr10:{
      marginRight: 10
    },
    pv10:{
      paddingVertical:10
    },
    mt10:{
        marginTop: 10
    },
    bRad100:{
        borderRadius:100
    },
    wh55:{
        width: 55,
        height: 55
    },
    fs20:{
        fontSize: 20
    },
    fs16:{
        fontSize: 16
    },
    width200:{
        width: 200
    }
})
export default NotifiactionPage;

