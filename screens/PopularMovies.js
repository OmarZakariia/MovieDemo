import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, Image } from "react-native";
import { GET } from "../Authentication/API.js";
import { authentication, fetchMovies } from "../Authentication/moviesAuth.js";
import MovieGridTile from "../components/ui/MovieGridTile.js";
import MovieDetails from "./MovieDetails.js";
import AppLoader from "../components/ui/AppLoader";
import { POSTER_IMAGE } from "../Authentication/endpoints.js";

function PopularMovies({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      let response = await GET("/discover/movie");
      // console.log(
      //   "🚀 ~ file: PopularMovies.js:9 ~ getMovies ~ response",
      //   response
      // );
      setMovies(response.results);
      setLoading(false);
    };

    getMovies();
  }, []);

  // useEffect(() => {
  //   async function getMovies() {
  //     const response = await fetchMovies();
  //     console.log(
  //       "1️⃣r ~ file: PopularMovies.js:26 ~ getMovies ~ response",
  //       response
  //     );
  //     setMovies(response.data);
  //   }
  //   getMovies();
  // }, []);

  function renderMoviesHandler(itemData) {
    function onPressHandler() {
      navigation.navigate("MovieDetails", {
        movieId: itemData.item.id,
        movieTitle: itemData.item.title,
      });
    }

    return (
      <MovieGridTile
        title={itemData.item.title}
        image={{ uri: `${POSTER_IMAGE}${itemData.item.poster_path}` }}
        onPress={onPressHandler}
      />
    );
    // return (
    //   <View>
    //     <Text>{itemData.item.title}</Text>
    //     <Image
    //       source={{ uri: `${POSTER_IMAGE}${itemData.item.poster_path}` }}
    //       style={{ width: 50, height: 50 }}
    //     />
    //   </View>
    // );
  }
  {
    /* {movies.map((movie) => (
        <MovieDetails title={movie.title} />
      ))} */
  }
  return (
    <View>
      {/* <Text> PopularMovies screen</Text> */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderMoviesHandler}
        // numColumns={2}
      />
      {/* {loading ? (
        <AppLoader />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={renderMoviesHandler}
          // numColumns={2}
        />
      
      )} */}
    </View>
  );
}

export default PopularMovies;

const styles = StyleSheet.create({});
