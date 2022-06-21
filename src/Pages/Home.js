import React from "react";
import Hero from "../Comp/Hero";
import GrayBorder from "../Comp/GrayBorder";
import Information from "../Comp/Information";
import InformationTwo from "../Comp/InformationTwo";
import InformationThree from "../Comp/InformationThree";
import Section from "../Comp/Section";
import FAQ from "../Comp/FAQ";
import HomeHero from "../Comp/HomeHero";

import Header from "../Comp/Header";

const Home = () => {
  return (
    <>
      <div>
        <Header />

        <HomeHero />
        <GrayBorder />
        <Information />
        <InformationTwo />
        <InformationThree />
        <Section />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
