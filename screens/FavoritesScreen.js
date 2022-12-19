import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { GET } from "../Authentication/API";
import MovieCard from "../components/ui/MovieCard";

function FavoritesScreen() {
  const favoriteMovieIds = useSelector((state) => state.favoriteMovie.ids);

  const [details, setDetails] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await GET(`/movie/${favoriteMovieIds}`);
      setDetails(data);
      console.log("USE EFFECT CALLED");
      setLoading(false);
    };
    getMovieDetails();
  }, [favoriteMovieIds]);

  if (loading || favoriteMovieIds.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> You have no favorite movies yet</Text>
      </View>
    );
  }

  return (
    <MovieCard
      title={details.title}
      id={details.id}
      imageURL={details.backdrop_path}
    />
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
