import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealPreview from "../components/MealPreview";

const MealList = (props) => {
    const favoriteIds = useSelector((state) => state.favoritesReducer.ids);

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
                    favoriteIds.includes(item.item.id)
                ) {
                    return mealPreview;
                }
            }}
        />
    );
};

export default MealList;
