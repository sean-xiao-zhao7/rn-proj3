import { FlatList, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Category from "../components/Category";

const CategoriesScreen = (props) => {
    const onPressHandler = (id) => {
        props.navigation.navigate("MealsScreen", { id: id });
    };
    return (
        <View>
            <FlatList
                data={CATEGORIES}
                renderItem={(item) => (
                    <Category
                        id={item.item.id}
                        title={item.item.title}
                        onPressHandler={onPressHandler}
                    />
                )}
                keyExtractor={(category) => category.id}
                numColumns={2}
            />
        </View>
    );
};

export default CategoriesScreen;
