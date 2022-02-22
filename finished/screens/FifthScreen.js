import React, { useState } from 'react';
import {Platform, StyleSheet, View, Animated, TextInput, SafeAreaView } from 'react-native';import { Container, Header, Content, Item, Input, List, ListItem, Text, Title } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PassMeter from "react-native-passmeter";
const MAX_LEN = 20,
  MIN_LEN = 4,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];
const FifthPage = () => { 
    const [password, setPassword] = useState(""); 
    return (
      <Container>
      <Icon
          name="chevron-right"
          color={'rgb(43,191,14)'}
          size={50}
          style={{marginTop:10}}
          />
          <Text style={styles.textHeader}>Check Your Password Strength</Text>
        <Content style={{backgroundColor:'rgb(233,233,233)'}}>
           <SafeAreaView style={styles.container}>
            <TextInput 
            style={styles.input}
            maxLength={15}
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
            placeholder='Your Password Here'
            />
            <PassMeter
            showLabels
            password={password}
            maxLength={MAX_LEN}
            minLength={MIN_LEN}
            labels={PASS_LABELS}
            />
             <PassMeter
            showLabels
            password={password}
            maxLength={MAX_LEN}
            minLength={MIN_LEN}
            labels={PASS_LABELS}
            />
             <PassMeter
            showLabels
            password={password}
            maxLength={MAX_LEN}
            minLength={MIN_LEN}
            labels={PASS_LABELS}
            />
           </SafeAreaView>
          <View style={styles.passFeed}>
            <Content style={{width:'80%',borderRadius:100,marginLeft:30,marginTop:20}}>
              <List 
              style={{backgroundColor:'#fff',marginTop:40}}
              >
                <ListItem itemHeader first style={{marginTop:10}}>
                  <Text>A good password must be</Text>
                </ListItem>
                <ListItem >
                  <Text>At least 1 Upper Case characters</Text>
                </ListItem>
                <ListItem>
                  <Text>At least 1 lower Case characters</Text>
                </ListItem>
                <ListItem>
                  <Text>At least 1 number and special symbols</Text>
                </ListItem>
                <ListItem>
                  <Text>Combination of alphanumeric Symbols</Text>
                </ListItem>
              </List>
            </Content>
          </View>
        </Content>
      </Container>
    );
}
export default FifthPage;
const styles = StyleSheet.create({ 
   textHeader: {
    backgroundColor:'none',
    borderRadius:40,
    position:"absolute",
    top:5,
    left:50,
    right:0,
    fontSize:20,
    fontWeight:'bold',
    marginTop:15
  },
  container: {
    flex: 1, 
    justifyContent: "center" 
  },
  input: {
    marginTop:55,
    padding:15,
    borderRadius: 80,
    marginBottom: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  }
});  