import React, {Component} from 'react';
import {
    AsyncStorage,
    Alert,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import axios from 'axios';
import BaseScreen from "./components/BaseScreen";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "./config/Colors";
import {AuthProvider} from "./context/AuthContext";
import {AxiosProvider} from "./context/AxioContext";

class DashboardScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null
        };
    }

    componentDidMount = () => {
        // this.call_profile_api();
        // this.call_delivery_api();
    }

    call_profile_api = () => {

        const profile_uri = "https://marktestapp.pythonanywhere.com/api/my/profile/";
        const access = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3ODk0NTQzLCJpYXQiOjE2Njc4MDgxNDMsImp0aSI6ImVkYWY2MzBjZWVmNTQxNzA4MDcwYjZhY2NmYTI0YjVhIiwidXNlcl9pZCI6Ijc1ZGY1NDFlLTQ4NDMtNDZiYS1iMjg0LTAxNDAzNzI1NDZmZCJ9.oOCUvClQjNI4ywpSUqupMHMUM6bLlj9uL7LCeIhQ_dA"

        axios.get(profile_uri, {
            headers: {
                Authorization: 'Bearer ' + access
            }
        }).then(response => {
            this.setState({
                username: response.data.username,
                email: response.data.email,
            });
        }).catch(error => {
            Alert.alert("Authentication failed");
        });
    }

    call_delivery_api = () => {

        const active_orders_uri = "https://marktestapp.pythonanywhere.com/api/my/delivery/";
        const access = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3ODk0NTQzLCJpYXQiOjE2Njc4MDgxNDMsImp0aSI6ImVkYWY2MzBjZWVmNTQxNzA4MDcwYjZhY2NmYTI0YjVhIiwidXNlcl9pZCI6Ijc1ZGY1NDFlLTQ4NDMtNDZiYS1iMjg0LTAxNDAzNzI1NDZmZCJ9.oOCUvClQjNI4ywpSUqupMHMUM6bLlj9uL7LCeIhQ_dA"

        axios.get(active_orders_uri, {
            headers: {
                Authorization: 'Bearer ' + access
            }
        }).then(response => {

        }).catch(error => {
            Alert.alert("Authentication failed");
        });
    }

    render() {
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
                        <Text style={{fontWeight: "bold", fontSize: 20}}>Ikram Khan</Text>
                        <Text style={{}}>Founder and CEO at exarth</Text>
                    </View>
                    <View style={{justifyContent: "center"}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                            <Ionicons name={"eye"} size={25} color={colors.dark}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("History")}>
                            <Text style={{fontWeight: "bold", fontSize: 15, color: colors.blue}}>
                                <MaterialCommunityIcons name={"link"} size={15}/>Click to view History of
                                Deliveries
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*<View style={{flex: 1}}>*/}
                {/*    <View style={{*/}
                {/*        backgroundColor: colors.secondary,*/}
                {/*        flexDirection: "row",*/}
                {/*        justifyContent: "center",*/}
                {/*        alignItems: "flex-end"*/}
                {/*    }}>*/}
                {/*        <TouchableOpacity style={{width: "25%", justifyContent: "center"}}>*/}
                {/*            <Ionicons style={{padding: 10}} name="home" color="black" size={40}*/}
                {/*                      onPress={() => console.log("home")}/>*/}
                {/*        </TouchableOpacity>*/}

                {/*        <TouchableOpacity style={{width: "25%", justifyContent: "center"}}>*/}
                {/*            <Ionicons style={{padding: 10}} name="home" color="black" size={40} type={"antdesign"}*/}
                {/*                      onPress={() => console.log("user")}/>*/}
                {/*        </TouchableOpacity>*/}

                {/*        <TouchableOpacity style={{width: "25%", justifyContent: "center"}}>*/}
                {/*            <Ionicons style={{padding: 10}} name="home" color="black" size={40} type={"antdesign"}*/}
                {/*                      onPress={() => console.log("dashboard")}/>*/}
                {/*        </TouchableOpacity>*/}

                {/*        <TouchableOpacity style={{width: "25%", justifyContent: "center"}}>*/}
                {/*            <Ionicons style={{padding: 10}} name="home" color="black" size={40} type={"antdesign"}*/}
                {/*                      onPress={() => console.log("logout")}/>*/}
                {/*        </TouchableOpacity>*/}
                {/*    </View>*/}
                {/*</View>*/}

            </BaseScreen>

        );
    }
}

const styles = StyleSheet.create({});

export default DashboardScreen;