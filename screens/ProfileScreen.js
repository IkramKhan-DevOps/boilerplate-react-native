import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import colors from "../config/Colors";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {profileUrl} from "../config/API";
import {AuthContext} from "../context/AuthContext";

function ProfileScreen({navigation}) {

    const [usernameValue, setUsername] = useState(null);
    const [firstNameValue, setFirstName] = useState(null);
    const [lastNameValue, setLastName] = useState(null);
    const [emailValue, setEmail] = useState(null);
    const [phoneValue, setPhone] = useState(null);
    const {accessToken} = useContext(AuthContext)

    function userProfileGetAPICall() {
        axios.get(profileUrl, {
            headers: {Authorization: `Bearer ${accessToken}`}
        }).then(r => {
            setUsername(r.data.username)
            setFirstName(r.data.first_name)
            setLastName(r.data.last_name)
            setEmail(r.data.email)
            setPhone(r.data.phone_number)
        }).catch(e => {
            console.log(e)
        })
    }

    function userProfileUpdateAPICall() {
        const data = {
            username: usernameValue,
            first_name: firstNameValue,
            last_name: lastNameValue,
            email: emailValue,
            phone_number: phoneValue,
        }

        axios.put(profileUrl, data, {
            headers: {Authorization: `Bearer ${accessToken}`}
        }).then(r => {
            console.log(r)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        userProfileGetAPICall();
    }, [])

    return (
        <View style={{padding: 20}}>
            <View style={{alignItems: "center", marginVertical: 20}}>
                <Text style={{fontWeight: "bold", fontSize: 24}}>
                    Profile Information
                </Text>
            </View>
            <View style={{padding: 20}}>
                <TextInput
                    onChangeText={(text) => setUsername(text)} value={usernameValue}
                    style={styles.input}
                    keyboardType="default"
                    placeholder="Username"
                />
                <TextInput
                    onChangeText={(text) => setFirstName(text)} value={firstNameValue}
                    style={styles.input}
                    placeholder="First Name"
                    keyboardType="default"
                />
                <TextInput
                    onChangeText={(text) => setLastName(text)} value={lastNameValue}
                    style={styles.input}
                    placeholder="Last Name"
                    keyboardType="default"
                />
                <TextInput
                    onChangeText={(text) => setEmail(text)} value={emailValue}
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    onChangeText={(text) => setPhone(text)} value={phoneValue}
                    style={styles.input}
                    placeholder="Phone"
                    keyboardType="numeric"
                />

                <Text style={{color: "grey", marginTop: 20, paddingLeft: 5}}>
                    I hereby agreed all the above information is correct.
                </Text>

                <TouchableOpacity
                    onPress={() => userProfileUpdateAPICall()}
                    style={{marginTop: 10, padding: 20, borderRadius: 25, backgroundColor: colors.success}}>
                    <Text style={{textAlign: "center", fontWeight: "bold", color: colors.light, fontSize: 20}}>
                        Submit
                    </Text>
                </TouchableOpacity>

                <Text onPress={() => navigation.navigate("PasswordChange")}
                      style={{color: "blue", marginTop: 10, fontWeight: "bold", paddingLeft: 5}}>
                    To change password? Click here.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "lightgrey",
        backgroundColor: "lightgrey",
        height: 50,
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 25
    }
})

export default ProfileScreen;