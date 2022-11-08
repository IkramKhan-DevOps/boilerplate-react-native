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
                config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
            }

            return config;
        },
        error => {
            return Promise.reject(error);
        },
    );

    const refreshAuthLogic = failedRequest => {
        const data = {
            refresh: authContext.authState.refreshToken,
        };

        const options = {
            method: 'POST',
            data,
            url: 'https://marktestapp.pythonanywhere.com/auth/token/refresh/',
        };

        return axios(options)
            .then(async tokenRefreshResponse => {
                failedRequest.response.config.headers.Authorization =
                    'Bearer ' + tokenRefreshResponse.data.accessToken;

                authContext.setAuthState({
                    ...authContext.authState,
                    accessToken: tokenRefreshResponse.data.access,
                });
                
                await AsyncStorage.setItem('access', tokenRefreshResponse.data.accessToken)
                await AsyncStorage.setItem('refresh', authContext.authState.refreshToken)

                return Promise.resolve();
            })
            .catch(e => {
                authContext.setAuthState({
                    accessToken: null,
                    refreshToken: null,
                });
            });
    };

    createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

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