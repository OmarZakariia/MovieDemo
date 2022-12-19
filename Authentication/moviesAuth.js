import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/movie/popular";
const API_KEY = "3ecf70b1e817f27e0e297f7bc923a69d";

async function authentication(mode) {
  const url = `https://api.themoviedb.org/3/${mode}?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await axios.get(url);

  return response;
}

export function fetchMovies() {
  return authentication("movie/popular");
}
