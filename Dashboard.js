import React, { Component } from 'react';
import { AsyncStorage, Alert, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

class DashboardScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: ""
        }

        this.getDashboardDetails();
    }

    
    getDashboardDetails(){

        const profile_uri = "https://marktestapp.pythonanywhere.com/api/my/profile/";
        const active_orders_uri = "https://marktestapp.pythonanywhere.com/api/my/delivery/";
        const access = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NDAwMjczLCJpYXQiOjE2NjczMTM4NzMsImp0aSI6ImZkYjNkOThiNDc3MTQ1ZjI5OTZmNzkxZDY5ZmFiZTAwIiwidXNlcl9pZCI6Ijc1ZGY1NDFlLTQ4NDMtNDZiYS1iMjg0LTAxNDAzNzI1NDZmZCJ9.jxWS5XIxBespuyRkMq5LBUEJRj1UpGlfMH1iAz4PMR8"

        axios.get(profile_uri, {
          headers: {
            Authorization: 'Bearer ' + access
          }
        })
        .then(function (response) {
            this.setState(
                {
                    username: "Vale",
                }
            )
            console.log(this.state.username)
        })
        .catch(function (error) {
           Alert.alert("Authentication failed", error.response.data.detail);
           console.log(error.response.status);
           console.log(error.response.data.detail);
           console.log(error.code);
           console.log(error)
        })
        .finally(function () {});
    }


    render() { 
        return (
            <View style={styles.container}>
                <View style={styles.headContainer}>
                    <SafeAreaView>
                    <Image source={require("./assets/favicon.png")}/>
                    <Text>{this.state.username}</Text>
                    <Text>{this.state.username}</Text>
                    <Text>{this.state.username}</Text>
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
        alignContent:"center"
        
    },

    headContainer:{
        justifyContent: "center",
        alignItems:"center",
        alignContent:"center",
        flex:1,
        backgroundColor: "red"
    },

    headerText:{
        fontWeight: 20
    },

    subContainer:{
        flex:3,
        backgroundColor: "green"
    },
});
 
export default DashboardScreen;