import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../Components/SignUp';
import Home from "../Components/Home"
import Login from '../Components/Login';
const stack = createStackNavigator();
export default function Stack() {
  return (
    <stack.Navigator initialRouteName='Login'>
    <stack.Screen name='Home' component={Home}/>
    <stack.Screen name='SignUp' component={SignUp}/>
    <stack.Screen name='Login' component={Login}/>
    </stack.Navigator>
  )
}