import { useContext } from "react";
import { FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealPreview from "../components/MealPreview";
import { FavoritesContext } from "../store/context/favorites-context";

const MealList = (props) => {
    const favoritesContext = useContext(FavoritesContext);

    return (
        <FlatList
            data={MEALS}
            renderItem={(item) => {
                const mealPreview = (
                    <MealPreview
                        title={item.item.title}
                        id={item.item.id}
                        imageUrl={item.item.imageUrl}
                        duration={item.item.duration}
                        affordability={item.item.affordability}
                        complexity={item.item.complexity}
                    />
                );
                if (
                    props.condition === "category" &&
                    item.item.categoryIds.indexOf(props.id) >= 0
                ) {
                    return mealPreview;
                } else if (
                    props.condition === "favorite" &&
                    favoritesContext.ids.includes(item.item.id)
                ) {
                    return mealPreview;
                }
            }}
        />
    );
};

export default MealList;
