import * as React from 'react';
import {View, Text } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Lists = ({name,username,password}) => {
  return (
    <ListItem thumbnail>
      <Left>
        <Icon 
        name="card-account-details"
        size={25}
        />
      </Left>
      <Body>
        <Text>{name}</Text>
        <Text note numberOfLines={1}>{username}</Text>
        <Text note numberOfLines={1}>{password}</Text>
      </Body>
      <Right>
      <Button transparent>
        <Text>Delete</Text>
      </Button>
      </Right>
    </ListItem>
  );
}

export default Lists;