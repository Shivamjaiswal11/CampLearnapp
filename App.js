import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/Navigation/AppNavigator'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { DevToolsBubble } from 'react-native-react-query-devtools';

const App = () => {

  // Create a client
const queryClient = new QueryClient()
  return (
    <View style={{flex:1}}>
        <QueryClientProvider client={queryClient}>
        <AppNavigator/>
        <DevToolsBubble />
        </QueryClientProvider>
  
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})