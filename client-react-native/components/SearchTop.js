import React from 'react';
import {View, Text, StyleSheet, NativeModules, Image, ScrollView} from 'react-native';
import imageUrl from '../assets/images';
import { Icon, Card } from 'react-native-elements';

const SearchTop = (props) =>{

    return(
        <View style={styles.p20}>
            <View style={[styles.mb10]}>
                <Text>Featured</Text>
            </View>
            <View style={[styles.flexRow]}>
                <View>
                    <Image source={imageUrl.sample3} style={[styles.wh55, styles.bRad100]} />
                </View>
                <View style={[styles.ml10, styles.p10]}>
                    <View style={{flexDirection: "column"}}>
                        <View>
                            <Text>john_doe</Text>
                        </View>
                        <View>
                            <Text style={{color: '#808080'}}>John Doe - Following</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.p10, styles.mlAuto]}>
                    <Icon
                        name='x'
                        type='feather'
                        color='#000000' />
                </View>
            </View>
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
    flex1:{
          flex: 1
    },
    flexRow:{
        flexDirection: "row"
    },
    mt5:{
        marginTop: 5
    },
    mr15:{
        marginRight: 15
    },
    mr40:{
        marginRight:40
    },
    ml10:{
        marginLeft:10
    },
    mt15:{
        marginTop:15
    },
    alignItemsCenter:{
        alignItems:"center"
    },
    fs12:{
        fontSize:12
    },
    bRad100:{
        borderRadius:100
    },
    wh55:{
        width: 55,
        height: 55
    },
    wh20:{
        width: 30,
        height: 30
    },
    plr10:{
        paddingLeft:10,
        paddingRight: 10
    },
    mb10:{
        marginBottom:10
    },
    p10:{
        padding:10
    },
    mlAuto:{
        // textAlign: "right"
        marginLeft: "auto"
    },
    marginTest:{
        marginBottom: 50
    },
    fontBold:{
        fontWeight: "bold"
    },
    ptlr10:{
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10
    },
    p20:{
        padding:20
    }
});


export default SearchTop;