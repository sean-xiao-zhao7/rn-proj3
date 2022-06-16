import { View, FlatList } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealPreview from "../components/MealPreview";
import { useLayoutEffect } from "react";

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
            <FlatList
                data={MEALS}
                renderItem={(item) =>
                    item.item.categoryIds.indexOf(props.route.params.id) >=
                    0 ? (
                        <MealPreview
                            title={item.item.title}
                            id={item.item.id}
                            imageUrl={item.item.imageUrl}
                            duration={item.item.duration}
                            affordability={item.item.affordability}
                            complexity={item.item.complexity}
                        />
                    ) : null
                }
            />
        </View>
    );
};

export default MealsScreen;
