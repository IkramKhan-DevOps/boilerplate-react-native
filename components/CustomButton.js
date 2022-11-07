import colors from "../config/Colors";
import {Text, TouchableOpacity} from "react-native";

function CustomButton({title, onPress, color}) {
    return (
        <TouchableOpacity
            style={{
                justifyContent: "center", width: "100%",
                marginVertical: 5, padding: 15, borderRadius: 25,
                backgroundColor: color
            }} onPress={onPress}>
            <Text
                style={{
                    color: colors.light, textAlign: "center",
                    fontSize: 18, fontWeight: "bold"
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;