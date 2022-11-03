import React, {Component} from "react";
import {StatusBar} from 'expo-status-bar';
import {
    ActivityIndicator, Button, Image, ImageBackground, StyleSheet,
    Text, TextInput, TouchableOpacity, View, Alert
} from 'react-native';
import {AsyncStorage} from 'react-native';
import LoginApp from './Login'
import DashboardScreen from "./Dashboard";
import HistoryScreen from "./screens/HistoryScreen";
import DeliveryDetailScreen from "./screens/DeliveryDetailScreen";
import Untitled1 from "./screens/TempScreen";

class App extends Component {

    render() {
        return (
            // <LoginApp/>
            // <DashboardScreen/>
            <Untitled1/>
            // <HistoryScreen/>
            // <DeliveryDetailScreen/>
        );
    };
}


export default App;