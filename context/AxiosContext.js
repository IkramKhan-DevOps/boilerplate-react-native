import React, {createContext, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AxiosContext = createContext();
const {Provider} = AxiosContext;

function AxiosProvider({children}) {
    const authContext = useContext(AuthContext);
    const authAxios = axios.create({
        baseURL: 'https://marktestapp.pythonanywhere.com/api',
    });

    const publicAxios = axios.create({
        baseURL: 'https://marktestapp.pythonanywhere.com/api',
    });

    authAxios.interceptors.request.use(
        config => {
            if (!config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${AsyncStorage.getItem('accessToken')}`;
            }

            return config;
        },
        error => {
            return Promise.reject(error);
        },
    );

    return (
        <Provider
            value={{
                authAxios,
                publicAxios,
            }}>
            {children}
        </Provider>
    );
};

export {AxiosContext, AxiosProvider};