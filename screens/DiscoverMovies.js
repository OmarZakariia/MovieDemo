import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, Image } from "react-native";
import { GET } from "../Authentication/API.js";
import MovieGridTile from "../components/ui/MovieGridTile.js";
import { POSTER_IMAGE } from "../Authentication/endpoints.js";

function DiscoverMovies({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      let response = await GET("/discover/movie");

      setMovies(response.results);
      setLoading(false);
    };

    getMovies();
  }, []);

  function renderMoviesHandler(itemData) {
    function onPressHandler() {
      navigation.navigate("MovieDetails", {
        movieId: itemData.item.id,
      });
    }

    return (
      <MovieGridTile
        title={itemData.item.title}
        image={{ uri: `${POSTER_IMAGE}${itemData.item.poster_path}` }}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderMoviesHandler}
      />
    </View>
  );
}

export default DiscoverMovies;

const styles = StyleSheet.create({});
