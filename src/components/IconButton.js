import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
    return (
        <Pressable onPress={props.handler}>
            <Ionicons
                name={props.icon ? props.icon : "star"}
                size={props.size ? props.size : 24}
                color={props.color ? props.color : "white"}
            />
        </Pressable>
    );
};

export default IconButton;
