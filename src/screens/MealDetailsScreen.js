const { View, Text, Image } = require("react-native");
import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import {
    removeFromFavorite,
    addToFavorite,
} from "../store/redux/favoritesSlice";

const MealDetailsScreen = (props) => {
    const meal = MEALS.find((m) => props.route.params.id === m.id);
    const dispatch = useDispatch();
    const ids = useSelector((state) => state.favoritesReducer.ids);
    const isFavorite = ids.includes(props.route.params.id);

    const favoriteHandler = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite({ id: props.route.params.id }));
        } else {
            dispatch(addToFavorite({ id: props.route.params.id }));
        }
    };

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        title={"asdfas"}
                        handler={favoriteHandler}
                        color={isFavorite ? "yellow" : "black"}
                        size={32}
                    />
                );
            },
        });
    }, [props.navigation, favoriteHandler, isFavorite]);

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
