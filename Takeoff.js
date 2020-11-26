import React, {Component} from 'react';
import {StyleSheet,Text,Alert,TextInput, View,Dimensions} from 'react-native';
const window = Dimensions.get('window');
const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
 
export default class Takeoff extends Component {
 
  constructor(props) {
        super(props);
        this.state={
            review:'',
				}        
    }
 
   render() {
 
			return (
 
      <View style={styles.container}>
          <View style={{marginLeft:20, marginRight:20,marginTop:85}}>
          <Text style={{fontSize:20, fontWeight: 'bold',color:'#2b2829',alignSelf:'center'}}>Help Menu</Text> 
      </View>
        

        
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AB79B9',
  },
});


// Screen with counter when drone takes off and order is confirmed to be received