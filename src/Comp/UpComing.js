import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../Config/api_config";

import MovieSection from "./MovieSection";

const UpComing = () => {
  const { startPoint, endPoint, key, popularMovies, topRated, upComing } = api;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    UpComing();
  });

  const UpComing = async () => {
    const {
      data: { results },
    } = await axios.get(startPoint + upComing + key + endPoint);
    setMovies(results);
  };
  return <MovieSection movies={movies} title="UpComing Movies" />;
};

export default UpComing;
