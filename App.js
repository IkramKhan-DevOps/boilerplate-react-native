import React, {useCallback, useContext, useEffect, useState} from "react";
import LoginScreen from "./screens/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import DashboardScreen from "./Dashboard";
import ProfileScreen from "./screens/ProfileScreen";
import PasswordChangeScreen from "./screens/PasswordChangeScreen";
import HistoryScreen from "./screens/HistoryScreen";
import * as Keychain from "react-native-keychain";
import {AuthContext, AuthProvider} from "./context/AuthContext";
import Spinner from "./components/Spinner";
import {AxiosProvider} from "./context/AxioContext";

const Stack = createNativeStackNavigator();


const App = () => {

    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState('loading');

    console.log("App started")

    const loadJWT = useCallback(async () => {
        try {
            const value = await Keychain.getGenericPassword();
            const jwt = JSON.parse(value.password);

            authContext.setAuthState({
                accessToken: jwt.accessToken || null,
                refreshToken: jwt.refreshToken || null,
                authenticated: jwt.accessToken !== null,
            });
            setStatus('success');
        } catch (error) {
            setStatus('error');
            console.log(`Keychain Error: ${error.message}`);
            authContext.setAuthState({
                accessToken: null,
                refreshToken: null,
                authenticated: false,
            });
        }
    }, []);

    useEffect(() => {
        loadJWT();
    }, [loadJWT]);

    if (status === 'loading') {
        return <Spinner/>;
    }

    if (authContext?.authState?.authenticated === false) {
        return <LoginScreen/>;
    } else {
        return (
            <AuthProvider>
                <AxiosProvider>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Login">
                            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                            <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown: false}}/>
                            <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: true}}/>
                            <Stack.Screen name="PasswordChange" component={PasswordChangeScreen}
                                          options={{headerShown: true}}/>
                            <Stack.Screen name="History" component={HistoryScreen} options={{headerShown: true}}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </AxiosProvider>
            </AuthProvider>
        )
    }
}

export default App;
