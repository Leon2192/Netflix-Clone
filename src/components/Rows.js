import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Rows = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://www.themoviedb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${fetchUrl}?api_key=a4887e558ee094c0d1b4810d5ae13237&language=en-US&page=1`
      );
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="rowsRoot">
      <Typography variant="h4">{title}</Typography>
      <div className="posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className="posterImage"
                key={movie.id}
                src={`${base_url}${movie.poster_path}`}
                alt={movie?.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Rows;
