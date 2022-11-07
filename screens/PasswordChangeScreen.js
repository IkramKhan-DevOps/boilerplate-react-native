import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import colors from "../config/Colors";
import {useState} from "react";

function PasswordChangeScreen(props) {

    const [oldPasswordValue, setOldPassword] = useState(null);
    const [newPasswordValue, setNewPassword] = useState(null);
    const [confirmPasswordValue, setConfirmPassword] = useState(null);

    function handleSubmit() {
        
    }

    return (
        <View style={{padding: 20}}>
            <View style={{alignItems: "center", marginVertical: 20}}>
                <Text style={{fontWeight: "bold", fontSize: 24}}>
                    Profile Information
                </Text>
            </View>
            <View style={{padding: 20}}>
                <TextInput
                    onChangeText={(text) => setOldPassword(text)} value={oldPasswordValue}
                    style={styles.input}
                    keyboardType="default"
                    placeholder="Previous Password"
                    secureTextEntry={true}
                />
                <TextInput
                    onChangeText={(text) => setNewPassword(text)} value={newPasswordValue}
                    style={styles.input}
                    placeholder="New Password"
                    keyboardType="default"
                    secureTextEntry={true}
                />
                <TextInput
                    onChangeText={(text) => setConfirmPassword(text)} value={confirmPasswordValue}
                    style={styles.input}
                    placeholder="Confirm Password"
                    keyboardType="default"
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    onPress={handleSubmit}
                    style={{marginTop: 10, padding: 20, borderRadius: 25, backgroundColor: colors.success}}>
                    <Text style={{textAlign: "center", fontWeight: "bold", color: colors.light, fontSize: 20}}>
                        Submit
                    </Text>
                </TouchableOpacity>

                <Text onPress={() => console.log("Forget Password command")}
                      style={{color: "blue", marginTop: 10, fontWeight: "bold", paddingLeft: 5}}>
                    Forget password? Click here to reset now.
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

export default PasswordChangeScreen;