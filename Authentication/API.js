import { BASE_URL, API_KEY } from "./endpoints";

// ! handling API calls
export const GET = async (url) => {
  // const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`;
  const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`;

  // console.log("😇 ~ file: API.JS:8 ~ GET ~ API_URL", API_URL);
  let response = await fetch(API_URL, { method: "GET" });
  response = response.json();

  return response;
};
