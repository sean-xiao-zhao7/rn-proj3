import { View, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealPreview from "../components/MealPreview";

const MealsScreen = (props) => {
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
