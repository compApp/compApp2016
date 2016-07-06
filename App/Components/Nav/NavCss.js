/**
 * Created by iRubb on 2016/7/5.
 */
'use strict';

import React, { Platform } from 'react-native';
import PixelRatio from 'PixelRatio';
import Dimensions from 'Dimensions';

let { width, height } = Dimensions.get('window');
let PR = PixelRatio.get();

export const styles = {
    wrap: {
        flex: 1,
        flexDirection: 'column'
    },
    view: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    viewli: {
        width: width
    },
    navbar: {
        height: 98,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderTopColor: '#b2b2b2',
        borderTopWidth: 1
    },
    navli: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navliimage: {
        width: 45,
        height: 45
    },
    header: {
        height: 88,
        backgroundColor: '#fb4747',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headertext: {
        color: '#fff',
        fontSize: 28
    }
};

