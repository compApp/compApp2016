/**
 * Created by iRubb on 2016/7/6.
 */
'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
} from 'react-native';

import ViewPager from 'react-native-viewpager';
//var ViewPager = require('./ViewPager');
var deviceWidth = Dimensions.get('window').width;

var IMGS = [
    require('./img/cover0.jpg'),
    require('./img/cover1.jpg'),
    require('./img/cover2.jpg'),
    require('./img/cover3.jpg'),
    require('./img/cover4.jpg')
];

var TopScreen = React.createClass({
    getInitialState: function() {
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        return {
            dataSource: dataSource.cloneWithPages(IMGS),
        };
    },

    render: function() {
        return (
            <ViewPager
                style={this.props.style}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={true}/>
        );
    },

    _renderPage: function( data: Object, pageID: string){
        return (
            <Image
                source={data}
                style={styles.page} />
        );
    }
})

var styles = StyleSheet.create({
    page: {
        width: deviceWidth,
        height: deviceWidth/2,
        resizeMode:Image.resizeMode.contain,
    },
});

module.exports = TopScreen;