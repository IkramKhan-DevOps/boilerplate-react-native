import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import DashboardScreen from "../screens/Dashboard";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PasswordChangeScreen from "../screens/PasswordChangeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import React, {useContext, useRef, useState} from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {AuthContext} from "../context/AuthContext";
import Spinner from "../components/Spinner";
import AppStack from "./AppStack";

const Stack = createNativeStackNavigator();

function AppNav() {
    const {isLoading, userToken} = useContext(AuthContext)
    const [refUserToken, setRefUserToken] = useState(userToken)
    const [refIsLoading, setRefIsLoading] = useState(isLoading)

    if (refIsLoading) {
        return <Spinner/>
    }

    return (
        <NavigationContainer>
            {refUserToken === null ? <AuthStack/> : <AppStack/>}
        </NavigationContainer>
    )
}

export default AppNav;