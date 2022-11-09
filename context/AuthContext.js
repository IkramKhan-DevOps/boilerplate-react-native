import {createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState("")

    const login = () => {
        setUserToken("token from MARK!")
        setIsLoading(false)
    }

    const logout = () => {
        setUserToken(null)
        setIsLoading(true)
    }

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}