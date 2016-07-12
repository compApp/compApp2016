/**
 * Created by iRubb on 2016/7/5.
 */
'use strict';

import React, { Component } from 'react';
import { styles } from './NavCss';
import  QR from '../../Views/QRScan/QR';
import  User from '../../Views/UserManager/User';
import  Home from '../../Views/Home/Home';

import { View, Image, Text} from 'react-native';

export default class Nav extends Component{

    static defaultProps = {
        current: 1,
        currentText: '主页'
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [
                {
                    text: '扫描二维码',
                    uri: require('./img/scan1_1.png'),
                    suri: require('./img/scan1_2.png')
                },
                {
                    text: '主页',
                    uri: require('./img/home2_1.png'),
                    suri: require('./img/home2_2.png')
                },
                {
                    text: '个人中心',
                    uri: require('./img/person3_1.png'),
                    suri: require('./img/person3_2.png')
                }
            ],
            currentComponent: props.current,
            currentHeader: props.currentText
        };
    }

    selectComponent(index){
        if(this.state.currentComponent !== index){
            this.setState({
                currentComponent: index,
                currentHeader: this.state.data[index].text
            });
        }
    }
    /*对外提供切换页面方法*/
    selectfn(index){
        this.setState({
            currentComponent: index,
            currentHeader: this.state.data[index].text
        });
    }
    /*渲染*/
    render(){
        return (
            <View style={styles.wrap}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>
                        {this.state.currentHeader}
                    </Text>
                </View>
                <View style={styles.view}>
                    {
                        [
                            <QR selectComponent={this.selectfn.bind(this)} />,
                            <Home selectComponent={this.selectfn.bind(this)} />,
                            <User selectComponent={this.selectfn.bind(this)} />,
                        ].map((value,key)=>
                            <View style={[styles.viewli,(key==this.state.currentComponent)&&{left:-this.state.currentComponent*styles.viewli.width}]} key={key}>
                                {value}
                            </View>
                        )
                    }
                </View>
                <View style={styles.navbar}>
                    {
                        this.state.data.map((value,key)=>
                            <View style={styles.navli} key={key} onTouchEnd={this.selectComponent.bind(this,key)}>
                                <Image style={styles.navliimage} source={key==this.state.currentComponent?value.suri:value.uri}/>
                            </View>
                        )
                    }
                </View>
            </View>
        );
    }
};