import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import React, {useContext, useRef, useState} from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {AuthContext} from "../context/AuthContext";
import AppStack from "./AppStack";
import Spinner from "../components/Spinner";

const Stack = createNativeStackNavigator();

function AppNav() {
    const {isLoading, accessToken} = useContext(AuthContext)

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <NavigationContainer>
            {accessToken === null ? (<AuthStack/>) : (<AppStack/>)}
        </NavigationContainer>
    )
}

export default AppNav;