import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../Config/api_config";

import MovieSection from "./MovieSection";

const TopRated = () => {
  const { startPoint, endPoint, key, popularMovies, topRated, upComing } = api;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    TopRated();
  }, []);

  const TopRated = async () => {
    const {
      data: { results },
    } = await axios.get(startPoint + topRated + key + endPoint);
    setMovies(results);
  };
  return <MovieSection movies={movies} title="Top Rated Movies" />;
};

export default TopRated;
