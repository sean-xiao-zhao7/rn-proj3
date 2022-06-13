import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealsScreen from "./src/screens/MealsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="CategoriesScreen"
                        component={CategoriesScreen}
                    />
                    <Stack.Screen name="MealsScreen" component={MealsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#254dc3",
    },
});
