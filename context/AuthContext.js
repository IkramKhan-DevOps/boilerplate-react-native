import {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {baseUrl, loginUrl} from "../config/API";
import {Alert} from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [accessToken, setAccessToken] = useState(null)
    const [refreshToken, setRefreshToken] = useState(null)
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)


    const login = (email, password) => {

        setIsLoading(true)
        axios.post(loginUrl, {email, password}).then(r => {

            setAccessToken(r.data.tokens.access)
            setRefreshToken(r.data.tokens.refresh)
            setUsername(r.data.username)
            setEmail(r.data.email)

            AsyncStorage.setItem("accessToken", r.data.tokens.access).then(r => console.log("access token created"))
            AsyncStorage.setItem("refreshToken", r.data.tokens.refresh).then(r => console.log("refresh token created"))
            AsyncStorage.setItem("username", r.data.username).then(r => console.log("username created"))
            AsyncStorage.setItem("email", r.data.email).then(r => console.log("email created"))

        }).catch(e => {
            console.log(e)
            console.log(e.response.data)
            Alert.alert("Login Failed", "Invalid authentication credentials")

            destroyUser();
        });
        setIsLoading(false)
    }

    const logout = () => {
        setIsLoading(true)
        destroyUser()
        setIsLoading(false)
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true)

            let _accessToken = await AsyncStorage.getItem("accessToken")
            let _refreshToken = await AsyncStorage.getItem("refreshToken")
            let _email = await AsyncStorage.getItem("email")
            let _username = await AsyncStorage.getItem("username")

            if (_accessToken) {
                setAccessToken(_accessToken)
                setRefreshToken(_refreshToken)
                setUsername(_username)
                setEmail(_email)
            }
            console.log(_accessToken)

            setIsLoading(false)
        } catch (error) {
            console.log(`Is logged in error: ${error}`)
        }
    }

    function destroyUser() {
        setUsername(null)
        setEmail(null)
        setAccessToken(null)
        setRefreshToken(null)

        AsyncStorage.removeItem("accessToken").then(r => console.log("token destroyed"))
        AsyncStorage.removeItem("refreshToken").then(r => console.log("token destroyed"))
        AsyncStorage.removeItem("username").then(r => console.log("username destroyed"))
        AsyncStorage.removeItem("email").then(r => console.log("email destroyed"))
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{login, logout, isLoading, accessToken, refreshToken, username, email}}>
            {children}
        </AuthContext.Provider>
    )
}