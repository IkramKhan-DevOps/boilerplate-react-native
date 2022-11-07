import React, {Component} from "react";
import Login from "./screens/Login";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import DashboardScreen from "./Dashboard";

const Stack = createNativeStackNavigator();


function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Dashboard" component={DashboardScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
