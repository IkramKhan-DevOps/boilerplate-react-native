import React, {Component} from "react";
import LoginScreen from "./screens/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import DashboardScreen from "./Dashboard";
import ProfileScreen from "./screens/ProfileScreen";
import PasswordChangeScreen from "./screens/PasswordChangeScreen";
import HistoryScreen from "./screens/HistoryScreen";

const Stack = createNativeStackNavigator();


function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: true}}/>
                <Stack.Screen name="PasswordChange" component={PasswordChangeScreen} options={{headerShown: true}}/>
                <Stack.Screen name="History" component={HistoryScreen} options={{headerShown: true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
