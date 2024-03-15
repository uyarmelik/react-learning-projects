import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import defaultPoster from "../images/no-image.svg";
import { searchMovies } from "../api/MovieApi";
import SearchBar from "./SearchBar";
import "../App.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  popularity: number;
  release_date: string;
  overview: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [likedMovies, setLikedMovies] = useState<{ [key: number]: boolean }>(
    {}
  );
  const navigate = useNavigate();

  const handleSearch = async (query: string) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  const handleLike = (movieId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setLikedMovies((prev) => ({
      ...prev,
      [movieId]: !prev[movieId],
    }));
  };

  const handleNavigate = (movie: Movie) => {
    navigate(`/movie/${movie.id}`, { state: movie });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="movie-container">
        {movies.map((movie) => (
          <Card
            className="movie-card"
            key={movie.id}
            onClick={() => handleNavigate(movie)}
          >
            <CardMedia
              component="img"
              height="330"
              image={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title}
              className={movie.poster_path !== null ? "" : "poster-image"}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {movie.title}
              </Typography>
              <div className="like-button-container">
                <IconButton
                  onClick={(event) => handleLike(movie.id, event)}
                  aria-label="like"
                  style={{ color: likedMovies[movie.id] ? "red" : "white" }}
                >
                  {likedMovies[movie.id] ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
