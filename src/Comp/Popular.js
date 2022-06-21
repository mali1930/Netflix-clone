import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../Config/api_config";
import MovieSection from "./MovieSection";

const Popular = () => {
  const { startPoint, endPoint, key, popularMovies, topRated, upComing } = api;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const {
      data: { results },
    } = await axios.get(startPoint + popularMovies + key + endPoint);
    setMovies(results);
  };
  return <MovieSection movies={movies} title="Most popular Movies" />;
};

export default Popular;
