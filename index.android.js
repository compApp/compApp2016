/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import Index from './App/Views/Index';

import { AppRegistry } from 'react-native';

class comApp extends Component {
  render() {
    return (
        <Index />
    );
  }
}

AppRegistry.registerComponent('comApp', () => comApp);