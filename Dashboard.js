import React, {Component} from 'react';
import {AsyncStorage, Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

class DashboardScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: ""
        };
    }

    componentDidMount = () => {
        this.call_profile_api();
        this.call_delivery_api();
    }

    call_profile_api = () => {

        const profile_uri = "https://marktestapp.pythonanywhere.com/api/my/profile/";
        const active_orders_uri = "https://marktestapp.pythonanywhere.com/api/my/delivery/";
        const access = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NTAzNjQ1LCJpYXQiOjE2Njc0MTcyNDUsImp0aSI6IjJlNTQzNDk4OWFiZDQzOWI5NDVjMWU2NDRkYjFmN2NhIiwidXNlcl9pZCI6Ijc1ZGY1NDFlLTQ4NDMtNDZiYS1iMjg0LTAxNDAzNzI1NDZmZCJ9.HnPadPf-vi5S58WcoT69tEafxKDTGd-2xRaQWNPSYQg"

        axios.get(profile_uri, {
            headers: {
                Authorization: 'Bearer ' + access
            }
        }).then(response => {
            console.log(response.data.username)
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
        const access = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NTAzNjQ1LCJpYXQiOjE2Njc0MTcyNDUsImp0aSI6IjJlNTQzNDk4OWFiZDQzOWI5NDVjMWU2NDRkYjFmN2NhIiwidXNlcl9pZCI6Ijc1ZGY1NDFlLTQ4NDMtNDZiYS1iMjg0LTAxNDAzNzI1NDZmZCJ9.HnPadPf-vi5S58WcoT69tEafxKDTGd-2xRaQWNPSYQg"

        axios.get(active_orders_uri, {
            headers: {
                Authorization: 'Bearer ' + access
            }
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            Alert.alert("Authentication failed");
            console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headContainer}>
                    <SafeAreaView>
                        <Image source={require("./assets/favicon.png")}/>
                        <Text>{this.state.username}</Text>
                        <Text>{this.state.email}</Text>
                    </SafeAreaView>
                </View>
                <View style={styles.subContainer}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"

    },

    headContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flex: 1,
        backgroundColor: "red"
    },

    headerText: {
        fontWeight: 20
    },

    subContainer: {
        flex: 3,
        backgroundColor: "green"
    },
});

export default DashboardScreen;