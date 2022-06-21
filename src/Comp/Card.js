import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../Config/api_config";

const Card = ({ movie }) => {
  const navigate = useNavigate();
  const {
    id,
    title,
    orignal_title,
    vote_average,
    backdrop_path,
    release_date,
    poster_path,
  } = movie;
  return (
    <>
      <div onClick={() => navigate(`/dash/${id}`)}>
        <img
          width="320px"
          className="hover:scale-110 duration-100 cursor-pointer "
          src={api.baseImgUrl + backdrop_path}
          alt={title}
        />
        <p className="text-white text-center bg-myRed p-2">{title}</p>
      </div>
    </>
  );
};

export default Card;
