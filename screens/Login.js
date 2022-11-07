import React, {useState} from "react";
import BaseScreen from "../components/BaseScreen";
import {Alert, AsyncStorage, Image, ImageBackground, Text, TextInput, View} from "react-native";
import CustomButton from "../components/CustomButton";
import colors from "../config/Colors";
import APIEndPoints from "../config/APIEndPoints";

function Login() {
    const [emailInput, setEmail] = useState(null);
    const [passwordInput, setPassword] = useState(null);
    const [phone, setPhone] = useState(null);
    const [loading, setLoading] = useState(null);

    function handleLogin() {
        setLoading(true);

        console.log(emailInput)
        console.log(passwordInput)
        fetch("https://marktestapp.pythonanywhere.com/api/auth/rider/login/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailInput,
                password: passwordInput,
            })
        }).then((response) => response.json())
            .then((response) => {
                setLoading(false);

                if (response.tokens !== undefined) {
                    Alert.alert("Successfully Login", "Welcome back Mr " + response.username);

                } else {
                    console.log(response);
                    setTimeout(() => {
                        Alert.alert('Warning', "Invalid credentials are provided");
                    }, 100);
                }
            });
    }

    return (
        <ImageBackground
            style={{
                flex: 1, justifyContent: "center",
                alignItems: "center"
            }}
            source={require("../assets/images/bg1.jpeg")}
            blurRadius={10}
        >
            <View
                style={{
                    marginBottom: 20,
                    alignItems: "center"
                }}
            >
                <Image style={{width: 100, height: 100}}
                       source={require("../assets/images/logo-red-1000.png")}
                />
                <Text style={{fontWeight: "bold", fontSize: 40, color: colors.light}}>
                    Exarth
                </Text>
                <Text style={{fontWeight: "bold", fontSize: 20, color: colors.light}}>
                    The home of exalters
                </Text>
            </View>

            <View>
                <TextInput
                    placeholder="Email"
                    textBreakStrategy="balanced"
                    dataDetector="address"
                    style={{
                        color: "#121212",
                        backgroundColor: "rgba(239,239,239,1)",
                        borderRadius: 15,
                        width: 350,
                        height: 50,
                        padding: 10,
                        marginBottom: 10
                    }} value={emailInput}
                    onChangeText={(text) => setEmail({text})} autoComplete="email"
                ></TextInput>
                <TextInput
                    placeholder="Password"
                    textBreakStrategy="balanced"
                    dataDetector="address"
                    secureTextEntry={true}
                    style={{
                        color: "#121212",
                        backgroundColor: "rgba(239,239,239,1)",
                        borderRadius: 15,
                        width: 350,
                        height: 50,
                        padding: 10
                    }} value={passwordInput}
                    onChangeText={(text) => setPassword({text})}
                ></TextInput>
            </View>

            <View style={{padding: 20, paddingHorizontal: 30, width: "100%"}}>
                <CustomButton title={"Login"} onPress={handleLogin} color={colors.danger}/>
                {/*<CustomButton title={"Signup"} onPress={() => console.log("Sign up")} color={colors.success}/>*/}
                <Text style={{color: colors.light, marginTop: 10, textAlign: "center"}}>
                    Forget password ? please consult administration
                </Text>
            </View>
        </ImageBackground>
    );

}

export default Login;