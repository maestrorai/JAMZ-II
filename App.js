import React, {Component} from 'react';
import {Platform, StyleSheet,Dimensions, Text, View,Alert,StatusBar,PermissionsAndroid} from 'react-native';
const { width } = Dimensions.get('window');
// import { SafeAreaProvider } from 'react-native-safe-area-context';
//import SafeAreaView from 'react-native-safe-area-view';
import AppNavigator from './Navigator';
const GLOBAL = require('./Global');

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        gotNotif:0,
        isConnected:false,
        netalert : 0,
      };
    }


    componentDidMount(){

    }

  render() {
    return (
         <AppNavigator/>
     
    );
  }
}


const styles = StyleSheet.create({
});
