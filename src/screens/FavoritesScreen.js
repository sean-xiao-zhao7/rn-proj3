const { View } = require("react-native");

import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
    return (
        <View>
            <MealList condition={"favorite"} />
        </View>
    );
};

export default FavoritesScreen;
