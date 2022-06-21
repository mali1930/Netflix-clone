import React from "react";
import GrayBorder from "./GrayBorder";

const Section = () => {
  return (
    <>
      <div className="bg-black space-y-2 px-14 py-20 md:flex md:flex-row justify-center  ">
        <img className=" flex[0.4]" src={require("../img/kid.png")} />

        <div className="md:flex flex-[0.6] md:flex-col  space-y-4 md:py-40">
          <h1 className="text-white text-5xl font-bold text-center">
            Create profiles for kids.
          </h1>
          <p className="text-white text-center text-xl">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
      <GrayBorder />
    </>
  );
};

export default Section;
