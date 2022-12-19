import { BASE_URL, API_KEY } from "./endpoints";

// ! handling API calls
export const GET = async (url) => {
  const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`;

  let response = await fetch(API_URL, { method: "GET" });

  response = response.json();

  return response;
};
