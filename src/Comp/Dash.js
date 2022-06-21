import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../Config/api_config";
import Header from "../Comp/Header";
import Img from "../Comp/Img";
import Popular from "./Popular";
import TopRated from "./TopRated";
import UpComing from "./UpComing";

const Dash = () => {
  const [bgImg, setBigImg] = useState();
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
  // const ran = Math.floor() * 10;
  // const path = results[0].backdrop_path;
  // const bg = baseImgUrl + path;
  // setBigImg(bg);
  return (
    <div>
      <Header isDash />
      <Img />

      <Popular />
      <TopRated />
      <UpComing />
    </div>
  );
};

export default Dash;
