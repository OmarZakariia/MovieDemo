import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PopularMovies from "./screens/PopularMovies";
import MovieDetails from "./screens/MovieDetails";
import MovieGridTile from "./components/ui/MovieGridTile";
import AppLoader from "./components/ui/AppLoader";

const Stack = createNativeStackNavigator();

function MovieStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Movie Grid" component={MovieGridTile} /> */}
        {/* <Stack.Screen name="loader" component={AppLoader} /> */}
        <Stack.Screen name="PopularMovies" component={PopularMovies} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <MovieStack />;
}
