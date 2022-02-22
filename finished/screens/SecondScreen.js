import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from '../tabs/Tab1';
import Tab2 from '../tabs/Tab2';
import Tab3 from '../tabs/Tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs
        tabBarUnderlineStyle="rgb(255,255,255)">
          <Tab
          tabStyle={{backgroundColor:"rgb(43,191,14)"}}
          activeTabStyle={{backgroundColor:"rgb(43,191,14)"}}
          textStyle={{color:'#fff'}}
          activeTextStyle={{color:'#fff'}}
          heading="2020">
            <Tab1 />
          </Tab>
          <Tab 
          tabStyle={{backgroundColor:"rgb(43,191,14)"}}
          activeTabStyle={{backgroundColor:"rgb(43,191,14)"}}
          textStyle={{color:'#fff'}}
          activeTextStyle={{color:'#fff'}}
          heading="2019">
            <Tab2 />
          </Tab>
          <Tab 
          tabStyle={{backgroundColor:"rgb(43,191,14)"}}
          activeTabStyle={{backgroundColor:"rgb(43,191,14)"}}
          textStyle={{color:'#fff'}}
          activeTextStyle={{color:'#fff'}}
          heading="2018">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}