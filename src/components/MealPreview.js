import { Text, Pressable, StyleSheet, View, Image } from "react-native";

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
            <View>
                <Image
                    source={{
                        uri: props.imageUrl,
                    }}
                    style={{ width: "30%", height: 200, marginBottom: 30 }}
                />
            </View>
            <Text>{props.title}</Text>
            <View>
                <Text>{props.duration}</Text>
                <Text>{props.complexity}</Text>
                <Text>{props.affordability}</Text>
            </View>
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
