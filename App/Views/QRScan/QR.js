/**
 * Created by iRubb on 2016/7/5.
 */
/**
 * Created by iRubb on 2016/7/5.
 */
'use strict';

import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

export default class QR extends React.Component{
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
                <View style={{flex: 1,backgroundColor: 'green'}}><Text>{'QR'}</Text></View>
            </View>
        );
    }
};