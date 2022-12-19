import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PopularMovies from "./screens/DiscoverMovies";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import { Ionicons } from "@expo/vector-icons";
import MovieCard from "./components/ui/MovieCard";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Discover"
        component={PopularMovies}
        options={{
          title: "Discover Movies",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="film" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
