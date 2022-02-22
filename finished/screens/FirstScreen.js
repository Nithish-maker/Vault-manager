import * as React from 'react';
import {useState} from 'react';
import Clipboard from '@react-native-community/clipboard';
import { useClipboard } from '@react-native-community/clipboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
 Button,
 View, 
 Text, 
 CheckBox,
 SafeAreaView, 
 ScrollView,
 Slider,
 TouchableOpacity,
 StyleSheet } from 'react-native';
import {
  upperCaseCharList,
  lowerCaseCharList,
  numbersList,
  symbolsList
} from '../components/characters';
const FirstPage = ({navigation}) => {
  const [password,setPassword] = useState('');
  const [copiedText,setCopiedText] = useState('');
  const [length,setLength] = useState(7);
  const [isUpperCase,setIsUpperCase] = useState(false);
  const [isLowerCase,setIsLowerCase] = useState(false);
  const [isNumber,setIsNumber] = useState(true);
  const [isSymbol,setIsSymbol] = useState(false);
  
  const generatePassword = () => {
      let charList = '';
      if(isUpperCase) {
        charList = charList + upperCaseCharList;
      }
      if(isLowerCase) {
        charList = charList + lowerCaseCharList;
      }
      if(isSymbol) {
        charList = charList + symbolsList;
      }
      if(isNumber) {
        charList = charList + numbersList;
      }
      // alert('szvbfnghhj')
      setPassword(randomlyGenerate(charList));
  }
    const randomlyGenerate = (arrList) => {
      let psswd = "";
      for(let i = 0; i < length - 1; i++) {
        let randomIndex =  Math.round(Math.random() * arrList.length);
        psswd+= arrList[randomIndex];
      }
      return psswd;
  }
  const clearInput = () => {
    return (
      setPassword('')
    );
  }
  const getClipBoardContent = () => {
    const clipContent = Clipboard.getString();
    alert(clipContent);
  }
  const dummyContent = () => {
    alert('Copied');
  }
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
            position:"relative",
            marginTop:40,
            }}>
          <Icon
          name="chevron-right"
          color={'rgb(43,191,14)'}
          size={50}
          />
          <Text style={styles.textHeader}>Generate Password</Text>
          </View>
          <View style={{marginLeft:10,marginTop:25}}>
            <Text style={styles.passwordText}>{password}</Text>
            <Icon 
              onPress={() => dummyContent()}
              name="clipboard"
              color="rgb(255,250,250)"
              size={30}
              style={{
              position:"absolute",
              top:10,
              right:20
              }}
              />
            <View style={styles.ccButton}>
            <Button 
             title="clear"
             color='rgb(43,191,14)'
             onPress={() => clearInput()}
             style={{borderRadius:80}}
             />
             </View>
          </View>
          <View style={styles.container}>
          <Slider
            style={styles.slider}
            value={length}
            thumbTintColor={'rgb(43,191,14)'}
            minimumValue={1}
            maximumValue={15}
            onValueChange={value => setLength(value)}
          />
          <Text style={styles.sliderText}>
            Length {Math.floor(length)}
          </Text>
          </View>
          <View style={styles.inputContainer} >
            <Text style={styles.inputText}>
            Include UpperCase
            </Text>
            <CheckBox
            style={{
            position:"absolute",
            top:15,
            right:15,
            }}
            value={isUpperCase}
            onValueChange={() => setIsUpperCase(!isUpperCase)}
            />
          </View>
          <View style={styles.inputContainer} >
            <Text style={styles.inputText}>
            Include lowerCase
            </Text>
            <CheckBox
            style={{
            position:"absolute",
            top:15,
            right:15,
            }}
            value={isLowerCase}
            onValueChange={() => setIsLowerCase(!isLowerCase)}
            />
          </View>
             <View style={styles.inputContainer} >
            <Text style={styles.inputText}>
            Include Numbers
            </Text>
            <CheckBox
            style={{
            position:"absolute",
            top:15,
            right:15,
            }}
            value={isNumber}
            onValueChange={() => setIsNumber(!isNumber)}
            />
          </View>
             <View style={styles.inputContainer} >
            <Text style={styles.inputText}>
            Include symbols
            </Text>
            <CheckBox
            style={{
            position:"absolute",
            top:15,
            right:15,
            }}
            value={isSymbol}
            onValueChange={() => setIsSymbol(!isSymbol)}
            />
          </View>
          <View style={styles.button}>
          <Button 
          title="Generate" 
          color='rgb(43,191,14)'
          onPress={() =>  generatePassword() }
          />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );     
};

export default FirstPage

const styles = StyleSheet.create({
    textHeader: {
    // backgroundColor:'rgb(22,149,20)',
    borderRadius:40,
    position:"absolute",
    top:5,
    left:50,
    right:0,
    fontSize:30,
    fontWeight:'bold'
  },
   passwordText:{
    color:'rgb(255,255,255)',
    marginTop:0,
    width:window.width - 20,
    fontWeight:'500',
    backgroundColor:'rgb(43,191,14)',
    borderRadius:40,
    padding:10,
    fontSize:20,
  },
  slider:{
    marginTop:30,
  },
  sliderText : {
    textAlign:"center",
    color:'#fff',
    fontSize:20,
    padding:10,
    width:150,
    backgroundColor:'rgb(43,191,14)',
    borderRadius:30,
    marginTop:20,
    marginLeft:130,
    letterSpacing:2,
  },
  inputContainer: {
    marginTop:30,
    position:"relative",
    width:400,
    marginLeft:10,
  },
  inputText : {
    backgroundColor:'rgb(43,191,14)',
    filter:'blur(10)',
    width:window.width -70,
    padding:20,
    color:'#fff',
    letterSpacing:2,
    borderRadius:80,
  },
  button : {
    marginTop:30,
    marginLeft:130,
    width:150,
    borderRadius:80,
  },
   ccButton : {
    marginTop:30,
    marginLeft:140,
    width:120,
    borderRadius:30,
}
})