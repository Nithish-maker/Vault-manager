import * as React from 'react';
import {useState, useEffect } from 'react';
import {Button, View, Text, SafeAreaView, TextInput} from 'react-native';
import sha1 from 'js-sha1';
import axios from 'axios';
const FourthPage = ({navigation}) => {
  const [password,setPassword] = useState('password');
  const [hashes,setHashes] = useState([]);
  const [compromisedRnot,setCompromisedRnot] = useState(false);
  const [mesg,setMesg] = useState('');
  useEffect(() => {
    let sha = sha1(password).toUpperCase();
    let prefix = sha.substring(0,5);
    let suffix = sha.substring(5,sha.length);
    let req = "https://api.pwnedpasswords.com/range/" + prefix;
    axios.get(req)
    .then(res => {
    let hashes = res.split("\n");
    for(let i = 0; i < hashes.length; i++) {
      let hash = hashes[i];
      let h = hash.split(":");
      if(h[0] == suffix) {
        setCompromisedRnot(!compromisedRnot);
        setMesg(`Your password has been compromised for ${h[1]} times`);
      }
      else {
        setMesg('No breach Found');
      }
    }
   })
})
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <TextInput 
            style={styles.input}
            maxLength={15}
            secureTextEntry
            onChangeText={() => setCompromisedRnot(!compromisedRnot)}
            placeholder='Your Password Here'
        />
        <Text style={{marginTop:20,fontSize:20,fontWeight:'bold',textAlign:'center'}}>{compromisedRnot ? 'You have been compromised' : "No data breach found"}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FourthPage;

const styles = {
   input: {
    marginTop:55,
    padding:25,
    borderRadius: 80,
    marginBottom: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  }
}