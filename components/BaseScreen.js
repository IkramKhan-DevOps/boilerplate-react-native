import {Platform, SafeAreaView, StatusBar} from "react-native";

function BaseScreen(props) {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }}>
            {props.children}
        </SafeAreaView>
    )
}

export default BaseScreen;