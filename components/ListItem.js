import {Image, Text, TouchableHighlight, View} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/Colors";

function ListItem({title, subtitle, picture, onPress, onDelete}) {
    return (
        <TouchableHighlight onPress={onPress}
                            underlayColor={colors.secondary}
        >
            <View style={{flexDirection: "row", padding: 15}}>
                <Image style={{width: 50, height: 50, borderRadius: 50, borderColor: "black"}}
                       source={picture}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                    <Text style={{
                        fontSize: 18,
                        textTransform: "uppercase",
                        fontWeight: "bold"
                    }}>{title}</Text>
                    <Text style={{color: "gray"}}>{subtitle}</Text>
                </View>
                <View style={{justifyContent: "center"}}>
                    <MaterialCommunityIcons onPress={onDelete}
                                            name="trash-can"
                                            size={30}
                                            color={colors.danger}
                    />
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default ListItem;