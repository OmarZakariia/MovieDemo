import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { IMAGE_POSTER_URL } from "../../Authentication/endpoints";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function MovieCard({ id, title, imageURL }) {
  const favoriteMovieIds = useSelector((state) => state.favoriteMovie.ids);

  const navigation = useNavigation();

  function renderMoviesHandler() {
    const movieProps = {
      title: title,
      imageURL: imageURL,
    };
    console.log(movieProps.id + "movieprops ID");
    function onPressHandler() {
      navigation.navigate("MovieDetails", {
        movieId: id,
      });
    }

    return (
      <View style={styles.movieItem}>
        <TouchableOpacity onPress={onPressHandler}>
          <View>
            <Image
              source={{ uri: `${IMAGE_POSTER_URL}${movieProps.imageURL}` }}
              style={styles.image}
            />
            <Text style={styles.title}>{movieProps.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMovieIds}
      renderItem={renderMoviesHandler}
      key={id}
    />
  );
}

export default MovieCard;

const styles = StyleSheet.create({
  movieItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
});
