import AsyncStorage from "@react-native-async-storage/async-storage";

export const baseUrl = "https://marktestapp.pythonanywhere.com/api/"
export const loginUrl = `${baseUrl}auth/rider/login/`
export const deliveryUrl = `${baseUrl}my/delivery/`
export const profileUrl = `${baseUrl}my/profile/`
export const config = {
    headers: {Authorization: `Bearer ${AsyncStorage.getItem('accessToken')}`}
};