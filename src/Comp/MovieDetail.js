import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import api from "../Config/api_config";
import Carousel from "./Carousel";

const MovieDetail = () => {
  const nav = useNavigate();
  const { movie_id } = useParams();
  const [movie, setMovie] = useState();
  const { startPoint, key, endPoint, baseImgUrl } = api;
  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(
      startPoint + "/" + movie_id + "?api_key=" + key + endPoint
    );

    setMovie(data);
  };
  return (
    <>
      <div className="bg-black">
        <Header isDash />
        {movie && (
          <div className="container pt-28 md:gap-14   w-full bg-black flex flex-col  md:flex md:flex-row items-center justify-between p-14">
            <img
              className="w-[380px] md:w-[40%]"
              src={baseImgUrl + movie?.poster_path}
              alt={movie?.title}
            />
            <div className="flex space-y-5  flex-col text-white">
              <p className="text-5xl  text-center">
                {movie.title || movie.original_title}
              </p>
              <p className="text-xl">{movie.tagline}</p>
              <p className="text-center mt-5">{movie.overview}</p>
              <div className="container  md:w-[50vw] w-[75vw] md:max-w-2xl border-2 ">
                <Carousel movie_id={movie_id} />
              </div>
              <div className="max-w-2xl">
                <button className="bg-myRed w-full text-white px-6 flex flex-row align-center items-center  justify-center gap-7 mt-5 py-2  pointer  rounded-md">
                  Watch Trailer <AiFillYoutube size="40" />
                </button>
                <button
                  onClick={() => nav(`/dash`)}
                  className="bg-myRed  w-full text-white px-6 flex flex-row align-center items-center  justify-center gap-7 mt-5 py-2  pointer  rounded-md"
                >
                  Back To Dashboard
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetail;
