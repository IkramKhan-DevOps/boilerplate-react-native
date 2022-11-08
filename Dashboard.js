import React, {Component, useContext, useState} from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity, Alert,
} from 'react-native';
import BaseScreen from "./components/BaseScreen";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "./config/Colors";
import {AxiosContext} from "./context/AxioContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {dark} from "nativewind/dist/tailwind/native/dark";
import {AuthContext, AuthProvider} from "./context/AuthContext";

function DashboardScreen({navigation}) {
    const [deliveries, setDeliveries] = useState([])
    const [userProfile, setUserProfile] = useState({
        username: null,
        firstname: null,
        lastname: null,
        email: null
    })

    const {authAxios} = useContext(AxiosContext);
    const authContext = useContext(AuthContext);

    const onLoad = async () => {
        try {
            await authAxios.get('/my/delivery/').then(result => {
                setDeliveries(result.data.results)
            });
            await authAxios.get('/my/profile/').then(result => {
                const userDetails = result.data
                setUserProfile({
                    username: userDetails.username,
                    firstname: userDetails.first_name,
                    lastname: userDetails.last_name,
                    email: userDetails.email
                });
            });

        } catch (error) {
            console.log(error)
            Alert.alert('Login Failed', "Login failed");
        }
    }

    return (
        <BaseScreen>
            <View style={{
                flexDirection: "row",
                backgroundColor: colors.secondary,
                padding: 20,
                borderBottomColor: colors.secondary,
                borderBottomWidth: 1
            }}>
                <Ionicons name="md-checkmark-circle" size={50} color="green"/>
                <View style={{marginTop: 2, flex: 1}}>
                    <Text style={{fontWeight: "bold", fontSize: 20}}>{userProfile.username}</Text>
                    <Text style={{}}>{userProfile.email}</Text>
                </View>
                <View style={{justifyContent: "center"}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                        <Ionicons name={"eye"} size={25} color={colors.dark}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => authContext.logout()}>
                        <MaterialCommunityIcons name={"logout"} size={25} color={colors.danger}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{padding: 20}}>
                <Image source={require("./assets/images/warehouse.gif")}
                       style={{height: 500, width: "100%"}}/>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: "bold", fontSize: 24}}>Warehouse</Text>
                        <Text style={{color: "grey"}}>House 155# Auranagabad MPS Mansehra</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight: "bold", fontSize: 24}}>100$</Text>
                        <Text style={{color: "grey"}}>Ikram Khan</Text>
                    </View>
                </View>
                <View style={{marginTop: 40, alignItems: "center"}}>
                    <TouchableOpacity
                        style={{
                            width: "80%",
                            backgroundColor: colors.danger,
                            padding: 20,
                            borderRadius: 25,
                            marginHorizontal: 20
                        }}>
                        <Text style={{
                            textAlign: "center",
                            color: colors.light,
                            fontSize: 24,
                            fontWeight: "bold"
                        }}>Deliver</Text>
                        <Text style={{
                            textAlign: "center",
                            color: colors.secondary,
                            fontWeight: "bold"
                        }}>Close this order - set as complete</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 20, alignItems: "center"}}>
                    <TouchableOpacity onPress={onLoad}>
                        <Text style={{fontWeight: "bold", fontSize: 15, color: colors.blue}}>
                            <MaterialCommunityIcons name={"link"} size={15}/>Click to view History of
                            Deliveries
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </BaseScreen>

    );
}


export default DashboardScreen;