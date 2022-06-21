import axios from "axios";
import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import api from "../Config/api_config";
const Carousel = ({ movie_id }) => {
  const [credits, setCredits] = useState([]);
  const { startPoint, key, endPoint, baseImgUrl } = api;
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 5,
    },
  };
  useEffect(() => {
    getCredits();
  }, []);

  const getCredits = async () => {
    const {
      data: { cast },
    } = await axios.get(
      startPoint + "/" + movie_id + "/credits?api_key=" + key + endPoint
    );
    setCredits(cast);
    console.log(cast);
  };
  const items = credits.map((c) => (
    <div className="flex text-center mt-2 flex-col justify-center items-center object-contain p-2">
      <img
        className="max-w[100px] w-[100px] rounded-md"
        src={baseImgUrl + c.profile_path}
      />
      <p>{c.original_name || c.name}</p>
    </div>
  ));
  return (
    <>
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        disableDotsControls
        autoPlay
        infinite
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </>
  );
};

export default Carousel;
