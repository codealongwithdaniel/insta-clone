import React from 'react';
import {View, Text, StyleSheet, NativeModules, Image, ScrollView} from 'react-native';
import { Icon, Card, Header } from 'react-native-elements';
import imageUrl from '../assets/images';
import { SliderBox } from 'react-native-image-slider-box';
import FooterNav from './FooterNav';
import ReadMore from 'react-native-read-more-text';

const HomePage = (props) =>{
        // super(props);     
        this.state = {       
        images: [         
        "https://source.unsplash.com/1024x768/?nature",                 "https://source.unsplash.com/1024x768/?water",  "https://source.unsplash.com/1024x768/?girl",         "https://source.unsplash.com/1024x768/?tree", // Network image         require('./assets/images/girl.jpg'),          // Local image       
        ]     
        };
    return (
        <View style={styles.mb50}>
            <Header
                containerStyle = {{height: 50, paddingBottom:25}}
                backgroundColor = "#FAFAFA"
                leftComponent={<Icon
                name='ios-camera'
                type='ionicon'
                color='#000000'/>}
                centerComponent={{ text: 'Instagram', style: { color: '#000000' } }}
                rightComponent={
                <View style={styles.flexRow}>
                    <View style={styles.mr40}>
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
            <ScrollView>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.mt15, styles.plr10, styles.mb10]}>
                    <View style={[styles.alignItemsCenter, styles.mr15]}>
                        <Image source={imageUrl.sample3} style={[styles.wh55, styles.bRad100]} />
                        <Text style={[styles.fs12, styles.mt5]}>Jane</Text>
                    </View>
                    <View style={[styles.alignItemsCenter, styles.mr15]}>
                        <Image source={imageUrl.sample2} style={[styles.wh55, styles.bRad100]} />
                        <Text style={[styles.fs12, styles.mt5]}>John</Text>
                    </View>
                </ScrollView>
                <View>
                    <View>
                        <View style={[styles.p10, styles.flexRow]}>
                            <View style={[styles.alignItemsCenter, styles.mr15, styles.flexRow]}>
                                <Image source={imageUrl.sample5} style={[styles.wh20, styles.bRad100]} />
                                <Text style={[styles.fs12, styles.mt5, styles.ml10]}>John Doe</Text>
                            </View>
                            <View style={styles.mlAuto}>
                            <Icon
                                
                                name='more-vertical'
                                type='feather'
                                color='#000000'
                                />
                            </View>
                        </View>
                        <SliderBox sliderBoxHeight={400} images={this.state.images} />
                        <View>
                            <View style={[styles.flexRow]}>
                                <View style={[styles.flexRow]}>
                                    <View style={[styles.p10]}>
                                        <Icon
                                        name='heart'
                                        type='feather'
                                        size = {20}
                                        color='#000000' />
                                    </View>
                                    <View style={[styles.p10]}>
                                        <Icon
                                        name='message-circle'
                                        type='feather'
                                        size = {20}
                                        color='#000000' />
                                    </View>
                                    <View style={[styles.p10]}>
                                        <Icon
                                        name='send'
                                        type='feather'
                                        size = {20}
                                        color='#000000' />
                                    </View>
                                </View>
                                <View style={[styles.mlAuto,styles.p10]}>
                                <Icon
                                    name='bookmark'
                                    type='feather'
                                    size = {20}
                                    color='#000000'
                                    />
                                </View>
                            </View>
                            <View style={[styles.ptlr10, styles.flexRow]}>
                                <Text style={[styles.fs12]}>Liked By </Text>
                                <Text style={[styles.fs12, styles.fontBold]}>stark</Text>
                                <Text style={[styles.fs12]}> and </Text>
                                <Text style={[styles.fs12, styles.fontBold]}>others</Text>
                            </View>
                            <View style={styles.p10}>
                                <ReadMore
                                numberOfLines={1}
                                renderTruncatedFooter={_renderTruncatedFooter}
                                renderRevealedFooter={_renderRevealedFooter}
                                onReady={_handleTextReady}>
                                    <Text style={[styles.fs12, styles.fontBold]}>John </Text>
                                    <Text style={[styles.fs12]}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>
                                </ReadMore>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}


_renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={[{marginTop: 5, color: "#039BE5"}, styles.fs12]} onPress={handlePress}>
        Read more
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
    mb50:{
        marginBottom: 50
    },
    fontBold:{
        fontWeight: "bold"
    },
    ptlr10:{
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10
    }
});

export default HomePage;