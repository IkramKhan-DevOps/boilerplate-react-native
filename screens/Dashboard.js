import React, {Component, useContext, useEffect, useState} from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity, Alert, RefreshControl,
} from 'react-native';
import BaseScreen from "../components/BaseScreen";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/Colors";
import {AuthContext} from "../context/AuthContext";
import {AxiosContext} from "../context/AxiosContext";
import axios from "axios";
import {baseUrl, deliveryUrl, profileUrl} from "../config/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

function DashboardScreen({navigation}) {
    const [noDeliveries, setNoDeliveries] = useState(true)
    const [userProfile, setUserProfile] = useState({
        username: null,
        firstname: null,
        lastname: null,
        email: null
    })
    const [delivery, setDelivery] = useState({
        id: null,
        orderId: null,
        warehouse: null,
        customerName: null,
        location: null,
    })

    const {logout, accessToken} = useContext(AuthContext)

    useEffect(() => {
        userProfileAPICall();
        userDeliveryAPICall();
    }, [])

    function userProfileAPICall() {
        console.log(accessToken)
        axios.get(
            profileUrl, {
                headers: {Authorization: `Bearer ${accessToken}`}
            }).then(r => {
            setUserProfile({
                firstname: r.data.first_name,
                lastname: r.data.last_name,
                email: r.data.email,
                username: r.data.username
            })
        }).catch(e => {
            console.log(e)
        });
    }

    function userDeliveryAPICall() {
        axios.get(deliveryUrl, {
            headers: {Authorization: `Bearer ${accessToken}`}
        }).then(r => {
            console.log(r)
            if (r.data.results.length < 1) {
                setDelivery({
                    id: null,
                    orderId: null,
                    warehouse: null,
                    customerName: null,
                    location: null,
                })
            } else {
                const result = r.data.results
                setDelivery({
                    id: result[0].id,
                    orderId: result[0].order.id,
                    warehouse: result[0].order.fk_warehouse,
                    customerName: result[0].order.fk_customer.username,
                    location: result[0].order.fk_customer.location === null ? "location is not provided" : result[0].order.fk_customer.location,
                })
            }
        }).catch(e => {
            console.log(e)
        });
    }

    function orderStatusChangeAPICall() {
        axios.put(`${baseUrl}my/delivery/${delivery.id}/`, {status: 'com'}, {
            headers: {Authorization: `Bearer ${accessToken}`}
        }).then(r => {
            console.log(r)
            userDeliveryAPICall();
        }).catch(e => {
            console.log(e)
        });
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
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Ionicons name={"eye"} size={25} color={colors.dark}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => logout()}>
                        <MaterialCommunityIcons name={"logout"} size={25} color={colors.danger}/>
                    </TouchableOpacity>
                </View>
            </View>
            {
                noDeliveries ? (
                    <View style={{padding: 20, alignItems: "center"}}>
                        <Image source={require("../assets/images/nodata.gif")}
                               style={{height: 300, width: "70%"}}/>
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontWeight: "bold", fontSize: 50, textAlign: "center", color: "red"}}
                                      numberOfLines={1}>No active orders</Text>
                                <Text style={{color: "tomato", fontSize: 24, textAlign: "center"}}>Please consult
                                    administration for
                                    more deliveries</Text>
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={{padding: 20}}>
                        <Image source={require("../assets/images/warehouse.gif")}
                               style={{height: 500, width: "100%"}}/>
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontWeight: "bold", fontSize: 24}}
                                      numberOfLines={1}>{delivery.warehouse}</Text>
                                <Text style={{color: "grey"}}>{delivery.location}</Text>
                            </View>
                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 24}}>100$</Text>
                                <Text style={{color: "grey"}}>{delivery.customerName}</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 40, alignItems: "center"}}>
                            <TouchableOpacity onPress={() => orderStatusChangeAPICall()}
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
                            <TouchableOpacity onPress={() => console.log("history")}>
                                <Text style={{fontWeight: "bold", fontSize: 15, color: colors.blue}}>
                                    <MaterialCommunityIcons name={"link"} size={15}/>Click to view History of
                                    Deliveries
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </BaseScreen>

    );
}


export default DashboardScreen;