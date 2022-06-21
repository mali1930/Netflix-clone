import React from "react";
import Card from "./Card";
const MovieSection = ({ title, movies }) => {
  return (
    <div>
      <div>
        <div className="pt-40 pb-40 bg-black">
          <p className="text-white text-7xl text-center pb-10">{title}</p>

          <div className="flex flex-wrap items-center justify-center space-x-2 space-y-2 ">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
