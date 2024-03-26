import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TodoListScreen from '../screens/TodoListScreen';
import IntroScreen from '../screens/IntroScreen';
import TestScreen from '../screens/TestScreen';

const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator  
            
            >
                <Stack.Screen name="Intro" component={IntroScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Todo" component={TodoListScreen} />
                <Stack.Screen name="Test" component={TestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})