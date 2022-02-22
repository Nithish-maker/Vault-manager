import * as React from 'react';
import {useState} from 'react';
import {View, Text,TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, Modal, Pressable } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Form, Item, Input, Label } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionButton from 'react-native-action-button';
import Lists from '../components/Lists';
import uuid from 'react-native-uuid';
const CardDetails = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name,setAppName] = useState('');
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [details,setDetails] = useState([
    {
      id:1,
      name:"Instagram",
      username:"Nithish",
      password:"anonsurf03"
    },
    {
      id:2,
      name:"Telegram",
      username:"Rakesh",
      password:"p@55w0rd"
    }
  ])
  return (
       <Container>
        <Content>
          <List>
            {
              details.map((detail) => {
              return (
                <Lists 
                name={detail.name}
                username={detail.username}
                password={detail.password}
                />
              );
              })
            }
          </List>
          </Content>
          <View style={styles.centeredView}>
          <Modal
          style={styles.modalContent}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
          }}
          >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Container>
              <Content>
                <Form>
                  <Item stackedLabel>
                    <Label style={{width:300,marginTop:10}}>AppName</Label>
                    <TextInput
                    onChangeText={(name) => setAppName(name)}
                    style={styles.input}
                    />
                  </Item>
                  <Item stackedLabel>
                    <Label>UserName</Label>
                    <TextInput
                    onChangeText={(uname) => setUserName(uname)}
                    style={styles.input}
                    />
                  </Item>
                  <Item stackedLabel>
                    <Label>Password</Label>
                    <TextInput
                    onChangeText={(pwd) => setPassword(pwd)}
                    secureTextEntry
                    style={styles.input}
                    />
                  </Item>
                </Form>
              </Content>
              </Container>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => alert("Details added successfully")}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </View>
      <ActionButton buttonColor="rgb(43,191,14)">
      <ActionButton.Item buttonColor='rgb(43,191,14)' 
      style={styles.buttonOpen} 
      title="Add details" 
      onPress={() => setModalVisible(true)}
      >
      <Icon name="md-create" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      </ActionButton>
    </Container>
  );
}
export default CardDetails;

const styles = StyleSheet.create({
 modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  centeredView: {
    flex:1,
    justifyContent:"center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "white",
    width:350,
    height:400,
    borderRadius: 20,
    padding:10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    marginTop:5,
    marginBottom:30,
    borderRadius: 40,
    padding:10,
  },
  buttonOpen: {
    backgroundColor: "rgb(43,191,14)",
  },
  buttonClose: {
    backgroundColor: "rgb(43,191,14)",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    width:300,
    marginTop:20,
    height:20,
    borderBottomColor:'rgb(43,191,14)',
    borderBottomWidth:1
  },
});
