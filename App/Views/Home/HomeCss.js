/**
 * Created by iRubb on 2016/7/6.
 */
'use strict';

import { Platform, Image } from 'react-native';
import Dimensions from 'Dimensions';
import PixelRatio from 'PixelRatio';

let { width, height } = Dimensions.get('window');
let PR = PixelRatio.get();

export const styles = {
    main: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#ecf0f1'
    },
    images: {
        width: width
    },
    imageItem: {
        width: width
    },
    gridRows: {
        width: width,
        height: (width/3 + 10),
        flexDirection: 'row'
    },
    gridItem: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#a9b7b7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItemImg: {
        marginBottom: 10,
        width: (width/12 + 10),
        resizeMode:Image.resizeMode.contain
    },
    gridItemText: {
        fontSize: 24,
        marginTop: 24
    }
}