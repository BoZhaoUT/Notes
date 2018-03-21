import React from 'react'
import { Text, View, AppRegistry } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = () => {
  return (
    // {flex: 1} expands this component to fill the entire content area of the device
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  )
}

AppRegistry.registerComponent('albums', () => App)
