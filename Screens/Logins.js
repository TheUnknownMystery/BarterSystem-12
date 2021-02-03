import * as React from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import firebase from 'firebase'
import db from "../config"
export default class login extends React.Component {

 constructor() {
  super()

  this.state = {

   Email: '',
   Password: ''

  }
 }

 UserSignIn = async (Email, Password) => {

  if (Email && Password) {

   try {

    const response = await firebase.auth().createUserWithEmailAndPassword(Email, Password)

     .then((response) => {


      return alert("Account created")

     })
   }

   catch (error) {

    console.log("error: " + error)

    switch (error.code) {

     case 'auth/invalid-email':
      alert("Please enter you Email properly")
      break


    }
   }
  }
 }

 UserLogin = async (Email, password) => {

  if (Email && password) {

   try {

    const response = await firebase.auth().signInWithEmailAndPassword(Email, password)

    if (response) {

     alert("Login Sucessful")
     this.props.navigation.navigate()

    }
   }

   catch (error) {

    switch (error.code) {

     case 'auth/user-not-found':
     alert("sorry wrong user name")
     break;

     case 'auth/invalid-email':
      alert("Sorry Please check the entered Email/Password again")
    }
   }
  }
 };

 render() {
  return (

   <View style={{ backgroundColor: 'lightblue', paddingBottom: 160 }}>

    <View style={{ backgroundColor: 'white', borderRadius: 7, borderWidth: 0, marginTop: 140, paddingTop: 500, marginLeft: 30, marginRight: 30, marginLeft: 20 }}>

     <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: -500, fontSize: 40, color: 'orange' }}>Login Foarm</Text>

     <TextInput

      placeholder='abc@example.com'
      style={styles.TextInputStyle}
      keyboardType='email-address'

      onChangeText={(text) => {

       this.setState({ Email: text })

      }}
     />

     <TextInput

      placeholder="Password"
      style={styles.TextInputStyle}
      secureTextEntry={true}

      onChangeText={(text) => {

       this.setState({ Password: text })


      }}
     />

     <TouchableOpacity style={styles.loginbutton} onPress={() => {

      this.UserSignIn(this.state.Email, this.state.Password)

     }}>

      <Text style={{ alignSelf: 'center' }}>SignIn</Text>



     </TouchableOpacity>
     <TouchableOpacity style={styles.loginbutton} onPress={() => {

      this.UserLogin(this.state.Email, this.state.Password)


     }}>

      <Text style={{ alignSelf: 'center', fontWeight: 'normal' }}>Login</Text>

     </TouchableOpacity>
    </View>

   </View>

  )
 }
}
const styles = StyleSheet.create({

 TextInputStyle: {

  alignSelf: 'center',
  borderWidth: 1.5,
  marginTop: 40,
  width: '90%',
  borderRadius: 2,
  height: 40
 },

 loginbutton: {

  alignSelf: 'center',
  justifyContent: 'center',
  width: 91,
  height: 33,
  backgroundColor: 'grey',
  marginTop: 30,
  borderRadius: 5,
  borderWidth: 3,
  borderColor: 'lightblue'


 }


})