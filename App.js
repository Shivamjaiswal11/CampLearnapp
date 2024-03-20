import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import TodoListScreen from './src/screens/TodoListScreen'

const App = () => {
  return (
    <View style={{flex:1}}>
      <TodoListScreen/>
      {/* <HomeScreen/> */}
    
    </View>
  )
}

export default App

const styles = StyleSheet.create({})