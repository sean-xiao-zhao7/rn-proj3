import { FlatList, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Category from "../components/Category";

const CategoriesScreen = () => {
    return (
        <View>
            <h1>CategoriesScreen</h1>
            <FlatList
                data={CATEGORIES}
                renderItem={(item) => <Category title={item.item.title} />}
                keyExtractor={(category) => category.id}
            />
        </View>
    );
};

export default CategoriesScreen;
