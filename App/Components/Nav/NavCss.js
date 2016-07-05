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
        height: 80,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderTopColor: '#b2b2b2',
        borderTopWidth: 1/PR
    },
    navli: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navlitxt: {
        color: '#666',
        fontSize: 12,

    },
    navlitxtcurrent: {
        color: '#ff6600'
    },
    navliimage: {
        width: 45,
        height: 45
    }
};
