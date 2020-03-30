import React from 'react';
import {View, Text, StyleSheet, NativeModules, Image, ScrollView} from 'react-native';
import { Icon, Card, Header } from 'react-native-elements';
import imageUrl from '../assets/images';

const HomePage = () =>{
    return (
        <View>
            <Header
                backgroundColor = "#FAFAFA"
                leftComponent={<Icon
                name='ios-camera'
                type='ionicon'
                color='#000000'/>}
                centerComponent={{ text: 'Instagram', style: { color: '#000000' } }}
                rightComponent={
                <View style={{flexDirection: "row"}}>
                    <View style={{marginRight: 40}}>
                        <Icon
                        name='ios-tv'
                        type='ionicon'
                        color='#000000'
                        />
                    </View>
                    <View>
                        <Icon
                        name='ios-send'
                        type='ionicon'
                        color='#000000'
                        />
                    </View>
                </View>}
            />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:15}}>
                {/* <View style={{alignItems: 'center', maxWidth: 100}}>
                    <Image source={imageUrl.sample1} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20, marginLeft: 20}} />
                    <Text style={{fontSize:12, marginTop: 5}}>My Story</Text>
                </View>
                <View style={{alignItems: 'center', maxWidth: 100}}>
                    <Image source={imageUrl.sample2} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20}} />
                    <Text style={{fontSize:12, marginTop: 5}}>My Story</Text>
                </View> */}
                
                <Image source={imageUrl.sample3} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20, marginLeft: 20}} />
                <Image source={imageUrl.sample2} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20}} />
                <Image source={imageUrl.sample1} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20}} />
                <Image source={imageUrl.sample3} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20}} />
                <Image source={imageUrl.sample2} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20}} />
                <Image source={imageUrl.sample1} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20}} />
                <Image source={imageUrl.sample2} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20}} />
                <Image source={imageUrl.sample1} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20}} />
                <Image source={imageUrl.sample3} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20}} />
                <Image source={imageUrl.sample1} style={{width: 55, height: 55, borderRadius: 100, marginRight: 20}} />
            </ScrollView>
        </View>
        
    );
}

export default HomePage;