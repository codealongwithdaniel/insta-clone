import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Icon, Card } from 'react-native-elements';

const FooterNav = (props) => {
    return(
        <View style={styles.flexRow}>
            <View style={[styles.flex1, styles.textCenter]}>
                <Icon
                name='ios-home'
                type='ionicon'
                color='#000000'/>
            </View>
            <View style={[styles.flex1, styles.textCenter]}>
                <Icon
                name='ios-search'
                type='ionicon'
                color='#000000' />
            </View>
            <View style={[styles.flex1, styles.textCenter]}>
                <Icon
                name='ios-add'
                type='ionicon'
                color='#000000' />
            </View>
            <View style={[styles.flex1, styles.textCenter]}>
                <Icon
                name='ios-heart'
                type='ionicon'
                color='#000000'/>
            </View>
            <View style={[styles.flex1, styles.textCenter]}>
                <Icon
                name='ios-person'
                type='ionicon'
                color='#000000' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flex1:{
        flex: 1,
        padding: 10
    },
    textCenter:{
        textAlign: "center"
    },
    flexRow:{
        flexDirection: "row",
        backgroundColor: '#FAFAFA'
    }
})

export default FooterNav;