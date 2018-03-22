import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  constructor() {
    super()
  }
  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyAfKJ5oPVM1JG7F-1nJK6GaG_djbhE47nw',
  //     authDomain: 'authentication-b5e8f.firebaseapp.com',
  //     databaseURL: 'https://authentication-b5e8f.firebaseio.com',
  //     projectId: 'authentication-b5e8f',
  //     storageBucket: 'authentication-b5e8f.appspot.com',
  //     messagingSenderId: '961929583770'
  //   })
  // }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
      </View>
    )
  }
}

export default App
