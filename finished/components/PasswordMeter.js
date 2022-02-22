import * as React from 'react';
import {Component} from 'react';
import {View, Text} from 'react-native';
import {Platform, StyleSheet, Animated} from 'react-native';
import zxcvbn from 'zxcvbn';
export default class PasswordMeter extends Component {
  render() {
    return (
    <View>
     <View style={{
       backgroundColor:'#fff',
       borderWidth:1,
       borderColor:'rgb(36,127,30)',
       width:'80%',
       height:50,
       marginLeft:30,
       marginTop:20,
       borderRadius:80,
       position:'relative'}}
       >
       <Text></Text>
      </View>
      <View style={{
        position:'absolute',
        top:15,
        // right:0,
        left:15,
        backgroundColor:'rgb(43,191,14)',
        borderRadius:80,
        width:'20%',
        height:30,
        
      }}>
      <Text></Text>
      </View>
    </View>
    );
  }
}