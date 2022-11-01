import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { 
  ActivityIndicator, Button, Image, ImageBackground, StyleSheet, 
  Text, TextInput, TouchableOpacity, View , Alert
} from 'react-native';
import { AsyncStorage } from 'react-native';
import LoginApp from './Login'
import DashboardScreen from "./Dashboard";

class App extends Component {

  render(){ 
    return (
      <DashboardScreen/>
    );
  };
}


export default App;