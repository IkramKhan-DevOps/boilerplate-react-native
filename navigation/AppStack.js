import DashboardScreen from "../screens/Dashboard";
import ProfileScreen from "../screens/ProfileScreen";
import PasswordChangeScreen from "../screens/PasswordChangeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: true}}/>
            <Stack.Screen name="PasswordChange" component={PasswordChangeScreen}
                          options={{headerShown: true}}/>
            <Stack.Screen name="History" component={HistoryScreen} options={{headerShown: true}}/>
        </Stack.Navigator>
    )
}

export default AppStack;