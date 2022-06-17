import { View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList";

const MealsScreen = (props) => {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: `${
                CATEGORIES.find((c) => c.id === props.route.params.id).title
            } meals`,
        });
    }, [props.navigation, props.route.params.id]);

    return (
        <View>
            <MealList condition="category" id={props.route.params.id} />
        </View>
    );
};

export default MealsScreen;
