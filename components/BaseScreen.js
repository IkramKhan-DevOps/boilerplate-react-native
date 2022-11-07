import {Platform, SafeAreaView} from "react-native";

function BaseScreen(props) {
    return (
        <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === "android" ? 10 : 0}}>
            {props.children}
        </SafeAreaView>
    )
}

export default BaseScreen;