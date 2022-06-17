import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealsScreen from "./src/screens/MealsScreen";
import MealDetailsScreen from "./src/screens/MealDetailsScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import FavoritesContextProvider from "./src/store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="CategoriesScreen"
                component={CategoriesScreen}
                options={{
                    title: "Meals Categories",
                }}
            />
            <Drawer.Screen
                name="FavoritesScreen"
                component={FavoritesScreen}
                options={{
                    title: "Your Favorites",
                }}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <FavoritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerNavigator}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="MealsScreen"
                            component={MealsScreen}
                        />
                        <Stack.Screen
                            name="MealDetailsScreen"
                            component={MealDetailsScreen}
                            options={{
                                title: "Meal Details",
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        backgroundColor: "#254dc3",
    },
});
