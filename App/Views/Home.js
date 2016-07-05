/**
 * Created by iRubb on 2016/7/5.
 */

import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

export default class Home extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {}
    }
    // 渲染
    render(){
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1,backgroundColor: 'red'}}><Text>{'QR'}</Text></View>
            </View>
        );
    }
};