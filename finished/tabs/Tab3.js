import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import {art2018} from '../src/2018';
export default class CardShowcaseExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arts:art2018,
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Icon
                size={30}
                name="lock"
                />
                <Body style={{marginRight:40}}>
                  <Text>{this.state.arts[0].organisation}</Text>
                  <Text note>{`${this.state.arts[0].month} ${this.state.arts[0].date} ${this.state.arts[0].year}`}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image 
                source={{uri:this.state.arts[0].img}} 
                style={{height: 200, width:360, flex: 1, marginLeft:10}}/>
                <Text style={{marginTop:20, marginLeft:10, lineHeight:30}}>
                  {this.state.arts[0].description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon 
                  name="read"
                  size={20} 
                  />
                  <Text>Read More</Text>
                </Button>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                 <Icon
                size={30}
                name="lock"
                />
                <Body>
                  <Text>{this.state.arts[1].organisation}</Text>
                  <Text note>{`${this.state.arts[1].month} ${this.state.arts[1].date} ${this.state.arts[1].year}`}</Text>
                </Body>
              </Left>
            </CardItem>
             <CardItem>
              <Body>
                <Image 
                source={{uri:this.state.arts[1].img}} 
                style={{height: 200, width:360, flex: 1, marginLeft:10}}
                />
                <Text style={{marginTop:20, marginLeft:10, lineHeight:30}}>
                 {this.state.arts[1].description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon 
                  name="read"
                  size={20} 
                  />
                  <Text>Read More</Text>
                </Button>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                size={30}
                name="lock"
                />
                <Body>
                  <Text>{this.state.arts[2].organisation}</Text>
                  <Text note>{`${this.state.arts[2].month} ${this.state.arts[2].date} ${this.state.arts[2].year}`}</Text>
                </Body>
              </Left>
            </CardItem>

             <CardItem>
              <Body>
                <Image 
                source={{uri:this.state.arts[2].img}} 
                style={{height: 200, width:360, flex: 1, marginLeft:10}}/>
                <Text style={{marginTop:20, marginLeft:10, lineHeight:30}}>
                {this.state.arts[2].description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon 
                  name="read"
                  size={20} 
                  />
                  <Text>Read More</Text>
                </Button>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                size={30}
                name="lock"
                />
                <Body>
                  <Text>{this.state.arts[3].organisation}</Text>
                  <Text note>{`${this.state.arts[3].month} ${this.state.arts[3].date} ${this.state.arts[3].year}`}</Text>
                </Body>
              </Left>
            </CardItem>
             <CardItem>
              <Body>
                <Image 
                source={{uri:this.state.arts[3].img}} 
                style={{height: 200, width:360, flex: 1, marginLeft:10}}/>
                <Text style={{marginTop:20, marginLeft:10, lineHeight:30}}>
                {this.state.arts[3].description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}
                onPress={() => this.handleReadMore()}
                >
                  <Icon 
                  name="read"
                  size={20} 
                  />
                 <Text>Read More</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}