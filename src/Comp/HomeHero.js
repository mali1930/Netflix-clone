import React from "react";
import Hero from "./Hero";
import Search from "./Search";

const HomeHero = () => {
  return (
    <Hero>
      <div className="text-white px-10 flex flex-col justify-center text-center items-center space-y-2 ">
        <h1 className="text-3xl md:text-5xl font-bold">
          Unlimited movies, TV <br />
          shows, and more.
        </h1>
        <p className="md:text-2xl">Watch anywhere. Cancel anytime.</p>
        <Search />
      </div>
    </Hero>
  );
};

export default HomeHero;
