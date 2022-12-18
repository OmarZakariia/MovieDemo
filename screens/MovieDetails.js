import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import { GET } from "../Authentication/API.js";
import AppLoader from "../components/ui/AppLoader";
import { IMAGE_POSTER_URL } from "../Authentication/endpoints";

function MovieDetails({ route }) {
  const movieId = route.params.movieId;
  // const movieT = route.params.movieTitle;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await GET(`/movie/${movieId}`);
      setDetails(data);
      console.log(
        "🚀 ~ file: MovieDetails.js:17 ~ getMovieDetails ~ data",
        data
      );
      setLoading(false);
    };

    getMovieDetails();
  }, []);
  return (
    <View>
      {/* <Text>{movieId}</Text> */}
      {/* <Text>{movieT}</Text> */}
      {loading ? (
        <AppLoader />
      ) : (
        <View>
          <Image
            source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }}
            style={{ width: 150, height: 150 }}
          />
          <Text>{details.title}</Text>
          <Text>{details.overview}</Text>
        </View>
      )}
    </View>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({});
