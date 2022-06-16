const { View, Text, Image } = require("react-native");
import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

const MealDetailsScreen = (props) => {
    const meal = MEALS.find((m) => props.route.params.id === m.id);

    const handler = () => {};

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        title={"asdfas"}
                        handler={handler}
                        color="black"
                        size={32}
                    />
                );
            },
        });
    }, [props.navigation, handler]);

    return (
        <View>
            <Image
                source={{
                    uri: meal.imageUrl,
                }}
                style={{ width: "30%", height: 200, marginBottom: 30 }}
            />
            <Text>{meal.title}</Text>
            <Text>{meal.ingredients}</Text>
            <Text>{meal.steps}</Text>
            <Text>{meal.complexity}</Text>
            <Text>{meal.isGlutenFree}</Text>
        </View>
    );
};

export default MealDetailsScreen;
