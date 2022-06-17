const { View, Text, Image } = require("react-native");
import { useContext, useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import IconButton from "../components/IconButton";

const MealDetailsScreen = (props) => {
    const favoriteContext = useContext(FavoritesContext);

    const meal = MEALS.find((m) => props.route.params.id === m.id);
    const isFavorite = favoriteContext.ids.includes(props.route.params.id);

    const favoriteHandler = () => {
        if (isFavorite) {
            favoriteContext.removeFromFavorite(props.route.params.id);
        } else {
            favoriteContext.addToFavorite(props.route.params.id);
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
