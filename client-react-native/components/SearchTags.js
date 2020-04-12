import React from 'react';
import {View, Text, StyleSheet, NativeModules, Image, ScrollView} from 'react-native';

const SearchTags = (props) =>{

    return(
        <View style={[styles.scene, { backgroundColor: '#000000' }]} >
        </View>
        
    )

}


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
    bgBlack:{
        backgroundColor: '#000000'
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

export default SearchTags;