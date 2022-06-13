import { Text, Pressable, StyleSheet } from "react-native";

const MealPreview = (props) => {
    const onPressHandler = () => {};
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

export default MealPreview;

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
