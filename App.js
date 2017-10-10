/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header,Input } from './src/components/common';
import LoginForm from './src/components/LoginForm';




class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyA3DR1UvE81WmvWVLTj45yCIbfiGP33vr0",
      authDomain: "auth-c2883.firebaseapp.com",
      databaseURL: "https://auth-c2883.firebaseio.com",
      projectId: "auth-c2883",
      storageBucket: "auth-c2883.appspot.com",
      messagingSenderId: "765201490246"

    });
  }

  render(){
    return(
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>




    )
  }
}

export default App;
