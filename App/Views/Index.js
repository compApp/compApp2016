/**
 * Created by iRubb on 2016/7/4.
 */
'use strict';

import React, { Component } from 'react';
import Nav from '../Components/Nav/Nav';

import QR from './QRScan/QR';
import User from './UserManager/User';
import Home from './Home/Home';

export default class Index extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {}
    }
    // 渲染
    render(){
        return (
            <Nav />
        );
    }
};