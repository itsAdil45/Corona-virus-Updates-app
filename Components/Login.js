import { View, Text, TextInput, Button, StyleSheet , Image} from 'react-native'
import React, {useState} from 'react'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const SignUpBtnAction =()=>{
        navigation.navigate("SignUp")

    }
    const LoginBtnAction = ()=>{
        axios
          .post('https://usman-recipes.herokuapp.com/api/auth', {
            email: email,
            password: password,
          })
          .then(function (response) {
            // handle success
            // alert(JSON.stringify(response.data));
            // console.log(name);
            // console.log(email);
            // console.log(password);
            navigation.navigate("Home")
    
          })
          .catch(function (error) {
            // handle error
         alert(error)
          });
      }
  return (
    <View style={{flex:1 , position:'relative'}}>
    <View style={styles.imgWrapper}>
    <Image 
    style={styles.logo}  
    source={require('../images/logo_2.jpg')}   
    />
    </View >
    <View style={styles.inputs}>

    <TextInput style={styles.inputsFields} placeholder='Enter Email' value={email} on onChangeText={(value) => { setEmail(value) }} />
    <TextInput style={styles.inputsFields} placeholder='Enter Password' value={password} on onChangeText={(value) => { setPassword(value) }} />
    </View>
    <View style={{flex:0.35 ,alignItems:'center', marginTop:50}}>

    <TouchableOpacity style={styles.btn}  onPress={LoginBtnAction}><Text style={{color:"white", textAlign:"center" ,fontSize:20}}>LOGIN</Text></TouchableOpacity>
    <TouchableOpacity style={styles.Signupbtn}  onPress={SignUpBtnAction}><Text style={{color:"white", textAlign:"center" ,fontSize:20}}>Sign Up</Text></TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    imgWrapper:{
  
  flex:0.40,
  alignItems:'center',
  justifyContent:"center",
  
  position:"relative",
  left:100,
  width:"50%",
  height:"50%"
},

logo:{
width:"100%",
height:"100%",
margin:"10%"
},
inputs:{
flex:0.30,
margin:10,
width:"100%",
marginBottom:10
}
,

inputsFields:{
borderBottomWidth:1.5,
borderBottomColor:"grey",
marginBottom:5,
width:"100%",
fontSize:20,
textAlign:'center'
},

btn:{
width:"100%",
backgroundColor:"blue",
padding:15,
borderRadius:5
},
Signupbtn:{
    width:"100%",
    backgroundColor:"green",
    padding:15,
    borderRadius:5,
    marginTop:10
  }
})