import { Text, Pressable, StyleSheet } from "react-native";

const Category = (props) => {
    const onPressHandler = () => {
        props.onPressHandler(props.id);
    };
    return (
        <Pressable
            onPress={onPressHandler}
            style={({ pressed }) => [
                styles.pressable,
                pressed ? { color: "#f9eca9" } : null,
            ]}
            android_ripple={{ color: "#f9eca9" }}
        >
            <Text>{props.title}</Text>
        </Pressable>
    );
};

export default Category;

const styles = StyleSheet.create({
    pressable: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 20,
        margin: 10,
        backgroundColor: "whitesmoke",
        borderRadius: 5,
    },
});
