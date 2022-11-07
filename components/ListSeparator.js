import React from "react";
import {View} from "react-native";
import colors from "../config/Colors";

function ListSeparator() {
    return (
        <View style={{
            width: "100%", height: 1,
            backgroundColor: colors.secondary
        }}/>
    )
}

export default ListSeparator;