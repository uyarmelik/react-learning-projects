import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: { api_key: API_KEY, query },
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
