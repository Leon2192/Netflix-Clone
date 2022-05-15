import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const truncate = (string, n) =>
    string?.length > n ? `${string.substring(0, n - 1)}...` : string;

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=a4887e558ee094c0d1b4810d5ae13237&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      );
      const random = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[random]);
      return request;
    };
    fetchData();
  }, []);
  return (
    <div
      className="Herobanner"
      style={{
        backgroundImage: `url("https://www.themoviedb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="content">
        <Typography variant="h2" component="h1">
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <div className="buttons">
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography
          variant="h6"
          style={{ wordWrap: "break-word" }}
          component="h1"
          className="description"
        >
          {truncate(movie?.overview, 140)}
        </Typography>
        <div className="fadeBottom" />
      </div>
    </div>
  );
};

export default Banner;
