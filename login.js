import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput, Alert
} from "react-native";
import {AsyncStorage} from 'react-native';


import {createStackNavigator, createAppContainer} from 'react-navigation';
import APIEndPoints from "./config/APIEndPoints";


class LoginApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            success: '',
            loading: false
        };

    }

    handleClick() {
        this.setState({loading: true});
        console.log("State added now calling api ....")

        fetch(APIEndPoints.loginUrl, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    loading: false
                })
                if (response.tokens != undefined) {
                    AsyncStorage.setItem('user_id', response.id);
                    AsyncStorage.setItem('email', response.email);
                    AsyncStorage.setItem('username', response.username);
                    AsyncStorage.setItem('access', response.tokens.access);
                    AsyncStorage.setItem('refresh', response.tokens.refresh);

                    Alert.alert("Successfully LoginScreen", "Welcome back Mr " + response.username);

                } else {
                    setTimeout(() => {
                        Alert.alert('Warning', "Invalid credentials are provided");
                    }, 100);
                }
            });
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.martvers}>MARTVERS</Text>
                    <Text style={styles.aWorldToShopFrom}>a world to shop from</Text>
                    <Text style={styles.loremIpsum}>
                        Forget Password? Please consult administration
                    </Text>
                    <Text style={styles.loremIpsum2}>
                        Designed and Developed by exarth.com
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.handleClick()}
                        style={styles.button}
                    >
                        <Text style={styles.login}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        placeholder="Email"
                        textBreakStrategy="balanced"
                        dataDetector="address"
                        style={styles.placeholder1} value={this.state.email}
                        onChangeText={(text) => this.setState({email: text})} autoComplete="email"
                    ></TextInput>
                    <TextInput
                        placeholder="Password"
                        textBreakStrategy="balanced"
                        dataDetector="address"
                        secureTextEntry={true}
                        style={styles.placeholder2} value={this.state.password}
                        onChangeText={(text) => this.setState({password: text})}
                    ></TextInput>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    martvers: {
        top: 270,
        left: -5,
        color: "#121212",
        fontSize: 36,
        textAlign: "center",
        fontWeight: "bold",
    },
    aWorldToShopFrom: {
        top: 310,
        left: 3,
        textAlign: "center",
        position: "absolute",
        color: "#121212",
        fontSize: 18
    },
    placeholder1: {
        top: 309,
        color: "#121212",
        backgroundColor: "rgba(239,239,239,1)",
        borderRadius: 12,
        bottom: 300,
        width: 350,
        height: 50,
        padding: 10
    },
    placeholder2: {
        top: 365,
        position: "absolute",
        color: "#121212",
        backgroundColor: "rgba(239,239,239,1)",
        borderRadius: 12,
        bottom: 387,
        width: 350,
        height: 50,
        padding: 10
    },
    loremIpsum: {
        top: 530,
        left: -50,
        position: "absolute",
        color: "rgba(125,125,125,1)"
    },
    loremIpsum2: {
        top: 830,
        left: -20,
        position: "absolute",
        color: "rgba(175,175,175,1)",
    },
    button: {
        top: 470,
        width: 172,
        height: 48,
        position: "absolute",
        backgroundColor: "rgba(60,127,155,1)",
        borderRadius: 9
    },
    login: {
        textAlign: "center",
        top: 8,
        color: "white",
        fontSize: 26
    }
});


export default LoginApp;