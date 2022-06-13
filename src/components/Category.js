import { Text, Pressable } from "react-native";

const Category = (props) => {
    const onPressHandler = () => {};
    return (
        <Pressable onPress={onPressHandler}>
            <Text>{props.title}</Text>
        </Pressable>
    );
};

export default Category;
