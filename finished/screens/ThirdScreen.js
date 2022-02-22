import * as React from 'react';
import { Component } from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import CardDetails from '../tabs/CardDetails';
import WebDetails from '../tabs/WebDetails';
import OtherDetails from '../tabs/OtherDetails';
export default class ThirdPage extends Component {
  render() {
    return (
      <Container>
        <Tabs tabBarUnderlineStyle="rgb(255,255,255)">
          <Tab 
          tabStyle={{backgroundColor:"rgb(43,191,14)"}}
          activeTabStyle={{backgroundColor:"rgb(43,191,14)"}}
          textStyle={{color:'#fff'}}
          activeTextStyle={{color:'#fff'}}
          heading="Card">
            <CardDetails />
          </Tab>
          <Tab 
          tabStyle={{backgroundColor:"rgb(43,191,14)"}}
          activeTabStyle={{backgroundColor:"rgb(43,191,14)"}}
          textStyle={{color:'#fff'}}
          activeTextStyle={{color:'#fff'}}
          heading="Web">
            <WebDetails />
          </Tab>
          <Tab 
          tabStyle={{backgroundColor:"rgb(43,191,14)"}}
          activeTabStyle={{backgroundColor:"rgb(43,191,14)"}}
          textStyle={{color:'#fff'}}
          activeTextStyle={{color:'#fff'}}
          heading="Other">
            <OtherDetails />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}