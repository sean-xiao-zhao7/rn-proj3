const { View, Text } = require("react-native");

const MealDetailsScreen = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
};

export default MealDetailsScreen;
