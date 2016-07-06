/**
 * Created by iRubb on 2016/7/5.
 */

import React, {Component} from 'react';
import { styles } from './HomeCss';

import { View, Text, Image, ScrollView, StatusBar } from 'react-native';
import TopScreen from '../../Components/TopScreen/TopScreen';

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

            <ScrollView style={styles.main}>
                <StatusBar
                    backgroundColor="#fb4747"
                    barStyle="light-content"
                    setTranslucent={true}
                />
                <View style={styles.images}>
                    <TopScreen />
                </View>
                <View>
                    <View style={styles.gridRows}>
                        <View style={styles.gridItem}>
                            <Image style={styles.gridItemImg} source={require('./img/phone.png')}></Image>
                            <Text style={styles.gridItemText}>通讯录</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image style={styles.gridItemImg} source={require('./img/airplane.png')}></Image>
                            <Text style={styles.gridItemText}>交通</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image style={styles.gridItemImg} source={require('./img/map.png')}></Image>
                            <Text style={styles.gridItemText}>地图</Text>
                        </View>
                    </View>
                    <View style={styles.gridRows}>
                        <View style={styles.gridItem}>
                            <Image style={styles.gridItemImg} source={require('./img/notify.png')}></Image>
                            <Text style={styles.gridItemText}>通知公告</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image style={styles.gridItemImg} source={require('./img/record.png')}></Image>
                            <Text style={styles.gridItemText}>记录</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image style={styles.gridItemImg} source={require('./img/vote.png')}></Image>
                            <Text style={styles.gridItemText}>投票</Text>
                        </View>
                    </View>
                    <View style={styles.gridRows}>
                        <View style={styles.gridItem}>
                            <Image style={styles.gridItemImg} source={require('./img/flower.png')}></Image>
                            <Text style={styles.gridItemText}>婚讯</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image style={styles.gridItemImg} source={require('./img/meal.png')}></Image>
                            <Text style={styles.gridItemText}>菜肴</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image style={styles.gridItemImg} source={require('./img/sport.png')}></Image>
                            <Text style={styles.gridItemText}>健身</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }

};