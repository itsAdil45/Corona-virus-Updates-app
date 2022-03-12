import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Stack from './Navigations/Stack';
import { NavigationContainer } from '@react-navigation/native';
const App  =() => {


  return (
    <NavigationContainer >
    <Stack/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default App;