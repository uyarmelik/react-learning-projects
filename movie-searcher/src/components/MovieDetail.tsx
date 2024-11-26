import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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

const MovieDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state as Movie;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <IconButton onClick={handleBack} sx={{ mt: 2, mb: 1 }}>
        <ArrowBackIcon />
      </IconButton>
      <Card className="movieCard">
        {movie.poster_path && (
          <CardMedia
            component="img"
            className="movieMedia"
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <Box className="movieContent">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="movieTitle"
            >
              {movie.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="movieTypography"
            >
              <strong>Overview:</strong> {movie.overview}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="movieTypography"
            >
              <strong>Vote Average:</strong> {movie.vote_average}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="movieTypography"
            >
              <strong>Popularity:</strong> {movie.popularity}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="movieTypography"
            >
              <strong>Release Date:</strong>{" "}
              {new Date(movie.release_date).toLocaleDateString("en-EN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default MovieDetail;
