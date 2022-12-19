import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { GET } from "../Authentication/API.js";

import { IMAGE_POSTER_URL } from "../Authentication/endpoints";
import IconButton from "../components/ui/IconButton.js";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites.js";
import { deviceWidth, deviceHeight } from "../components/ui/Styles.js";
function MovieDetailsScreen({ route, navigation }) {
  const movieId = route.params.movieId;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  function headerButtonPressed() {
    if (isMovieFavorite) {
      dispatch(removeFavorite({ id: movieId }));
    } else {
      dispatch(addFavorite({ id: movieId }));
    }
  }

  // * get hold of the data in redux store
  const favoriteMovieIds = useSelector((state) => state.favoriteMovie.ids);

  const isMovieFavorite = favoriteMovieIds.includes(movieId);

  // * reducer methods use useDispatch
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        return (
          <IconButton
            onPress={headerButtonPressed}
            icon={isMovieFavorite ? "star" : "star-outline"}
            color={tintColor}
          />
        );
      },
    });
  }, [navigation, headerButtonPressed]);

  useEffect(() => {
    const getMovieDetailsScreen = async () => {
      const data = await GET(`/movie/${movieId}`);
      setDetails(data);

      setLoading(false);
    };

    getMovieDetailsScreen();
  }, []);

  return (
    <View>
      {loading ? (
        <View />
      ) : (
        <View style={styles.rootContainer}>
          <View style={styles.innerContainer}>
            <Image
              source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }}
              style={styles.image}
            />
            <Text style={styles.title}>{details.title}</Text>
            <View style={styles.overView}>
              <Text style={styles.overViewText}>{details.overview}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    width: deviceWidth,
    height: deviceHeight,
    padding: 30,
  },
  innerContainer: {
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 150,
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  overView: {
    borderColor: "black",
    marginVertical: 20,
    borderRadius: 8,
    elevation: 4,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  overViewText: {
    fontSize: 14,
    fontWeight: "400",
    color: "blue",
    textAlign: "justify",
    letterSpacing: 1.0,
    lineHeight: 20,
  },
});
