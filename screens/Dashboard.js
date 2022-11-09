import React, {Component, useContext, useState} from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity, Alert,
} from 'react-native';
import BaseScreen from "../components/BaseScreen";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/Colors";

function DashboardScreen({navigation}) {
    const [deliveries, setDeliveries] = useState([])
    const [userProfile, setUserProfile] = useState({
        username: null,
        firstname: null,
        lastname: null,
        email: null
    })

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
                    <TouchableOpacity onPress={() => console.log("logout")}>
                        <MaterialCommunityIcons name={"logout"} size={25} color={colors.danger}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{padding: 20}}>
                <Image source={require("../assets/images/warehouse.gif")}
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
                    <TouchableOpacity onPress={() => console.log("history")}>
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